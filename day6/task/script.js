// 1. DOM Elements -HTML
const productName = document.getElementById('productName');
const productDesc = document.getElementById('productDesc');
const productColor = document.getElementById('productColor');
const outOfStock = document.getElementById('outOfStock');
const btnAdd = document.getElementById('btnAdd');
const btnUpdate = document.getElementById('btnUpdate');
const searchInput = document.getElementById('searchInput');
const tableBody = document.getElementById('tableBody');


// 2. Read Local Storage 
let productsList = [];

if (localStorage.getItem('products') !== null) {
    productsList = JSON.parse(localStorage.getItem('products'));
    displayProducts(productsList);
}

// 3. Add Product 
function addProduct() {
    if (productName.value.trim() === '') {
        alert('Please enter product name');
        return;
    }

    let product = {
        name: productName.value,
        desc: productDesc.value,
        color: productColor.value,
        isOutOfStock: outOfStock.checked
    };

    productsList.push(product);
    localStorage.setItem('products', JSON.stringify(productsList)); 
    
    displayProducts(productsList);
    clearForm();
}

// 4. Display Products 
function displayProducts(list) {
    let rows = '';
    for (let i = 0; i < list.length; i++) {
        rows += `
            <tr>
                <td>${list[i].name}</td>
                <td>${list[i].desc}</td>
                <td>${list[i].color}</td>
                <td>${list[i].isOutOfStock ? 'Yes' : 'No'}</td>
                <td>
                    <button onclick="setFormForUpdate(${i})">Edit</button>
                    <button onclick="deleteProduct(${i})">Delete</button>
                </td>
            </tr>
        `;
    }
    tableBody.innerHTML = rows;
}

// 5. Clear Form 
function clearForm() {
    productName.value = '';
    productDesc.value = '';
    productColor.value = 'Red';
    outOfStock.checked = false;
}

// 6. Delete Product
function deleteProduct(index) {
    productsList.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(productsList));
    displayProducts(productsList);
}

// 7. Set Form For Update 
let tmpIndex;

function setFormForUpdate(index) {
    tmpIndex = index;
    productName.value = productsList[index].name;
    productDesc.value = productsList[index].desc;
    productColor.value = productsList[index].color;
    outOfStock.checked = productsList[index].isOutOfStock;

    
    btnAdd.style.display = 'none';
    btnUpdate.style.display = 'inline-block';
}

// 8. Update Product 
function updateProduct() {
    productsList[tmpIndex] = {
        name: productName.value,
        desc: productDesc.value,
        color: productColor.value,
        isOutOfStock: outOfStock.checked
    };

    localStorage.setItem('products', JSON.stringify(productsList));
    displayProducts(productsList);
    clearForm();


    btnAdd.style.display = 'inline-block';
    btnUpdate.style.display = 'none';
}

// 9. Search Product 
function searchProduct(searchTerm) {
    let matchedProducts = [];
    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
            matchedProducts.push(productsList[i]);
        }
    }
    displayProducts(matchedProducts);
}
