/* ================================= ABRIR E FECHAR O MENU ================================= */

function sandwichOpen() {
    let sandwichDrop = document.getElementById("sandwich-drop")
    if (sandwichDrop.style.opacity == 0) {
        sandwichDrop.style.opacity = 1;
        sandwichDrop.style.pointerEvents = "auto";
    } else {
        sandwichDrop.style.opacity = 0;
        sandwichDrop.style.pointerEvents = "none";
    }
}



/* =========================== FECHAR O MENU AO CLICAR FORA DELE =========================== */

window.addEventListener('click', function(e){
  if (!document.getElementById('sandwich-drop').contains(e.target) && (!document.getElementById('sandwich-button').contains(e.target))){
    if (this.document.getElementById('sandwich-drop').style.opacity == 1) {
      sandwichOpen()
    }
  } 
})