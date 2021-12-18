let calc = document.querySelector('.calc')
let currentNum = document.forms.formCurent.textview
let previousNum = document.forms.formPrevious.textview
currentNum.value = '0';
previousNum.value = '0';
// ============Operations===============
let div = '÷'
let multi = '×'
let sub = '-'
let add = '+'

// ======================================

// STATES ==========================
let equalsIsPressed = false
let operatorIsChoosed = false
let currentResult = false
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
			equalsIsPressed = false;
		}
		else if (targetContainsNum && operatorIsChoosed == false && currentNum.value == '0') {
			currentNum.value = event.target.getAttribute('data-value')
		}
		else if (targetContainsNum && operatorIsChoosed == true) {
			clearCurrentArea()
			currentNum.value += event.target.getAttribute('data-value')
			operatorIsChoosed = false
		} else if (targetContainsNum) {
			currentNum.value += event.target.getAttribute('data-value')
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
	}
	else if (equalsIsPressed == true && currentResult == true) {
		clearPreviousArea()
		previousNum.value = currentNum.value + ' ' + operator
		currentResult = false
		equalsIsPressed = false
	}
	else if (equalsIsPressed == true) {
		previousNum.value = previousNum.value + ' ' + currentNum.value + ' ' + '='
		currentResult = true
	}

	// else if (equalsIsPressed == true && operatorIsChoosed == false) {
	// 	previousNum.value = '';
	// 	previousNum.value = currentNum.value + ' ' + operator
	// }

}

function clearSymb() {
	if (equalsIsPressed == true) {
		clearPreviousArea()
	} else {
		currentNum.value = currentNum.value.slice(0, -1)
	}
}

// function defaultValue() {

// }




// ===================FUNCTIONS=========================================