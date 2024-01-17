// inserir mensagem de erro caso clique no gerar link

let area = document.querySelector('.msg').innerHTML = ""

let form = document.querySelector('.form')
let get_link = document.querySelector('.sub_btn')
let coppy_link = document.querySelector('.coppy_btn')

let tel = document.querySelector('.tel')


form.addEventListener('submit', doEvent);
function doEvent(e){
    console.log(`ipo do evento: ${e.type}`)
    e.preventDefault()
}
