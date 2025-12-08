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
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const resetBtn = document.getElementById('reset-btn');

    let lastCalculatedMinutes = 0;

    // Load history from localStorage on startup
    loadHistory();

    // Add initial row
    addRow();
    addRow(); // Start with two rows as convenience

    addRowBtn.addEventListener('click', () => {
        addRow();
    });

    calculateBtn.addEventListener('click', calculateTotal);
    continueBtn.addEventListener('click', continueWithResult);
    clearHistoryBtn.addEventListener('click', clearHistory);
    resetBtn.addEventListener('click', resetCalculator);

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
                row.classList.add('removing');
                // Let animation play before removing
                setTimeout(() => {
                    row.remove();
                }, 300);
            } else {
                // If it's the last row, just clear the inputs
                row.querySelector('.time-h').value = '';
                row.querySelector('.time-m').value = '';
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
        resetBtn.style.display = 'inline-block';
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
        resetBtn.style.display = 'none';
        resultDisplay.style.opacity = '0.5';
    }

    function displayResult(totalMin) {
        const resultValue = resultDisplay.querySelector('.result-value');
        const isNegative = totalMin < 0;
        let absMin = Math.abs(totalMin);

        const h = Math.floor(absMin / 60);
        const m = absMin % 60;

        // Trigger animation
        resultDisplay.style.opacity = '0';
        resultValue.style.transform = 'translateY(10px)';

        setTimeout(() => {
            // Animate numbers
            resH.textContent = isNegative ? `-${pad(h)}` : pad(h);
            resM.textContent = pad(m);

            // Visual feedback
            resultDisplay.style.opacity = '1';
            resultValue.style.transform = 'translateY(0)';
        }, 150); // A short delay to allow the opacity transition to be noticeable
    }

    function pad(num) {
        return num.toString().padStart(2, '0');
    }

    function createHistoryItemElement(itemData) {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
            <div class="history-expression">${itemData.expression} =</div>
            <div class="history-result">${itemData.resultString}</div>
        `;
        return item;
    }

    function loadHistory() {
        const history = JSON.parse(localStorage.getItem('timeCalcHistory')) || [];
        historyList.innerHTML = ''; // Clear existing list
        if (history.length > 0) {
            history.forEach(itemData => {
                const itemElement = createHistoryItemElement(itemData);
                historyList.appendChild(itemElement); // Use appendChild to keep the order
            });
            historySection.style.display = 'block';
        } else {
            historySection.style.display = 'none';
        }
    }

    function saveHistory() {
        const rows = document.querySelectorAll('.time-row');
        let expressionParts = [];

        rows.forEach((row, index) => {
            const op = row.querySelector('.row-op-toggle').textContent;
            const h = row.querySelector('.time-h').value || '0';
            const m = row.querySelector('.time-m').value || '0';

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

        const historyItemData = { expression, resultString };

        // Create DOM element and add to UI
        const itemElement = createHistoryItemElement(historyItemData);
        historyList.prepend(itemElement);
        historySection.style.display = 'block';

        // Save to localStorage
        const history = JSON.parse(localStorage.getItem('timeCalcHistory')) || [];
        history.unshift(historyItemData); // Add to the beginning to show newest first
        localStorage.setItem('timeCalcHistory', JSON.stringify(history));
    }

    function clearHistory() {
        localStorage.removeItem('timeCalcHistory');
        historyList.innerHTML = '';
        historySection.style.display = 'none';
    }

    function resetCalculator() {
        container.innerHTML = '';
        addRow();
        addRow();

        resH.textContent = '00';
        resM.textContent = '00';
        resultDisplay.style.opacity = '1';

        continueBtn.style.display = 'none';
        resetBtn.style.display = 'none';
    }
});
