console.log("popup!")

function get_url(){
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        //console.log(tab.url);
        alert(tab.url);
        buscar(tab.url);
    });
}

function opciones(){
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage();
        }
        else {
            window.open(chrome.runtime.getURL('options.html'));
        }
}

function notificaciones(){
    chrome.notifications.create({
        type: 'basic',
        iconUrl: '../icons/icon_128.png', //icono
        title: 'Hola', //titulo
        message: 'Mundo', //mensaje
        priority: 0
        })
    close();
}

function buscar(url){
    //console.log(url);
    var arr = fetch(url)
    .then(response =>response.text())
    .then(response =>console.log(response));
    console.log(arr);

}

document.getElementById('btn').onclick = get_url;
document.getElementById('btn_1').onclick = opciones;
document.getElementById('btn_3').onclick = notificaciones;
