function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number (fano.value) > ano ){
        alert('[ERRO] Verifique os dados novamente!')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ' '
       var img = document.createElement('img')
       img.setAttribute ('id', 'foto')
       if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // crianca
                img.setAttribute('src', 'bebe-m.jpg')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src', 'jovem.jpg')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src', 'homem.jpg')
            }else {
                // idoso
                img.setAttribute('src', 'idoso.jpg')
            }
       }else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // crianca
                img.setAttribute('src', 'bebe-f.jpg')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src', 'jovem-f.jpg')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src', 'mulher-f.jpg')
            }else {
                // idoso
                img.setAttribute('src', 'idosa.jpg')
            }
       }
       res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}