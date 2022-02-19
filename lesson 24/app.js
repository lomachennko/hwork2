let block = document.querySelector ('.new--div')
let divTop = 0
let divLeft = 0

function movingBlockBottom () {
    divTop+=10
    block.style.top = divTop+"px"
    if (divTop>200) {
        alert ('не выходи за поле')
        divTop-=10
        block.style.top = divTop+"px"
    }
}

function movingBlockTop () {
    divTop-=10
    block.style.top = divTop+"px"
    if (divTop>200) {
        alert ('не выходи за поле')
        divTop+=10
        block.style.top = divTop+"px"
    }
}

function movingBlockLeft () {
    divLeft-=10
    block.style.left = divLeft+"px"
    if (divLeft>500) {
        alert ('не выходи за поле')
        divTop+=10
        block.style.top = divTop+"px"
    }
}
function movingBlockRight () {
    divLeft+=10
    block.style.left = divLeft+"px"
    if (divLeft>500) {
        alert ('не выходи за поле')
        divTop-=10
        block.style.top = divTop+"px"
    }
}