//--- ESTADO (dados da aplicação) ---

let likeCount = 0;
let deslikeCount = 0;

let curtido = false;
let descurtido = false;

//--- SERVICE (regras de negócio)---

function curtir() { 
  if (!curtido) {
    likeCount++;
    curtido = true;
  } else {
    likeCount--;
    curtido = false;
  }

  document.getElementById("likeCount").innerText = likeCount;
}

document.getElementById("likeBtn").addEventListener("click", curtir);

function descurtir() { 
  if (!descurtido) {
    deslikeCount++;
    descurtido = true;
  } else {
    deslikeCount--;
    descurtido = false;
  }

  document.getElementById("deslikeCount").innerText = deslikeCount;
}

// --- CONTROLLER (intermediação)---

function clicarCurtir(){
  curtir();
}

function clicarDescurtir(){
  descurtir();
}

// --- EVENTOS ---
document.getElementById("deslikeBtn").addEventListener("click", clicarDescurtir);
document.getElementById("likeBtn").addEventListener("click", clicarCurtir);
