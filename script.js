const SpanMensSucesso = '<p class="mensagem mensagemSucesso">Senha Gerada e Copiada</p>'
const SpanMensErro = '<p class="mensagem mensagemErro">Nenhuma senha gerada, preencha os campos corretamente.</p>'

function senhaAleatoria() {
    const reservado = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#%*+_?!$&@"

    let numChave = parseInt(document.getElementById("numChave").value)
    let novoTexto = ""

    if (numChave < 8) {
        alert("Mínimo de 8 caracteres")
    } else {
        for (let i = 0; i < numChave; i++) {
            let aleatorio = Math.floor(Math.random() * reservado.length)
            novoTexto += reservado.charAt(aleatorio)
        }
    }
    
    document.getElementById("senha").value = novoTexto
    copiar()
}

function copiar(){
    const output = document.getElementById("senha").value
    const texto = document.getElementById("mensagem")

    if (output.length >= 8){
        navigator.clipboard.writeText(output)
        texto.innerHTML = SpanMensSucesso
    }else{
        texto.innerHTML = SpanMensErro
    }
}



