var a = document.querySelector(".main")
var i = document.querySelector("i")


a.addEventListener("dblclick", function () {
    i.style.transform = "translate(-50%,-50%) scale(2)"
    i.style.opacity = "0.8"
    setTimeout(function () {
        i.style.transform = "translate(-50%,-50%) scale(0)"
        i.style.opacity = '0'

    }, 2000)
});