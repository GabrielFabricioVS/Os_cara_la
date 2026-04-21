let tempoTotalTexto = document.getElementById("tempoTotal");
let musicas = [
    { audio: "m1.mp3", nome: "Pink Bubblegum 💜", autor: "lavi kou", capa: "capa1.jpg" },
    { audio: "m2.mp3", nome: "You Are the Right One 💖", autor: "Sports", capa: "capa2.jpg" },
    { audio: "m3.mp3", nome: "Ma Meilleure Ennemie 💙", autor: "Stromae & Pomme", capa: "capa3.jpg" },
    { audio: "m4.mp3", nome: "Nuts 🧡", autor: "Lil Peep", capa: "capa4.jpg" },
    { audio: "m5.mp3", nome: "Back to Friends 🖤", autor: "Sombr", capa: "capa5.jpg" },
    { audio: "m6.mp3", nome: "Did i Tell You That i Miss u 🤍", autor: "Sports", capa: "capa6.jpg" },
    { audio: "m7.mp3", nome: "I Wanna Be Yours 🤍", autor: "Arctic Monkeys", capa: "capa7.jpg" },
    { audio: "m8.mp3", nome: "Her 💚", autor: "JVKE", capa: "capa8.jpg" },
    { audio: "m9.mp3", nome: "Love Me Not 💗", autor: "Ravyn Lenae", capa: "capa9.jpg" },
    { audio: "m10.mp3", nome: "Join Me In Death 🖤", autor: "HIM", capa: "capa10.jpg" },
    { audio: "m11.mp3", nome: "Die for You 🤎", autor: "Joji & hisōka", capa: "capa11.jpg" },
    { audio: "m12.mp3", nome: "Remember Me 💜", autor: "d4vd", capa: "capa12.jpg" },
    { audio: "m13.mp3", nome: "See You Again 💛", autor: "Tyler The Creator", capa: "capa13.jpg" },
    { audio: "m14.mp3", nome: "Slow Dancing in The Dark 🤎", autor: "Joji & Chōju", capa: "capa14.jpg" },
    { audio: "m15.mp3", nome: "Tek It", autor: "Cafuné", capa: "capa15.jpg" },
    { audio: "m16.mp3", nome: "Cabelos Arco-íris 💘", autor: "Kamaitachi", capa: "capa16.jpg" },
    
];

let index = 0;
let audio = new Audio();

// ELEMENTOS
let nome = document.getElementById("nomeMusica");
let autor = document.getElementById("autorMusica");
let capa = document.getElementById("capaMusica");
let progresso = document.getElementById("progresso");
let tempoTexto = document.getElementById("tempoAtual");

let btn = document.getElementById("btnEntrar");
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");

// BOTÕES PLAYER
let playBtn = document.getElementById("playBtn");
let btnNext = document.querySelector(".controls button:nth-child(3)");
let btnPrev = document.querySelector(".controls button:nth-child(1)");
let barra = document.querySelector(".bar");

// ================= 🎵 TOCAR =================
function tocar() {
    let musica = musicas[index];

    audio.src = musica.audio;
    audio.play();

    nome.innerText = musica.nome;
    autor.innerText = musica.autor;
    capa.src = musica.capa;

    playBtn.innerHTML = "&#10074;&#10074;"; // ||
}

// ================= ⏯ PLAY / PAUSE =================
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = "&#10074;&#10074;"; // ||
    } else {
        audio.pause();
        playBtn.innerText = "▶";
    }
});

// ================= ⏭ PRÓXIMA =================
btnNext.addEventListener("click", () => {
    index++;
    if (index >= musicas.length) index = 0;
    tocar();
});

// ================= ⏮ ANTERIOR =================
btnPrev.addEventListener("click", () => {
    index--;
    if (index < 0) index = musicas.length - 1;
    tocar();
});

// ================= ⏱ TEMPO REAL =================
audio.addEventListener("timeupdate", () => {

    let tempoAtual = audio.currentTime;
    let duracao = audio.duration;

    if (!duracao) return;

    // barra
    progresso.style.width = (tempoAtual / duracao * 100) + "%";

    // tempo formatado
    let minutos = Math.floor(tempoAtual / 60);
    let segundos = Math.floor(tempoAtual % 60);

    tempoTexto.innerText =
        minutos + ":" + (segundos < 10 ? "0" + segundos : segundos);
});

// ================= ⏭ AUTO NEXT =================
audio.onended = () => {
    index++;
    if (index >= musicas.length) index = 0;
    tocar();
};

// ================= ⏱ TEMPO TOTAL =================
audio.addEventListener("loadedmetadata", () => {

    let duracao = audio.duration;

    if (!duracao) return;

    let minutos = Math.floor(duracao / 60);
    let segundos = Math.floor(duracao % 60);

    tempoTotalTexto.innerText =
        minutos + ":" + (segundos < 10 ? "0" + segundos : segundos);
});


// ================= 🎯 CLICAR NA BARRA =================
barra.addEventListener("click", (e) => {

    let largura = barra.clientWidth;
    let cliqueX = e.offsetX;

    let duracao = audio.duration;

    audio.currentTime = (cliqueX / largura) * duracao;
});

// ================= 🚀 INICIAR =================
btn.addEventListener("click", () => {
    overlay.style.display = "none";
    popup.style.display = "flex";

    tocar();
});

// ================= ❌ FECHAR POPUP =================
popup.addEventListener("click", () => {
    popup.style.display = "none";
});

// ================= ✨ SCROLL =================
let itens = document.querySelectorAll(".item");

window.addEventListener("scroll", () => {
    itens.forEach(item => {
        let pos = item.getBoundingClientRect().top;

        if (pos < window.innerHeight - 100) {
            item.classList.add("ativo");
        }
    });
});