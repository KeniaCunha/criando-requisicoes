//Para consumirmos uma API precisamos trabalhar com a assincronicidade, que nesse caso foi tratada com o async await.

async function listarVideos(){
    //QDO NAO SE DECLARA UM SEGUNDO PARAMETRO, por default é o GET
    const conexao = await fetch("http://localhost:3000/videos");

    //converter o retorno em JSON para objeto Javascript com o método .json().
    const conexaoConvertida = await conexao.json();   

    return conexaoConvertida;
}

async function criarVideo(titulo, descricao,url,imagem){
    const conexao = await fetch("http://localhost:3000/videos",{
        //utilização dos objetos de configuração “method”, “headers” e “body”, e conversao do objeto enviado para o body para string.
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações `,
            url: url,
            imagem: imagem 
        })
    });
    if(!conexao.ok){
        throw new Error("Não foi possível enviar o video.");
    }

    const conexaoConvertida = conexao.json(); 

    return conexaoConvertida;
}

async function buscarVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)

    const conexaoConvertida = await conexao.json();   

    return conexaoConvertida;
}

export const conectaApi = {
    listarVideos,
    criarVideo,
    buscarVideo
}