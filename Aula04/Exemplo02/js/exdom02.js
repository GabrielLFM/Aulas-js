//vamos pegar a lista do produo com id = lista
const elementoLista = document.getElementById('lista')

//vamos pegar o input com id = novoItem
const elementoInput = document.getElementById('novoItem')

//vamos pegar o elemento button com id = botaoAdicionar
const elementoBotao = document.getElementById('botaoAdicionar')

//vamos adicionar o método adEventListener
elementoBotao.addEventListener('click', function(){
    //vamos ler o produto digitado pelo usuario
    const novoProduto = elementoInput.value

    //vamos faer a validação do produto
    if (novoProduto !== "") {
        //1. Vamos criar um novo elemento li
        const novoItemElemento = document.createElement('li')

        //2. Vamos definir o texto do novo elemento li
        novoItemElemento.textContent = novoProduto

        //3. Vamos inseeriri o li criado no ul
        elementoLista.appendChild(novoItemElemento)

        //4. Vamos limpar o input
        elementoInput.value = ''
    }
})