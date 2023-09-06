const createbox = document.getElementById('create')
const contentbox = document.getElementById('content-box')
const input = document.getElementById('userinput')
const button = document.getElementById('btn')
const note = document.getElementsByClassName('notes')
const container = document.getElementById('container')
const notebox = document.getElementsByClassName('notes-box')
const colorchanger = document.getElementsByClassName('color-changer')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const blue = document.querySelector('.blue')
const orange = document.querySelector('.orange')
const pink = document.querySelector('.pink')




button.addEventListener('click', content)
createbox.addEventListener('click', create)
container.addEventListener('click', remove)

console.log(createbox)


function create(){
    input.value = ''
    createbox.style.visibility = "hidden"
    contentbox.style.visibility = "visible"
}

function content(){
        divstyle()
        createbox.style.visibility = "visible"
        contentbox.style.visibility = "hidden"

}

const color = [ '#00aeff', '#c300ff', '#d0ff00', '#00ff44', '#ff0000', '#0000ff']

function divstyle(){
    let div = document.createElement('div')
    div.className = 'notes'
    div.innerText = input.value

    let img = document.createElement('img')
    img.className = 'close'
    img.setAttribute('src', 'image/Close_round_fill@2x.png')
    // console.log(img);
    div.appendChild(img)
    container.appendChild(div)


    let divtwo = document.createElement('div')
    divtwo.className = 'color-changer'
    div.appendChild(divtwo)

    let button = document.createElement('button')
    button.className = 'color'
    divtwo.appendChild(button)

    let red = document.createElement('span')
    red.className = 'red'
    button.appendChild(red)

    let blue = document.createElement('span')
    blue.className = 'blue'
    button.appendChild(blue)

    let yellow = document.createElement('span')
    yellow.className = 'yellow'
    button.appendChild(yellow)

    let orange = document.createElement('span')
    orange.className = 'orange'
    button.appendChild(orange)

    let pink = document.createElement('span')
    pink.className = 'pink'
    button.appendChild(pink)




    var index = Math.floor(Math.random() * color.length)
    div.style.backgroundColor = color[index]

}


function remove(e){
    let element = [...e.target.classList]
        if(element.includes('close')){
            e.target.parentElement.remove();
        }
}


const getcolor = (get) =>{
    return window.getComputedStyle(get).backgroundColor;
}
console.log(getcolor(red));

const changecolor = (element, color) =>{
    return element.addEventListener('click', ()=>{
        note.style.background = 'color'
    })
}

changecolor(red, getcolor(red));
changecolor(yellow, getcolor(yellow));
changecolor(blue, getcolor(blue));
changecolor(orange, getcolor(orange));
changecolor(pink, getcolor(pink));





