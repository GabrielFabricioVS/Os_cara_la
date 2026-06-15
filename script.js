let botaoSim = document.getElementById("sim");
let botaoNao = document.getElementById("nao");
let texto = document.getElementById("texto");
let imagem = document.getElementById("imagem");

let tamanhoSim = 30;
let tamanhoNao = 30;
let cliques = 0;

// ================= NÃO =================
botaoNao.addEventListener("click", function() {
    cliques++;

    if (cliques === 1) {
        texto.innerText = "Espera..., Vamos tentar denovo? 😦😧😨";
        imagem.src = "img2.jpg";
    }
    if (cliques === 2) {
        texto.innerText = "O que, Cê sabe que é pra clicar no verde ne? 🤨 Vamos tentar denovo? 😘";
        imagem.src = "img3.jpg";
    }
    if (cliques === 3) {
        texto.innerText = "Você esta brincando? 😰";
        imagem.src = "img4.jpg";
    }
    if (cliques === 4) {
        texto.innerText = "Ham..Ce prefere vermelho ne, Não pensa muito, Ultima chance 😊";
        imagem.src = "img5.jpg";

        botaoSim.style.backgroundColor = "#f44336";
        botaoNao.style.backgroundColor = "#4CAF50";
    }
    if (cliques === 5) {
        texto.innerText = "Agora ficou melhor 🥰";
        imagem.src = "img6.jpg";

        botaoNao.style.backgroundColor = "#f44336";
        botaoSim.style.backgroundColor = "#4CAF50";
    }

    // SIM cresce
    tamanhoSim += 10;
    botaoSim.style.fontSize = tamanhoSim + "px";
    botaoSim.style.padding = (tamanhoSim / 2) + "px";

    // NÃO diminui
    tamanhoNao -= 4;

    if (tamanhoNao > 8) {
        botaoNao.style.fontSize = tamanhoNao + "px";
        botaoNao.style.padding = (tamanhoNao / 2) + "px";
    }

    // boss final
    if (cliques >= 5) {
        botaoNao.style.display = "none";

        botaoSim.style.width = "80%";
        botaoSim.style.maxWidth = "300px";
        botaoSim.style.height = "70px";
        botaoSim.style.fontSize = "28px";
        botaoSim.style.borderRadius = "20px";
    }
});


// ================= SIM =================
botaoSim.addEventListener("click", function() {

    let total = 50;

    for (let i = 0; i < total; i++) {

        setTimeout(() => {

            let coracao = document.createElement("div");
            coracao.classList.add("coracao");

            let coracoes = ["💜", "💞", "💗", "❤️"];
            coracao.innerText = coracoes[Math.floor(Math.random() * coracoes.length)];

            coracao.style.left = Math.random() * 90 + "vw";

            let movimentoX = (Math.random() * 150 - 75) + "px";
            coracao.style.setProperty("--x", movimentoX);

            let tamanho = Math.random() * 25 + 25;
            coracao.style.fontSize = tamanho + "px";

            document.body.appendChild(coracao);

            setTimeout(() => {
                coracao.remove();
            }, 3000);

        }, i * 60);
    }

    setTimeout(() => {
        window.location.href = "final.html";
    }, 3000);
});