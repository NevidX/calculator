let calc = document.querySelector('.calc')
let currentNum = document.forms.formCurent.textview
let previousNum = document.forms.formPrevious.textview
// ===============================================================
// <<<>>>
CalcLoop()
// <<<>>>

getNum()
// clearCurrentArea()
// clearSymb()

// ===============================================================


// ===========CalcLoop============================================

function CalcLoop() {
	calc.addEventListener('click', (event) => {
		let currentAction = event.target.getAttribute('data-value');
		switch (currentAction) {
			case 'clearAll':
				clearCurrentArea()
				break;
			case 'clearSymb':
				clearSymb()
				break;
			case 'div':
				previousArea('/')
				break;
		}
	})
}

// ===========CalcLoop============================================



// ===============FUNCTIONS==========================================
function getNum() {
	calc.addEventListener('click', (event) => {
		if (event.target.classList.contains('num')) {
			let curentNumValue = event.target.getAttribute('data-value');
			currentNum.value =
				currentNum.value + curentNumValue;
		}
	})
}

function clearCurrentArea() {
	currentNum.value = '';
	previousNum.value = '';
}

function previousArea(operator) {
	previousNum.value = currentNum.value + ' ' + operator
}

function clearSymb() {
	currentNum.value = currentNum.value.slice(0, -1)
}




// ===================FUNCTIONS=========================================