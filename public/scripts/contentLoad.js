const button = document.querySelector(".hot-offers__list-product-button");
let socket = io.connect('https://andver00.onrender.com/')

button.addEventListener("click", () => {
  send();
})

function send() {
  socket.emit('buttonClick', 'Some1 clicked on button');
}

socket.on('connect', () => { console.log('Connected') });
socket.on('disconnect', () => { console.log('Connected') });
socket.on('buttonClick', () => { alert('Some1 clicked on button') });