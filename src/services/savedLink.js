//busar os links salvos
export async function getLinkSave(key){
    const myLinks = await localStorage.getItem(key)
    //converte os links salvos em uma array
    let linkSave = JSON.parse(myLinks) || []
    //retorna os links
    return linkSave
}

//salvar os links no localStorage
export async function saveLink(key, newLink){
    let linkeStored = await getLinkSave(key)
    //bloqueia duplicidade de ID e não deixa duplicar no localStorage
    const hasLink = linkeStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('Esse link já existe na sua lista')
        return
    }

    //adiciona o novo link aos favoritos
    linkeStored.push(newLink)
    //salva em local estorage
    await localStorage.setItem(key, JSON.stringify(linkeStored))
    console.log('Link salvo com sucesso')
}

//remover dos favoritos
export function deleteLink(links, id){
    //acessa o banco de dados em busca do id 
    let myLinks = links.filter(item => {
        return(item.id !== id)
    })
    //atualiza o banco de dados removendo o item selecionado
    localStorage.setItem('@ShortenerFavLink', JSON.stringify(myLinks))
    alert('Link deletado com sucesso! 🗑️​ ')

    return myLinks
}