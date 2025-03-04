// Aplicação que permite ao usuário inserir ou remover itens de uma lista da compras. Cada item possui seu respectivo local dentro do supermercado.
// Por Methark - Arthur Braga

// Array para armazenar os itens da lista
let shoppingList = [];

// Função para adicionar um item à lista
function addItem(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Captura os valores dos inputs
    const itemName = document.getElementById('itemName').value;
    const itemSection = document.getElementById('itemSection').value;

    // Verifica se os campos estão preenchidos
    if (itemName && itemSection) {
        // Cria um objeto para o item
        const item = {
            name: itemName,
            section: itemSection
        };

        // Adiciona o item ao array
        shoppingList.push(item);

        // Limpa os campos do formulário
        document.getElementById('shoppingForm').reset();

        // Atualiza a exibição da lista
        displayList();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para exibir a lista de compras
function displayList() {
    const listElement = document.getElementById('shoppingList');
    listElement.innerHTML = ''; // Limpa a lista atual

    // Itera sobre o array e cria os elementos da lista
    shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name}</span>
            <span>${item.section}</span>
            <button onclick="removeItem(${index})">Remover</button>
        `;
        listElement.appendChild(li);
    });
}

// Função para remover um item da lista
function removeItem(index) {
    shoppingList.splice(index, 1); // Remove o item do array
    displayList(); // Atualiza a exibição da lista
}

// Adiciona um listener para o formulário
document.getElementById('shoppingForm').addEventListener('submit', addItem);
