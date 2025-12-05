document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('time-rows-container');
    const addRowBtn = document.getElementById('add-row-btn');
    const calculateBtn = document.getElementById('calculate-btn');
    const resH = document.getElementById('res-h');
    const resM = document.getElementById('res-m');
    const resultDisplay = document.getElementById('result-display');
    const continueBtn = document.getElementById('continue-btn');
    const historySection = document.getElementById('history-section');
    const historyList = document.getElementById('history-list');

    let lastCalculatedMinutes = 0;

    // Add initial row
    addRow();
    addRow(); // Start with two rows as convenience

    addRowBtn.addEventListener('click', () => {
        addRow();
    });

    calculateBtn.addEventListener('click', calculateTotal);
    continueBtn.addEventListener('click', continueWithResult);

    function addRow() {
        const row = document.createElement('div');
        row.className = 'time-row';

        row.innerHTML = `
            <button class="row-op-toggle" title="Toggle +/-">+</button>
            <div class="input-wrapper">
                <input type="number" class="time-h" placeholder="00" min="0">
                <span>h</span>
            </div>
            <div class="input-wrapper">
                <input type="number" class="time-m" placeholder="00" min="0" max="59">
                <span>m</span>
            </div>
            <button class="delete-btn" title="Remove row">×</button>
        `;

        // Operation Toggle Logic
        const opBtn = row.querySelector('.row-op-toggle');
        opBtn.addEventListener('click', () => {
            if (opBtn.textContent === '+') {
                opBtn.textContent = '-';
                opBtn.classList.add('minus');
            } else {
                opBtn.textContent = '+';
                opBtn.classList.remove('minus');
            }
        });

        // Delete Logic
        const delBtn = row.querySelector('.delete-btn');
        delBtn.addEventListener('click', () => {
            if (container.children.length > 1) {
                row.remove();
            } else {
                // If checking last row, maybe just clear inputs? 
                // For now, let's enforce at least one row, or just remove and user can add.
                // Let's enforce keeping 1 row minimum for usability.
                alert("You need at least one time entry.");
            }
        });

        // Input Validation
        const inputs = row.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.classList.contains('time-m')) {
                    if (input.value > 59) input.value = 59;
                }
                if (input.value < 0) input.value = 0;
            });
        });

        container.appendChild(row);
    }

    function calculateTotal() {
        const rows = document.querySelectorAll('.time-row');
        let totalMinutes = 0;

        rows.forEach(row => {
            const op = row.querySelector('.row-op-toggle').textContent === '+' ? 1 : -1;
            const h = parseInt(row.querySelector('.time-h').value) || 0;
            const m = parseInt(row.querySelector('.time-m').value) || 0;

            const rowMinutes = (h * 60) + m;
            totalMinutes += (op * rowMinutes);
        });

        lastCalculatedMinutes = totalMinutes;
        displayResult(totalMinutes);
        continueBtn.style.display = 'inline-block';
    }

    function continueWithResult() {
        saveHistory();

        container.innerHTML = '';
        const isNegative = lastCalculatedMinutes < 0;
        const absMin = Math.abs(lastCalculatedMinutes);
        const h = Math.floor(absMin / 60);
        const m = absMin % 60;

        addRow();

        const row = container.children[0];
        const opBtn = row.querySelector('.row-op-toggle');
        const hInput = row.querySelector('.time-h');
        const mInput = row.querySelector('.time-m');

        if (isNegative) {
            opBtn.textContent = '-';
            opBtn.classList.add('minus');
        } else {
            opBtn.textContent = '+';
            opBtn.classList.remove('minus');
        }

        hInput.value = h;
        mInput.value = m;

        // Reset result display and button
        resH.textContent = "00";
        resM.textContent = "00";
        continueBtn.style.display = 'none';
        resultDisplay.style.opacity = '0.5';
    }

    function displayResult(totalMin) {
        const isNegative = totalMin < 0;
        let absMin = Math.abs(totalMin);

        const h = Math.floor(absMin / 60);
        const m = absMin % 60;

        // Animate numbers
        resH.textContent = isNegative ? `-${pad(h)}` : pad(h);
        resM.textContent = pad(m);

        // Visual feedback
        resultDisplay.style.opacity = '0.5';
        setTimeout(() => {
            resultDisplay.style.opacity = '1';
        }, 100);
    }

    function pad(num) {
        return num.toString().padStart(2, '0');
    }

    function saveHistory() {
        const rows = document.querySelectorAll('.time-row');
        let expressionParts = [];

        rows.forEach((row, index) => {
            const op = row.querySelector('.row-op-toggle').textContent;
            const h = row.querySelector('.time-h').value || '0';
            const m = row.querySelector('.time-m').value || '0';

            // For the first item, if it's positive, we might not want to show the + sign, 
            // but for consistency let's show it if it's explicit or just keep the logic simple.
            // If it's the very first number and positive, usually no sign. 
            // BUT, our UI has a toggle. Let's respect the toggle.

            let part = `${op} ${h}h ${m}m`;
            if (index === 0 && op === '+') {
                part = `${h}h ${m}m`;
            }
            expressionParts.push(part);
        });

        const expression = expressionParts.join(' ');

        // Format result 
        const isNegative = lastCalculatedMinutes < 0;
        const absMin = Math.abs(lastCalculatedMinutes);
        const h = Math.floor(absMin / 60);
        const m = absMin % 60;
        const resultString = `${isNegative ? '-' : ''}${pad(h)}h ${pad(m)}m`;

        // Create DOM element
        const item = document.createElement('div');
        item.className = 'history-item';

        item.innerHTML = `
            <div class="history-expression">${expression} =</div>
            <div class="history-result">${resultString}</div>
        `;

        historyList.prepend(item);
        historySection.style.display = 'block';
    }
});
