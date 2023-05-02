jQuery(function(){

    $("body").on("click", "#gerar", function(){
        gerar()
    })
    
    function gerar(){
        var xingamentos = [ "isaac vai tomar no cu", "vai se fuder isaac","Isaac é tão lixo que se o SLU passar leva ele", "cala a boca isaac", "Pau no cu do isac", "vai gravar caralho","Bom almoço a todos os trabalhadores do grupo, menos pro Isaac pq ele é vagabundo, Vai tomar no cu desgraça", " Isaac pega no meu pau"]
        var fotos = ["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpeg", "image-5.jpeg", "image-6.jpeg", "image-7.jpeg", "image-8.jpeg", "image-9.jpeg"]
    
        var xingamentoAleatorio = Math.floor(Math.random() * xingamentos.length)
        var fotoAleatoria = Math.floor(Math.random() * fotos.length)
        setTimeout(function(){
            $(".image img").attr("src", "./src/"+fotos[fotoAleatoria])
            $(".texto").html(`<p>${xingamentos[xingamentoAleatorio]}</p>`)
            $(".image").show()
        }, 50)
    }
})