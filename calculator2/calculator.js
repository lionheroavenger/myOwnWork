let inputElement = result

const numBtn = document.getElementsByClassName('raqam')

function clear() {
	if (clearScreenFlag) {
		inputElement.value = ''
		clearScreenFlag = false
		console.log('cleared')
	}
}


for (let i = 0; i < numBtn.length; i++) {
	const number = numBtn[i]

	number.addEventListener('click', (e) => {
		clear()
		const num = e.target.textContent
		console.log(num)
		inputElement.value += num
	})
}

let birinchiSon = 0
let ikkichiSon = 0
let amal = ''
let clearScreenFlag = false

document.getElementById('reset').addEventListener('click', (e) => {
	birinchiSon = 0
	ikkichiSon = 0
	clearScreenFlag = true
	amal = ''
	clear()
})

document.getElementById('resultBtn').addEventListener('click', (e) =>{
	ikkichiSon = parseFloat(inputElement.value)
	console.log('parsed value: ', ikkichiSon)
	let result = ''

	switch(amal) {
		case 'add':
			result = birinchiSon + ikkichiSon
			break;
		case 'substract':
			result = birinchiSon - ikkichiSon
			break;
		case 'bol':
			result = birinchiSon / ikkichiSon
			break;
		case 'mult':
			result = birinchiSon * ikkichiSon
			break;
	}

	inputElement.value = result
})

function operBtn(btn) {
	birinchiSon = parseFloat(inputElement.value)
	amal = btn.name
	// tozalash bayrog'i
	clearScreenFlag = true
}

const amallar = document.getElementsByClassName('amal')

for (let i = 0; i < amallar.length; i++) {
	const amalBtn = amallar[i]
	console.log(amalBtn)
	amalBtn.addEventListener('click', (e) => {
		operBtn(e.target)
	})
}