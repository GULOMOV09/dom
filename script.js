let cards = document.querySelectorAll('.card')
let arr = [ 'blue', 'aqua', 'green', 'gray',  'indigo', 'purple', 'yellow', ]
function rand() {
    let i = Math.floor(Math.random() * arr.length)
    return arr[i]
}
cards.forEach(card=>{
        card.style.background = rand();
}) 