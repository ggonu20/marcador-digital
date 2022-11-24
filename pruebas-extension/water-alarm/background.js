//background siempre esta en ejecucion o esperando estar en ejecucion
'use strict';

chrome.alarms.onAlarm.addListener(() => {  //se activa cuando la alarma se activa, pero como esta el delay se activa al terminar.
  chrome.action.setBadgeText({ text: '' });  //setea la banderita en nada
  chrome.notifications.create({ //genera una notificacion de google chrome
    type: 'basic', //template del notification 
    iconUrl: 'stay_hydrated.png', //icono
    title: 'Time to Hydrate', //titulo
    message: 'Everyday I\'m Guzzlin\'!', //mensaje
    buttons: [  //crea un boton
      { title: 'Hola' }
    ],
    priority: 0 //no se que hace, creo que es algo de js
  });
});

chrome.notifications.onButtonClicked.addListener(async () => { //activa el evento cuando clickeas el boton de la notificacion
  const item = await chrome.storage.sync.get(['minutes']);
  chrome.action.setBadgeText({ text: 'ON' });
  chrome.alarms.create({ delayInMinutes: item.minutes });
});

// "permissions": 
// "alarms"            chrome.alarms. ...        
//  "notifications"    chrome.notifications. ...        
//  "storage"          chrome.storage. ...            
