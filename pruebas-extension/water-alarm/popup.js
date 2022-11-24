'use strict'; //usa el modo estricto de java script, en algunos buscadores puede cambiar la forma de la que se usa el java

function setAlarm(event) {
  let minutes = parseFloat(event.target.value); //crea una variable minutes con el valor del boton seleccionado
  chrome.action.setBadgeText({text: 'ON'}); //Pone una banderita encima del icono en la toolbar
  chrome.alarms.create({delayInMinutes: minutes}); //Crea una alarma, delayinminutes hace que el evento on alarm se active terminada la alarma 
  chrome.storage.sync.set({minutes: minutes}); //Crea un storage text con el valor de minutes
  window.close();
}

function clearAlarm() {
  chrome.action.setBadgeText({text: ''}); // quita la banderita
  chrome.alarms.clearAll(); //limpia la alarma
  window.close(); 
}

document.getElementById('sampleMinute').addEventListener('click', setAlarm);
document.getElementById('min15').addEventListener('click', setAlarm);
document.getElementById('min30').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);