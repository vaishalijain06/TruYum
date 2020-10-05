var cart = [];
var customercart = []; 

var details= [
    { id: 1, name: 'Sandwich', price: 99, active: 'Yes', date_Of_Launch: '15/03/2017', category: 'Main Course', free_Delivery: 'Yes' },
    { id: 2, name: 'Burger', price: 129, active: 'Yes', date_Of_Launch: '23/12/2017', category: 'Main Course', free_Delivery: 'No' },
    { id: 3, name: 'Pizza', price: 149, active: 'Yes', date_Of_Launch: '21/08/2017', category: 'Main Course', free_Delivery: 'No' },
    { id: 4, name: 'French Fries', price: 57, active: 'No', date_Of_Launch: '02/07/2017', category: 'Starter', free_Delivery: 'Yes' },
    { id: 5, name: 'Chocolate Brownies', price: 32, active: 'Yes', date_Of_Launch: '02/11/2022', category: 'Dessert', free_Delivery: 'Yes' }
]

function Cart(){
    cart = JSON.parse(window.localStorage.getItem('customerCart'));
    if(cart!=null){
        window.location.href = "cart.html"
    }
    else{
        window.location.href = "cart-empty.html"
    }
}

function validating_Form(){
    var name = document.getElementsByName("title")[0].value;
    var price = document.getElementsByName("price")[0].value;
    var date = document.getElementsByName("date_of_Launch").value;
    var active= document.getElementsByName("active").value;
    var category = document.getElementById("category").value;
    
    if( name.length==0){
        alert("Name can't be empty!");
        return;
    }
    if(name.length <2 || name.length > 65){
        alert("Please enter valid name!");
        return;
    }
    if(price.length==0){
        alert("Price can't be empty!");
        return;
    }
    if(!price.match("[0-9]")){
       alert("Price value can only be numbers");
       return;
    }
    if(date.length==0){
        alert("Date can't be empty!");
        return;
    }

}


    function display_Admin_Data(details) { 

    let table = document.createElement('table')
    
    let thead = table.createTHead()
    let tbody = table.createTBody()
    let headerRow = thead.insertRow(0)
    
    let name_Cell = headerRow.insertCell()
    let price_Cell = headerRow.insertCell()
    let aCell = headerRow.insertCell()
    let dateOfLaunchCell = headerRow.insertCell()
    let categoryCell = headerRow.insertCell()
    let freeDeliveryCell = headerRow.insertCell()
    let actionCell = headerRow.insertCell()

    name_Cell.innerText = "Name"
    price_Cell.innerText = "Price"
    aCell.innerText = "Active"
    dateOfLaunchCell.innerText = "Date Of Launch"
    categoryCell.innerText = "Category"
    freeDeliveryCell.innerText = "Free Delivery"
    actionCell.innerText="Action"

    name_Cell.id="name"
    price_Cell.className="price"
    aCell.className="table-header"
    dateOfLaunchCell.className="table-header"
    categoryCell.className="table-header"
    freeDeliveryCell.className="table-header"
    actionCell.className="table-header"
    

    details.forEach(function (user) {

        let dataRow = tbody.insertRow()
        
        let nameRowCell = dataRow.insertCell()
        let priceRowCell = dataRow.insertCell()
        let activeRowCell = dataRow.insertCell()
        let dateOfLaunchRowCell = dataRow.insertCell()
        let categoryRowCell = dataRow.insertCell()
        let freeDeliveryRowCell = dataRow.insertCell()
        let actionRowCell=dataRow.insertCell()
        let editLink = document.createElement('a')
        
        nameRowCell.innerText = user.name
        priceRowCell.innerText = `Rs. `+user.price.toFixed(2)
        activeRowCell.innerText = user.active
        dateOfLaunchRowCell.innerText = user.dateOfLaunch
        categoryRowCell.innerText = user.category
        freeDeliveryRowCell.innerText = user.free_Delivery
        editLink.innerText="Edit"
        editLink.href="edit-menu-item.html"
        actionRowCell.appendChild(editLink);
    
        nameRowCell.id="name-content"
        priceRowCell.className="price-content"
        activeRowCell.className="table-content"
        dateOfLaunchRowCell.className="table-content"
        categoryRowCell.className="table-content"
        freeDeliveryRowCell.className="table-content"
        actionRowCell.className="table-content"
        
    })
    document.getElementsByClassName('menu-class')[0].appendChild(table)
}

    function display_Customer_Data(details) { 

    let table = document.createElement('table')
   
    let thead = table.createTHead()
    let tbody = table.createTBody()
    let headerRow = thead.insertRow(0)
    
    let nameCell = headerRow.insertCell()
    let freeDeliveryCell = headerRow.insertCell()
    let priceCell = headerRow.insertCell()
    let categoryCell = headerRow.insertCell()
    let actionCell = headerRow.insertCell()
 
    nameCell.innerText = "Name"
    freeDeliveryCell.innerText = "Free Delivery"
    priceCell.innerText = "Price"
    categoryCell.innerText = "Category"
    actionCell.innerText="Action"

    nameCell.id="name"
    freeDeliveryCell.className="table-header"
    priceCell.className="price"
    categoryCell.className="table-header"
    actionCell.className="table-header"
    

    details.forEach(function (user) {

        if(user.active=="Yes"){
        
        let dataRow = tbody.insertRow()
        
        let nameRowCell = dataRow.insertCell()
        let freeDeliveryRowCell = dataRow.insertCell()
        let priceRowCell = dataRow.insertCell()
        let categoryRowCell = dataRow.insertCell()
        let actionRowCell=dataRow.insertCell()
        let addToCart = document.createElement('a')
        
        nameRowCell.innerText = user.name
        freeDeliveryRowCell.innerText = user.free_Delivery
        priceRowCell.innerText = `Rs. `+user.price.toFixed(2)
        categoryRowCell.innerText = user.category
        categoryRowCell.innerText = user.category
        
        addToCart.href = "menu-item-list-customer-notification.html";
        addToCart.onclick = function () {
            if(window.localStorage.getItem('customerCart')!=null)
            cart = JSON.parse(window.localStorage.getItem('customerCart'));
            cart.push(user);
            
            window.localStorage.setItem('customerCart', JSON.stringify(cart));
        }
        addToCart.textContent = "Add to Cart";
       
      
        actionRowCell.appendChild(addToCart);
        
        nameRowCell.id="name-content"
        freeDeliveryRowCell.className="table-content"
        priceRowCell.className="price-content"
        categoryRowCell.className="table-content"
        actionRowCell.className="table-content"
    }
        
    })
    document.getElementsByClassName('customer-class')[0].appendChild(table)
}

function displayCart(cart) { 
let isCartEmpty = true;
    let table = document.createElement('table')
    
    let thead = table.createTHead()
    let tbody = table.createTBody()
    let headerRow = thead.insertRow(0)
    
    let nameCell = headerRow.insertCell()
    let freeDeliveryCell = headerRow.insertCell()
    let priceCell = headerRow.insertCell()
    
    nameCell.innerText = "Name"
    freeDeliveryCell.innerText = "Free Delivery"
    priceCell.innerText = "Price"
    
    nameCell.id="name"
    freeDeliveryCell.className="table-header"
    priceCell.className="price"
    
    
    cart.forEach(function (user) {
        
        
        if(user!=undefined){
            let dataRow = tbody.insertRow()
            
            let nameRowCell = dataRow.insertCell()
            let freeDeliveryRowCell = dataRow.insertCell()
            let priceRowCell = dataRow.insertCell()
            let actionRowCell= dataRow.insertCell()
            let deleteItem= document.createElement('a')
        
        nameRowCell.innerText = user.name
        freeDeliveryRowCell.innerText = user.free_Delivery
        priceRowCell.innerText = `Rs. `+user.price
        
        deleteItem.innerText="Delete"
        deleteItem.href="cart-notification.html"
       
        deleteItem.onclick = function () {
            delete cart[cart.indexOf(user)];
            window.localStorage.setItem('customerCart', JSON.stringify(cart));
        }
        deleteItem.textContent = "Delete";
        actionRowCell.appendChild(deleteItem);
        nameRowCell.id="name-content"
        freeDeliveryRowCell.className="table-content"
        priceRowCell.className="price-content"
        actionRowCell.className="table-content"

        document.getElementsByClassName('customer-class')[0].appendChild(table)
        isCartEmpty=false;
        }    
    })
    if(isCartEmpty){
        window.location.href = "cart-empty.html";
    }
}
window.onload = function(e){
    let page=document.getElementById('page').value
    
    if (page == 'admin') {
        display_Admin_Data(details);
    } 
    else if (page == 'customerPage' || page=='customerNotification') {
       
        display_Customer_Data(details);
    } 
    else if(page=='cart-status' || page=='cart-not'){
        cart = JSON.parse(window.localStorage.getItem('customerCart'))
       
        displayCart(cart);
        window.localStorage.clear()
    }
}
