let likeCount = 0;
let deslikeCount = 0;

let curtido = false;
let descurtido = false;

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

document.getElementById("deslikeBtn").addEventListener("click", descurtir);
