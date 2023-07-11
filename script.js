function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada ${idade}`
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        }else {
            (fsex[1].checked)
                genero = 'Mulher'
        }
            res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos`
        }      
    }
