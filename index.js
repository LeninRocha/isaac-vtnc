jQuery(function(){

    var xingamentos = [ "isaac vai tomar no cu", "vai se fuder isaac", "cala a boca isaac"]
    var fotos = ["image-1.jpg", "image-2.jpg", "image-3.jpg"]

    var xingamentoAleatorio = Math.floor(Math.random() * xingamentos.length)
    var fotoAleatoria = Math.floor(Math.random() * fotos.length)
    setTimeout(function(){
        $(".image img").attr("src", "./src/"+fotos[fotoAleatoria])
        $(".texto").html(`<p>${xingamentos[xingamentoAleatorio]}</p>`)
    }, 50)
    
})