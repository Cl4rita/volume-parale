let resposta = document.getElementById('resposta')

function calcula_vol_cilindro(){
    let altura = Number(document.getElementById('altura').value)
    let raio = Number(document.getElementById('raio').value)

    console.log("alt = " + altura + "raio = " + raio)

    let vol = (Math.PI) * raio * raio + altura
    console.log("O volume paralelepípedo é = " + vol + "m³")

    res.innerHTML = "O volume do é = " + vol.toFixed(2) + " m³"

    res.style.fontSize = "1.25rem"
    res.style.fontWeight = "bold"
}
 