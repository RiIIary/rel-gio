function carregar () {
    var msg= window.document.getElementById('msg')
    var img=window.document.getElementById('imagem')
    var data=new Date()
    var hora= data.getHours()
   
    msg.innerHTML=`agora são ${hora} horas.`
    if (hora>=0 && hora <12) {
        //bom dia!
        img.src= 'fotomanha.png'
        document.body.style.background= '#f2ee6b'
    } else if  (hora>=12 && hora <18) {
        //boa tarde!
        img.src= 'fototarde.png'
        document.body.style.background= '#b86e24' //não copiar e colar o código
       
    } else {
        //boa noite!
        img.src='fotonoite.png'
        document.body.style.background= '#1a333f'
        
    }
}
