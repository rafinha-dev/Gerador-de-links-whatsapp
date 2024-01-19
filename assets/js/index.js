// inserir mensagem de erro caso clique no gerar link
const objects = {
    form : document.querySelector('.form'),
    tel : document.querySelector('.tel'),
    area : document.querySelector('.msg'),
    div_warning : document.querySelector('.warning'),
    get_link : document.querySelector('.sub_btn'),
    coppy_link : document.querySelector('.coppy_btn'),
}

objects.area.innerHTML = ""

objects.form.addEventListener('submit', doEvent)
function doEvent(e){

    e.preventDefault()

    let warning = createWarning()
    submitWarning(warning)

    let wpp_msg = objects.area.value
    wpp_msg = makeMsg(wpp_msg)

    let num = objects.tel.value
    num = maskRemove(num)
    let finished_num = makeNumLink(num)

    let link = finished_link(finished_num, wpp_msg)
    coppyLink(link)
}

function createWarning(){
    const submit_warning = document.createElement("p")
    const warning = document.createTextNode("Digite o número do whatssapp!")
    submit_warning.appendChild(warning)
    return submit_warning
}
function submitWarning(value){
        let cont = document.querySelectorAll('.warning p').length
        
        if( cont === 0 & objects.tel.value.length < 10){
                objects.div_warning.appendChild(value)
        }
        if(cont > 0 && objects.tel.value.length >= 10){
            objects.div_warning.innerHTML = ""
        }
}

objects.tel.addEventListener('keyup', (e)=> {
    let input = e.target
    input.value = phoneMask(input.value)
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
    value = value.replace(/[^\d]/g, '')
    return value
}
const makeNumLink = (num)=> {
    let link_num_index = "https://wa.me/"
    let finished_num = link_num_index + num
    return finished_num
}

// objects.area.addEventListener('input', ()=>{
// })

const makeMsg = (msg)=>{
    let link_msg_index = "?text="
    let msg_split = msg.split(" ")
    let msg_index = msg_split.join('%20')
    
    let finished_msg = (link_msg_index + msg_index)
    return finished_msg
}
const finished_link = (num, msg)=> {
    let link = ""
    let i = msg.length
    if( i <= 7){
        link = num
    }else{
        link = num + msg
    }
    return link
}
function coppyLink(value) {
    // proteger contra o bug de clicar mais de uma vez
    objects.coppy_link.addEventListener('click', ()=>{
        navigator.clipboard.writeText(value).then(()=> {
            console.log(value)
        })
    })
}


// passo um criaruma variável que contenha a formula do link com o número 
//passo dois criar uma variavel que armazena a formula do texto do link.
// passo 3 ter duas variáveis com o número e o texto. 
// passo 4 de alguma forma colocar as informações guardadas na formulas
// passo 5 concatenar as duas formulas caso tenha texto

// passo 6 ao clicar no botão copiar a formula.
 

