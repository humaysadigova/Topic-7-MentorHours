const showminute= document.querySelector("#showminute")


let second =prompt("Enter second")

function getMinute(second) {
    let munites = Math.ceil(second /60);
    return munites
}

window.addEventListener('click', function(){
    getMinute(second)
    showminute.innerHTML = `${munites} minute`
})
