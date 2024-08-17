function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') 
    if (fano.value.length == 0 || (fano.value) > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente')
    }  else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute ('src', 'criançaH.jpg.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemH.jpg.jpg')
            } else if (idade < 50 ){
                //adulto
                img.setAttribute('src', 'adultoH.jpg.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'senhorfoto.jpg.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute ('src', 'criançaM.jpg.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemMfoto.jpg.jpg')
            } else if (idade < 50 ){
                //adulto
                img.setAttribute('src', 'adultaM.jpg.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'senhorafoto.jpg.jpg')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.borderRadius = '50%'
        img.style.marginTop = '30px'
    }

}
