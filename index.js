console.log("hello world")

let element = document.getElementById('counter')
let count = 0

function increase() {
    count++
    element.innerText = count
}
function decrease() {
    count--
    element.innerText = count
}
function reset() {
    count = 0
    element.innerHTML = "<mark>" + count + "</mark>"
}
function selectTheme(theme) {
   document.getElementsByTagName('body')[0].className = theme
   document.getElementsByTagName('main')[0].className = theme
   let buttonArr = document.getElementsByTagName('button')
   for (let i = 0; i < buttonArr.length; i++) {
       buttonArr[i].className = theme
       console.log(buttonArr[i].className, buttonArr[i].innerText)
   }
   buttonArr[0].innerText = 'facebook'
   buttonArr[1].innerHTML = 'DevMountain'
   buttonArr[2].innerText = 'Twitter'
}
function reload() {
    location.reload()
}
