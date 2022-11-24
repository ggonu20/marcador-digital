function notificar(event){
    const t1 =event.URL;
    chrome.notifications.create({
        type: 'basic',
        iconUrl: '../icons/icon_128.png', //icono
        title: 'Hola', //titulo
        message: 'Mundo'
    });
    window.close();
}

document.getElementById('button_').addEventListener('click',notificar);


  