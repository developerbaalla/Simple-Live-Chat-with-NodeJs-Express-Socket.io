var socket = io();

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');
var user_ = document.getElementById('user_');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value && user_.value) {
        socket.emit('chat message', {'msg': input.value, 'user': user_.value});
        input.value = '';
    }
});

socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});