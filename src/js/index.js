/*
Objetivo 1 - quando passar o mouse em cima do personagem temos que:

- colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

- retirar a classe selecionado do personagem que está selecionado

Objetivo 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande

- alterar a imagem do jogador
- alterar o nome do jogador 1


*/


// o queryselector all retorna a lista completa
const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {

    // Objetivo 1

    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado')

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado != 'ultron') {
            // remove a classe selecionado do anterior
            personagemSelecionado.classList.remove('selecionado')

            // adiciona a classe selecionado no que tem o mouse em cima
            personagem.classList.add('selecionado')

            // Objetivo 2

            // alterar a imagem do jogador

            // os nomes dos ids estão iguais os nomes das imagens, para facilitar a mudança
            const imagemJogador1 = document.getElementById('personagem-jogador-1')
            imagemJogador1.src = `src/imagens/${idSelecionado}.png`

            // alterar o nome do jogador 1
            const nomeJogador1 = document.getElementById('nome-jogador-1')

            // buscando o data-name
            const nomeSelecionado = personagem.getAttribute('data-name')

            // o innerhtml altera o elemento html interno a tag
            nomeJogador1.innerHTML = nomeSelecionado
        }


    });
})


















