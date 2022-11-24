
chrome.action.onClicked.addListener(() =>{
    chrome.notifications.create({
    type: 'basic',
    iconUrl: '../icons/icon_128.png', //icono
    title: '', //titulo
    message: '', //mensaje
    priority: 0
    });
});