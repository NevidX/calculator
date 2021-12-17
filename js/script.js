let calc = document.querySelector('.calc')
let currentNum = document.forms.formCurent.textview
let previousNum = document.forms.formPrevious.textview
// ============Operations===============
let div = '÷'
let multi = '×'
let sub = '-'
let add = '+'

// ======================================

// STATES ==========================
let equalsIsPressed = false
let operatorIsChoosed = false
// ================================

// ===============================================================
// <<<>>>
CalcLoop()
// <<<>>>
getNum()
// clearValueArea()
// clearSymb()

// ===============================================================


// ===========CalcLoop============================================

function CalcLoop() {
	calc.addEventListener('click', (event) => {
		let currentAction = event.target.getAttribute('data-value');
		switch (currentAction) {
			case 'clearAll':
				clearValueArea()
				break;
			case 'clearSymb':
				clearSymb()
				break;
			case 'div':
				previousArea(div)
				break;
			case 'multi':
				previousArea(multi)
				break;
			case 'sub':
				previousArea(sub)
				break;
			case 'add':
				previousArea(add)
				break;
			case 'equals':
				getResult()
				break;
		}
	})
}

// ===========CalcLoop============================================



// ===============FUNCTIONS==========================================
function getNum() {
	calc.addEventListener('click', (event) => {
		let targetContainsNum = event.target.classList.contains('num')
		if (targetContainsNum && equalsIsPressed == true) {
			clearValueArea()
			currentNum.value += event.target.getAttribute('data-value')
		}
		else if (targetContainsNum && operatorIsChoosed == false) {
			currentNum.value += event.target.getAttribute('data-value')
		}
		else if (targetContainsNum && operatorIsChoosed == true) {
			currentNum.value = '';
			currentNum.value += event.target.getAttribute('data-value')
			operatorIsChoosed = false
		}
	})
}

function getResult() {
	equalsIsPressed = true
	let previousNumFloat = parseFloat(previousNum.value.match(/\d/g).join(''))
	let currentNumFloat = parseFloat(currentNum.value)
	let currentOperation = previousNum.value.replace(/[0-9]/g, '').replace(/\s+/g, '')
	switch (currentOperation) {
		case div:
			previousArea(div)
			currentNum.value = String(previousNumFloat / currentNumFloat);
			break;
		case multi:
			previousArea(multi)
			currentNum.value = String(previousNumFloat * currentNumFloat);
			break;
		case sub:
			previousArea(sub)
			currentNum.value = String(previousNumFloat - currentNumFloat);
			break;
		case add:
			previousArea(add)
			currentNum.value = String(previousNumFloat + currentNumFloat);
			break;
	}
}

function clearValueArea() {
	clearCurrentArea()
	clearPreviousArea()
	equalsIsPressed = false
	operatorIsChoosed = false
}

function clearPreviousArea() {
	previousNum.value = '';
}

function clearCurrentArea() {
	currentNum.value = '';
}
function previousArea(operator) {
	if (equalsIsPressed == false) {
		operatorIsChoosed = true
		previousNum.value = currentNum.value + ' ' + operator
	} else {
		previousNum.value = previousNum.value + ' ' + currentNum.value + ' ' + '='
	}
}

function clearSymb() {
	if (operatorIsChoosed == true && equalsIsPressed == false) {
		currentNum.value = currentNum.value.slice(0, -1)
	} else {
		clearPreviousArea()
	}

}




// ===================FUNCTIONS=========================================