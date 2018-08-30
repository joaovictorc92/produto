import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

const apis = {
    readCategoria: (id) => api.get('categorias?id=' +id),
    loadCategorias: ()=> api.get('categorias'),
    delete: (id) => api.delete('categorias/'+id),
    createCategoria: (categoria) => api.post('categorias', categoria),
    editCategoria: (categoria) => api.put('categorias/'+categoria.id, categoria),
    createProduto: (produto) => api.post('produtos', produto),

    loadProdutos: (categoria) =>  api.get('produtos?categoria='+categoria)
}

export default apis