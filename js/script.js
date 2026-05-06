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

  
}



function descurtir() { 
  if (!descurtido) {
    deslikeCount++;
    descurtido = true;
  } else {
    deslikeCount--;
    descurtido = false;
  }

  
}

//--- VIEW (interface/renderização)---
function atualizarTela(){
  document.getElementById("likeCount").innerText = likeCount;
  document.getElementById("deslikeCount").innerText = deslikeCount;
}

// --- CONTROLLER (intermediação)---

function clicarCurtir(){
  curtir();
  atualizarTela();
}

function clicarDescurtir(){
  descurtir();
  atualizarTela();
}

// --- EVENTOS ---
document.getElementById("deslikeBtn").addEventListener("click", clicarDescurtir);
document.getElementById("likeBtn").addEventListener("click", clicarCurtir);


// --- INICIALIZAÇÃO ---

atualizarTela();