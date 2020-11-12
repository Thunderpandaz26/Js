
let secretcode = "lordgwen"
const Keyspressed = []
window.addEventListener("keyup", (event) => {
    Keyspressed.push(event.key)
    console.log(Keyspressed)
    if (event.key === secretcode.slice(0, 1)) {
        secretcode = secretcode.slice(1)
    }
    console.log(secretcode)
    if (secretcode.length === 0) {
        //cornify_add();
    }
    document.querySelectorAll("div").forEach(div => {
        div.addEventListener("mouseover", (event) => {
            event.target.classList.add("spinny")
            console.log("spinny")
        })
    })

})

