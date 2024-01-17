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

get_link.addEventListener('click', warning)

function warning(){
        const sub_warning = document.createElement("p")
        const warning = document.createTextNode("Digite o número do whatssapp!")
        sub_warning.appendChild(warning)
        let cont = document.querySelectorAll('.warning p').length
        console.log(cont)
            if( cont === 0){
                div_warning.appendChild(sub_warning)
        }
}
