
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas `
    
    if (horas >= 0 && horas <12){
        //bom dia
        img.src = 'pexels-brotherkehn-4121708.jpg'
        document.body.style.background = '#c29d83'
    } else if (horas >=12 && horas < 18){
        // boa tarde
        img.src = 'pexels-david-bartus-43782-594226.jpg'
        document.body.style.background = '#fcab73'
    } else{
        //boa noite
        img.src='pexels-pixabay-414675.jpg'
        document.body.style.background = '#24292f'
    }
   

} 