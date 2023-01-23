import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento){
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const descricao = Math.floor(Math.random()*10).toString();
    try{
        await conectaApi.criarVideo(titulo, descricao,url,imagem);

        window.location.href = "../pages/envio-concluido.html";
    }
    //Para lidarmos com erros nas promises, geradas em funções assíncronas como requisições, podemos utilizar o try e o catch na função. 
    //Agora, a interpretação funciona como: tente/try fazer o que está dentro do try, caso não consiga ele irá pegar/catch, detectar e imprimir uma frase dentro do alert().
    catch (erro){
        alert(erro);
    }

}

formulario.addEventListener("submit", evento => criarVideo(evento));