var send_mess = document.getElementById("send_mess")
if (localStorage.phone !== undefined) {
	send_mess.value = localStorage.phone;
}
function order(THIS) {
	console.log(`${THIS.parentNode.querySelector('.car_name').innerText} - ${THIS.parentNode.querySelector('.car_detal').innerText} - ${THIS.parentNode.querySelector('.car_price').innerText} - ${THIS.parentNode.querySelector('#phone').value}`)
}
function to_card_big(THIS) {
	document.getElementById("card_big").innerHTML = `<div class="col-12 col-lg-10 col-xl-6 img_big m-0"></div><div class="big_descr col-12 col-lg-10 col-xl-6 p-0"><div class="car_name">${THIS.querySelector('.car_name').innerText}</div><div class="car_detal">${THIS.querySelector('.car_detal').innerText}</div><div class="car_price">${THIS.querySelector('.car_price').innerText}</div><input id="phone" class="d-block" oninput="phone(this)" placeholder="Ваш номер"><input class="btn" type="button" value="В корзину"><input class="btn mr-0" type="button" value="Заказать" onclick="order(this)"></div>`
	if (localStorage.phone !== undefined) {
		document.getElementById("phone").value = localStorage.phone;
	}
}
function phone(THIS) {
	localStorage.phone = THIS.value
	send_mess.value = localStorage.phone;
	document.getElementById("phone").value = localStorage.phone;
}

function filter() {

	let variant = false
	document.querySelectorAll('.car_item').forEach((car_item) => {
		car_item.classList.remove('car_item_active')
		if (car_item.getElementsByTagName('input')[0].checked) {
			variant = true
			car_item.classList.add('car_item_active')
		}
	});

	const search_text = new RegExp(document.getElementById("search").value.trim(), 'ig')
	if (variant) {
		document.querySelectorAll('.card').forEach((card) => {
			card.style.display = 'none'
			document.querySelectorAll('.car_item').forEach((car_item) => {
				if ((car_item.getElementsByTagName('input')[0].checked) && (car_item.textContent == card.querySelectorAll('.car_name')[0].textContent)) {
					if (search_text.test(card.querySelectorAll('.car_detal')[0].textContent)) {
						card.style.display = 'block'
					}
				}
			});
		})
	} else {
		const search_text = new RegExp(document.getElementById("search").value.trim(), 'ig')
		document.querySelectorAll('.card').forEach((card) => {
			card.style.display = 'none'
			if (search_text.test(card.querySelectorAll('.car_detal')[0].textContent) ) {
				card.style.display = 'block'
			}
		})
	}
}
document.querySelectorAll('.car_item').forEach((car_item) => {
	car_item.addEventListener('click', () => {
		filter()
	})
})
const chat = document.getElementById('chat')
chat.onclick = function() { chat_togle() }
function chat_togle() {
	if (document.getElementById('chat_wrap').style.display == 'none') {
		document.getElementById('chat_wrap').style.display = 'flex'
	} else {
		document.getElementById('chat_wrap').style.display = 'none'
	}
}