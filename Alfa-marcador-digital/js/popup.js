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
    close();
});

chrome.runtime.sendMessage({
    command: 'post', data: {
      chrome.identity.getAuthToken({'interactive' : true},function(token)){
        
      }
    }
  }, (response) => {
    console.log(response);
  }
);