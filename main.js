var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");

var productsContainer = [];

if(localStorage.getItem("productMemo")!= null){

    productsContainer=JSON.parse(localStorage.getItem("productMemo")) ;
    ProductDisplay();

}



function addProduct() {

    if(validateProductName()==true && validateProductPrice()==true &&
     validateProductCategory()==true && validateProductDesc()==true ){

        if( document.getElementById("mainBtn").innerHTML=="update"){

            productsContainer[localStorage.getItem("updatedvalue")].name=productName.value
            productsContainer[localStorage.getItem("updatedvalue")].price=productPrice.value
            productsContainer[localStorage.getItem("updatedvalue")].category=productCategory.value
            productsContainer[localStorage.getItem("updatedvalue")].desc=productDesc.value
            ProductDisplay()
            document.getElementById("mainBtn").innerHTML="add product"
    
    
        
        }
    
    
    
    
    else if  (productName.value != "" && productPrice.value!="" &&   
      productCategory.value!="" &&     productDesc.value!=""
    
    )
    { 
    
     
    
        
        
        var product = {
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        desc:productDesc.value,
    };
    productsContainer.push(product);
    localStorage.setItem("productMemo", JSON.stringify(productsContainer)  )
    ProductDisplay();
    clearForm();
    
    }
    
    else {window.alert("All fields are Required")};
    
      
       
    }
    






     }





   


function clearForm(){

    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDesc.value="";
};


function ProductDisplay(){

var cartona =``;
for(var i=0;i<productsContainer.length;i++){

    cartona += `<tr>
    <td>${i}</td>
    <td>${productsContainer[i].name}</td>
    <td>${productsContainer[i].price}</td>
    <td>${productsContainer[i].category}</td>
    <td>${productsContainer[i].desc}</td>
    <td><button onclick="updateProduct(${i})" class=" btn btn-outline-warning">Update</button></td>
    <td><button onclick="deleteProduct(${i})" class=" btn btn-outline-danger">Delete</button></td>
    </tr>`;
}
document.getElementById("tableBody").innerHTML=cartona;
}



function deleteProduct(index){
    productsContainer.splice(index,1)
    ProductDisplay()
    localStorage.setItem("productMemo", JSON.stringify(productsContainer))
}



function searchProduct(term){

    var cartona =``;


     for (var i=0;i<productsContainer.length;i++){
    if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase())== true){

        cartona += `<tr>
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button onclick="updateProduct(${i})" class=" btn btn-outline-warning">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class=" btn btn-outline-danger">Delete</button></td>
        </tr>`;

    }
    document.getElementById("tableBody").innerHTML=cartona;


}

}


function updateProduct(index){

    productName.value=productsContainer[index].name
    productPrice.value=productsContainer[index].price
    productCategory.value=productsContainer[index].category
    productDesc.value=productsContainer[index].desc

    localStorage.setItem("updatedvalue",index)

    document.getElementById("mainBtn").innerHTML="update"



}



function validateProductName(){
    var regex = /^[A-Z][a-z]{3,5}$/g
    if (regex.test(productName.value)==true){
        return true;
    }
    else{
        return false;
    }
}

function validateProductPrice(){
    var regex = /^[1-9]{1}[0-9]{3}$|^(10000)$/g
    if (regex.test(productPrice.value)==true){
        return true;
    }
    else{
        return false;
    }
}

function validateProductCategory(){
    var regex = /^(pc)$|^(mobile)$/g
    if (regex.test(productCategory.value)==true){
        return true;
    }
    else{
        return false;
    }
}

function validateProductDesc(){
    var regex = /[ ]/g
    if (productDesc.value.match(regex).length>=3){
        return true;
    }
    else{
        return false;
    }
}




function validateProductPrice_WithAddButton(term){
    var regex = /^[1-9]{1}[0-9]{3}$|^(10000)$/g
    if (regex.test(term)==true){
    
document.getElementById("zico").innerHTML=`   <button  id="mainBtn" onclick="addProduct()" class=" btn btn-outline-info my-3">add product</button>
`
        
    }
    else{document.getElementById("zico").innerHTML=`   <button disabled id="mainBtn" onclick="addProduct()" class=" btn btn-outline-info my-3">add product</button>
    `}
    
    
}


