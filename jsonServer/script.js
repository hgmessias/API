async function getInfos() {
    const retorno = await fetch("http://localhost:8082/comments?_embed=post")

    const retornoData = await retorno.json();

    console.log(retornoData.post.title);
}


getInfos();
