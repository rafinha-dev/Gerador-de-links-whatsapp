// inserir mensagem de erro caso clique no gerar link
let form = document.querySelector('.form')
let get_link = document.querySelector('.sub_btn')
let coppy_link = document.querySelector('.coppy_btn')

let tel = document.querySelector('.tel')
let div_warning = document.querySelector('.warning')



let area = document.querySelector('.msg').innerHTML = ""

form.addEventListener('submit', doEvent)
function doEvent(e){
    console.log(`ipo do evento: ${e.type}`)
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
        console.log(cont)
            if( cont === 0 & tel.value.length < 10){
                div_warning.appendChild(sub_warning)
        }
        if(cont > 0 && tel.value.length >= 10){
            div_warning.innerHTML = ""
        }
})

// colocar mascara para telefone no input tel https://www.ramoncp.com.br/snippets/mascara-de-telefone-para-input-em-js