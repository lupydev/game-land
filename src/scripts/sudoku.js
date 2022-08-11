const celd = document.getElementsByClassName("celd")

celd.forEach(element => {
    element.addEventListener("mouseover", light(element.id))
});

const light = (id) =>{
    document.getElementById(id).style.border = "1px solid gold"
}