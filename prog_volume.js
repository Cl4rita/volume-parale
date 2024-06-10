let resposta = document.getElementById('resposta')

function calcula_volume(){
    let altura = Number(document.getElementById('altura').value)
    let comp = Number(document.getElementById('comp').value)
    let larg = Number(document.getElementById('larg').value)

    console.log("alt = " + altura + "larg = " + larg + "comp = " + comp)

    let vol = altura * larg * comp
    console.log("O volume do paralelepípedo é = " + vol + "m³")

    res.innerHTML = "O volume é = " + vol + " m³"

    res.style.fontSize = "1.25rem"
    res.style.fontWeight = "bold"
}
 