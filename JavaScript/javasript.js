var titulo=document.querySelector("h2")
var temporizador
const caminho="Imagens/"
const prefix="banho"
const extensao=".jpeg"
var indice=0

var butGo=document.getElementById("butGo")
butGo.onclick=butGo

var butCame=document.getElementById("butCame")
butCame.onclick=butCame

var Tela=document.getElementById("Tela")
console.log(Tela.src)

var lista=[
{banho:1, titulo:"Estampas de Flores"},
{banho:2, titulo:"Estampas de Times"},
{banho:3, titulo:"Estampas para Empresas"},
]
console.log=(lista[0])

function Go(){
    if(indice<lista.length-1){
        indice++
    }
    else{
        indice=0
    }
    Tela.src=caminho+prefix+lista[indice].banho+extensao
    titulo.innerHTML=lista[indice].titulo
}

function Came(){
    if(indice==0){
        indice=lista.length-1
    }
    else{
        indice--
    }
    Tela.src=caminho+prefix+lista[indice].banho+extensao
    titulo.innerHTML=lista[indice].titulo
}

