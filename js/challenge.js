
let interval = setInterval(addOne, 1000)
let likesNumber = {}

function addOne(){
    let a = document.querySelector('#counter').innerHTML
    document.querySelector('#counter').innerHTML = parseInt(a)+1
}

function minusOne(){
    let a = document.querySelector('#counter').innerHTML
    document.querySelector('#counter').innerHTML = parseInt(a)-1
}

function likeStatus(){
    let a = document.querySelector('#counter').innerHTML
    if (a in likesNumber) {
        likesNumber[a]++
    } else {
        likesNumber[a]=1
    }
    let c = document.createElement('li')
    c.textContent = a + " has been liked " + likesNumber[a].toString() + " times"
    document.querySelector('.likes').append(c)
}

function pauseResumeTimer() {
    if (pause.innerHTML == ' pause ') {
        clearInterval(interval)
        pause.textContent = ' resume '
        minus.disabled = true
        plus.disabled = true
    } else {
        interval = setInterval(addOne, 1000)
        pause.innerHTML = ' pause '
        minus.disabled = false
        plus.disabled = false
    }
}

function addComment(event) {
    event.preventDefault()
    let comment = document.querySelector('#comment-input').value
    let new_comment = document.createElement('p')
    new_comment.textContent = comment
    commentDisplay.append(new_comment)
}

let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let like = document.querySelector('#heart')
let pause = document.querySelector('#pause')
let commentForm = document.querySelector('#comment-form')
let commentDisplay = document.querySelector('.comments')

minus.addEventListener('click', minusOne)
plus.addEventListener('click', addOne)
like.addEventListener('click', likeStatus)
pause.addEventListener('click', pauseResumeTimer)
commentForm.addEventListener('submit', addComment)