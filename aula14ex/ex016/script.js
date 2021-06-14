function contar() {
    var txtInicio = document.getElementById('start_id').value
    var txtFim = document.getElementById('end_id').value
    var txtPasso = document.getElementById('step_id').value
    var res = document.getElementById('res')

    if (txtInicio.length == 0 || txtFim.length == 0 || txtPasso.length == 0) {

        res.innerHTML = 'Impossivel contar!'

    } else {
        var inicio = Number(txtInicio)
        var fim = Number(txtFim)
        var passo = Number(txtPasso)

        res.innerHTML = `Contando: <br> `
        if (passo <= 0) {
            alert('Passo inválid! Considerando PASSO 1')
            passo = 1

        }
        if (inicio < fim) {
            for (let c = inicio; c <= fim; c += passo) {
                res.innerText += ` ${c}  \u{1F449}`
            }
        } else {
            for (let c = inicio; c >= fim; c -= passo) {
                res.innerText += ` ${c}  \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`

    }
}