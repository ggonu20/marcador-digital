
var btn = document.getElementById('btn');

btn.addEventListener("click",function(){
    chrome.notifications.create(
        {
            type: 'basic',
            iconUrl: '../icons/icon_128.png', //icono
            title: 'Hola', //titulo
            message: 'Mundo', //mensaje
            priority: 0
        }
    )
});
