let calc = document.querySelector('.calc')
let curentNum = document.forms.

	pressNum()




function pressNum() {
	calc.addEventListener('click', (event) => {
		if (event.target.classList.contains('num')) {
			console.log(event.target.getAttribute('data-value'));
		}
	})
}