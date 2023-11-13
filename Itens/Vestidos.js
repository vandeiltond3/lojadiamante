const itens = [
    {
        id: 0,
        foto: 'produtos/blusinha.JPG',
        preco: '25,99',
        nome: 'Endless - Regata Feminina Verde'
    },
    {
        id: 1,
        foto: 'produtos/vestido.JPG',
        preco: '89,99',
        nome: 'Endless - Regata Feminina Verde'
    },
    {
        id: 2,
        foto: 'produtos/vestido2.JPG',
        preco: '49,99',
        nome: 'Endless - Regata Feminina Verde'
    },
    {
        id: 3,
        foto: 'produtos/vestido3.JPG',
        preco: '379,99',
        nome: 'Endless - Regata Feminina Verde'
    }
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('vestidos');
    itens.map((val)=>{
        containerProdutos.innerHTML+= `
        
        <div class="description">
            <img src=`+val.foto+`>
            <span>`+val.preco+`</span>
            <h4>`+val.nome+`</h4>
        </div>
        
        `
    })
}

inicializarLoja();