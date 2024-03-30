const chama = document.getElementById("botao")

chama.addEventListener("click",() => {
    if( document.body.style.background === "orange"){
        document.body.style.background = "black"
    }
    else{
        document.body.style.background = "orange"
    }
});

