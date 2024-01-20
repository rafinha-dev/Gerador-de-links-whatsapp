// inserir mensagem de erro caso clique no gerar link
const objects = {
    form : document.querySelector('.form'),
    tel : document.querySelector('.tel'),
    area : document.querySelector('.msg'),
    div_warning : document.querySelector('.warning'),
    get_link : document.querySelector('.sub_btn'),
    input_link: document.querySelector('.coppy_link'),
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
    coppyLink(link, num)
    avalebleLink(link,num)
}

function createWarning(){
    const submit_warning = document.createElement("p")
    const warning = document.createTextNode("Digite o número do whatssapp!")
    submit_warning.appendChild(warning)
    return submit_warning
}
function submitWarning(value){
        let cont = document.querySelectorAll('.warning p').length
        let num = objects.tel.value.length
        
        if( cont === 0 && num < 14){
                objects.div_warning.appendChild(value)
        }
        if(cont > 0 && num >= 14){
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
function coppyLink(link, num) {

    if(num.length >= 10){
        objects.coppy_link.addEventListener('click', ()=>{
            navigator.clipboard.writeText(link).then(()=> {
                console.log(link)
            })
        })
    }
}
function avalebleLink(link,num){
    let input = objects.input_link
    if(num.length >= 10){
        input.value = link + num
    }
}

