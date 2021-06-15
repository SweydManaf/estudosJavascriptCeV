var valores = []
var tabVal = document.getElementById('selTab')
var res = document.getElementById('res')



function adicionar() {

    var numTxt = document.getElementById('numero_id')

    var num = Number(numTxt.value)

    if (valores.indexOf(num) == -1 && num <= 100 && num >= 1) {
        tabVal.innerHTML = ''
        res.innerHTML = ''
        valores.push(num)
        for (indice in valores) {

            let item = document.createElement('option')
            item.text = `Valor ${valores[indice]} adicionado.`
            tabVal.appendChild(item)
        }
    } else {
        alert(`Valor invalido ou já encontrado na lista. ${num}`)
    }
    numTxt.focus()
}

function analisar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        var numDeCadastros = valores.length
        var maior = () => {
            m = valores[0]
            for (i in valores) {
                if (valores[i] > m) {
                    m = valores[i]
                }
            }
            return m
        }
        var menor = () => {
            m = valores[0]
            for (i in valores) {
                if (valores[i] < m) {
                    m = valores[i]
                }
            }
            return m
        }
        var soma = () => {
            s = 0
            for (i in valores) {
                s += valores[i]
            }
            return s
        }
        var media = () => {

            return (soma() / valores.length).toFixed(1).replace('.', ',')
        }
        res.innerHTML = `<p>Ao todo, temos ${numDeCadastros} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior()}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor()}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media()}.</p>`

    }



}