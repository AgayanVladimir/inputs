const name = document.querySelector('.name');
const lastName = document.querySelector('.lastName');
const button = document.querySelector('button');
const list = document.querySelector('.list');
let counter = 0;
function uniqueId() {
	counter++
	return counter
}

button.addEventListener('click', addUsersName);
function addUsersName() {

	const li = document.createElement('li');
	li.setAttribute('id', uniqueId())
	li.textContent = `${name.value} ${lastName.value}`;
	const remove = document.createElement('button');
	remove.classList.add('remove')
	remove.textContent = 'X';
	const removeBox = document.createElement('div');
	removeBox.classList.add('removeBox')
	removeBox.append(li);
	removeBox.insertAdjacentElement('beforeend', remove);
	list.append(removeBox);
	remove.addEventListener('click', ((event) => {
		const targetId = event.target.previousElementSibling.id;
		document.getElementById(targetId).remove()
		remove.remove()

	}))


	const search = document.querySelector('.searchInput');

	search.addEventListener('input', () => {
		let value = search.value.trim();
		let itemsList = document.querySelectorAll('.list li');
		if (value != '') {
			itemsList.forEach((el) => {
				if (el.textContent.search(value) == -1) {

					removeBox.classList.add('hide');
					el.textContent = el.textContent;
				}
				else {
					removeBox.classList.remove('hide');
					let str = el.textContent;
					el.innerHTML = insertMark(str, el.textContent.search(value), value.length)
					if (!(li)) {
						remove.style.display = 'none'
					}

				}
			})
		} else {
			itemsList.forEach((elem) => {
				elem.classList.remove('hide');
				elem.textContent = elem.textContent;

			})
		}


	})





}

function insertMark(str, pos, len) {
	return str.slice(0, pos) + '<mark>' + str.slice(pos, pos + len) + '</mark>' + str.slice(pos + len)
}
















