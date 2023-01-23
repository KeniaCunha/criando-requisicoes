import { conectaApi } from "./conectaApi.js";
import criarCard from "./mostrarVideos.js";

async function procurarVideo(evento){
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscarVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        criarCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    if(busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos referente a pesquisa.<h2>`
    }

}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => procurarVideo(evento))