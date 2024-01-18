// inserir mensagem de erro caso clique no gerar link
let form = document.querySelector('.form')
let get_link = document.querySelector('.sub_btn')
let coppy_link = document.querySelector('.coppy_btn')

let tel = document.querySelector('.tel')
let div_warning = document.querySelector('.warning')



let area = document.querySelector('.msg')
area.innerHTML = ""

form.addEventListener('submit', doEvent)
function doEvent(e){
    e.preventDefault()
}



get_link.addEventListener('click', function(){

        const sub_warning = document.createElement("p")
        const warning = document.createTextNode("Digite o número do whatssapp!")
        sub_warning.appendChild(warning)

        let cont = document.querySelectorAll('.warning p').length
        tel.addEventListener('input', function(){
            console.log(tel.value)
        })
        if( cont === 0 & tel.value.length < 10){
                div_warning.appendChild(sub_warning)
        }
        if(cont > 0 && tel.value.length >= 10){
            div_warning.innerHTML = ""
        }
})

tel.addEventListener('keyup', (e)=> {
    let input = e.target
    input.value = phoneMask(input.value)
    let num = input.value
    num = maskRemove(num)
    numLink(num)
})
 
const phoneMask = (value)=>{
    if(!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
    // https://www.ramoncp.com.br/snippets/mascara-de-telefone-para-input-em-js
}
const maskRemove = (value)=> {
    if (!value) return ""
    value = value.replace(/[^\d]/g, '')
    return value
}
const numLink = (num)=> {
    let link_num_index = "https://wa.me/"
    let finished_num = link_num_index + num
    finished_link(finished_num)
}

area.addEventListener('input', ()=>{
    let link_msg_index = "?text="
    let wpp_msg = area.value

    let msg_split = wpp_msg.split(" ")
    let msg_index = msg_split.join('%20')
    
    let finished_msg = (link_msg_index + msg_index)
    finished_link(finished_msg)
    // preciso colocar um event listner aqui já que será feito a formula só no botão de gerar link?
})

// passo um criar uma variável que contenha a formula do link com o número 
//passo dois criar uma variavel que armazena a formula do texto do link.
// passo 3 ter duas variáveis com o número e o texto. 
// passo 4 de alguma forma colocar as informações guardadas na formulas

// passo 5 concatenar as duas formulas caso tenha texto
// passo 6 ao clicar no botão copiar a formula.
 

