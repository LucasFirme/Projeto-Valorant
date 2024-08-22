/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
passo 1 - dar um jeito de pegar o elemento HTML dos botões
passo 2 - dar um jeito de identificar o clique do usuário no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionado
passo 5 - esconder a imagem anteriormente selecionada
passo 6 - fazer aparecer a imagem correspondente ao botão clicado
passo 7 - esconder a informação do Agente anteriormente selecionado
passo 8 - mostrar a informação do Agente referente ao botão clicado
*/

//- passo 1 - dar um jeito de pegar o elemento HTML dos botões 
const botoesCarrossel = document.querySelectorAll(".botao");
const informacoes = document.querySelectorAll(".informacoes");
const imagens = document.querySelectorAll(".imagem");

// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        console.log(`Botão ${indice} clicado`);
        // - passo 3 - desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector(".selecionado");
        botaoSelecionado.classList.remove("selecionado");
        // - passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add("selecionado");
        // - passo 5 - esconder a imagem anteriormente selecionada
        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");
        // - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        imagens[indice].classList.add("ativa");
        // - passo 7 - esconder a informação do Agente anteriormente selecionado
        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");
        // - passo 8 - mostrar a informação do Agente referente ao botão clicado
        informacoes[indice].classList.add("ativa");

    });

});







