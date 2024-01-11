function mostrar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sāo ${hora} horas.`
    if (hora >= 0 &&  hora < 12){
        // bom dia 
        img.src = 'manha.png'
        document.body.style.background = '#EDA67A'
    }else if (hora >= 12 && hora <= 18){
        // boa tarde 
        img.src = 'tarde.png'
        document.body.style.background = '#6A3F52'
    }else {
        // boa noite
        img.src = 'noite.png'
        document.body.style.background = '#523A58'
    }
}