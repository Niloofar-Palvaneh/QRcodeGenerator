const btn = document.querySelector('#submit')
const container = document.querySelector('.qrcod')
const input = document.querySelector('input')
const img = document.querySelector('img')
let btnThem = document.querySelectorAll('.btnThem')


btnThem.forEach(function(color){
    color.addEventListener('click' , function(event){
        let colorBtn = event.target.dataset.color
        document.documentElement.style.setProperty('--themColor' , colorBtn)
        localStorage.setItem('color' , colorBtn)
    })
})

window.addEventListener('load' , function(){
    let localColor = localStorage.getItem('color')
    document.documentElement.style.setProperty('--themColor' , localColor)
})

container.classList.add('hidden')
btn.addEventListener('click' , function(event){
    event.preventDefault()
    let inputValue = input.value
    if(!inputValue){
        alert('no text here')
        return true
    }
    btn.innerHTML = 'درحال یافتن QR code'
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
    img.addEventListener('load' , function(){
        container.classList.remove('hidden')
        btn.innerHTML = ' تولید QR code'
    })
})

let test = document.querySelector('.test')
let addHtml = document.querySelector('.addHtml')

addHtml.addEventListener('click' , ()=> {
    let h4elem = document.querySelector('.h4elem')
    let elementAdd = `<p>${test.value}</p>`
    h4elem.insertAdjacentHTML('afterend' , elementAdd)
    test.value = ''
})
