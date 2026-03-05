//vamos trazer os dados dos usuario do jsonplaceholder
//usando o método natico fetch()
fetch('https://jsonplaceholder.typicode.com/users/')

//será gerado uma promisse
//tenho os dez usuarios no formato JSON
.then(response => response.json())

.then(usuario =>{
    const todosUsuarios = document.getElementById('listaUsuarios')

    usuario.fetch(user=>{
        const cadaUsuario = document.createElement('li')
        cadaUsuario.textContent = user.name + ' (' + user.email + ') '
        todosUsuarios.appendChild(cadaUsuario)
    })
})
.catch(error =>{
    document.getElementById('todosusuarios').textContent= 'Erro ao buscar usuarios'
});
