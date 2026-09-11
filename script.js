const produtos = [
    {
        nome: "Espresso Tradição",
        preco: "R$ 8,00",
        imagem: "./imgs/espresso.jpg"
    },
    {
        nome: "Cappuccino Aconchego",
        preco: "R$ 14,00",
        imagem: "./imgs/capuccino.jpg"
    },
    {
        nome: "Latte Caramelo",
        preco: "R$ 16,00",
        imagem: "./imgs/latte.jpg"
    },
    {
        nome: "Mocaccino Especial",
        preco: "R$ 18,00",
        imagem: "./imgs/mocaccino.jpg"
    }
];

function cardapio() {
    const container = document.getElementById('container-produtos');
    container.innerHTML = '';

    produtos.forEach(produto => {
        const cardHTML = `
            <div class="card-produto">
                <div class="foto-produto">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </div>
                <h3>${produto.nome}</h3>
                <p class="preco">${produto.preco}</p>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

document.addEventListener('DOMContentLoaded', cardapio);

/* formulario */
const form = document.getElementById('meu-formulario')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    alert('Sua mensagem foi enviada com sucesso!')
    form.reset()
})