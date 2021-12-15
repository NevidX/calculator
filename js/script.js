let calc = document.querySelector('.calc')
let currentNum = document.forms.formCurent.textview
let previousNum = document.forms.formPrevious.textview
let clearButton = document.querySelector('.clearCurrentArea')

// ===============================================================
getNum()
clearCurrentArea()
clearSymb()

// ===============================================================


// ===============================================================
function insert(num) {
	currentNum.value =
		currentNum.value + num;
}

function getNum() {
	calc.addEventListener('click', (event) => {
		if (event.target.classList.contains('num')) {
			let curentNumValue = event.target.getAttribute('data-value');
			insert(curentNumValue);
		}
	})
}

function clearCurrentArea() {
	clearButton.addEventListener('click', () => {
		currentNum.value = '';
		previousNum.value = '';
	})
}

function clearSymb() {

}

// =======================================================================