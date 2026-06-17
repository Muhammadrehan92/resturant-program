/*let item = prompt ("Biryani ,Tikka ,Kabaab")
let output = document.getElementById('output')
let chkBiryani = 220
let alooBiryani = 120
let beefBiryani = 200
let chestTikka = 400
let chickenTikka = 500
let seekhKabaab = 350 
let golaKabaab = 450 


if(item === "Biryani" || "biryani"){
   Btype = prompt("3 types of Biryani 1.aloo 2.chicken 3.beef")
   if(Btype === "aloo"){
       quantity = +prompt("kitney")
       output.innerHTML = `your order is ${quantity} ${item}, and your bill is ${alooBiryani * quantity}`    
    }
       else if(Btype === "chicken"){
       quantity = +prompt("kitney")
       output.innerHTML = `your order is ${quantity} ${item}, and your bill is ${chkBiryani * quantity}`    
    }
    else{
        quantity = +prompt("kitney")
        output.innerHTML = `your order is ${quantity} ${item}, and your bill is ${beefBiryani * quantity}`    
    }
}
else if (item === "Tikka" || "tikka"){

     Ttype = prompt("2 types: chicken, chest");

    if (Ttype === "chicken") {
         quantity = +prompt("kitney");
        output.innerHTML = `order ${quantity} ${item}, and your bill is ${chickenTikka * quantity}`;
    }

    else if (Ttype === "chest" || "Chest") {
        quantity = +prompt("kitney");
        output.innerHTML = `your order is ${quantity} ${item}, and your bill is ${chestTikka * quantity}`;
    }

}
else if (item === "Kabaab") {

     Ttype = prompt("2 types: seekh, gola");

    if (Ttype === "seekh") {
         quantity = +prompt("kitney");
        output.innerHTML = `order ${quantity} ${item}, bill ${seekhKabaab * quantity}`;
    }

    else if (Ttype === "gola") {
         quantity = +prompt("kitney");
         output.innerHTML = `order ${quantity} ${item}, bill ${golaKabaab * quantity}`;
    }
}*/
let type;
let price;
function order(item) {

    

        if (item === "biryani") {

            type = prompt(
    "Select Biryani:\n1. aloo\n2. chicken\n3. beef"
).toLowerCase();
        if (type === "aloo") {
            price = 150;
        }
        else if (type === "chicken") {
            price = 250;
        }
        else if (type === "beef") {
            price = 350;
        }
        else {
            alert("Invalid Biryani Type");
            return;
        }

    }

    else if (item === "tikka") {

             type = prompt(
            "Select Tikka:\n1. chicken\n2. chest"
        ).toLowerCase();

        if (type === "chicken") {
            price = 400;
        }
        else if (type === "chest") {
            price = 500;
        }
        else {
            alert("Invalid Tikka Type");
            return;
        }

    }

    else if (item === "kabaab") {

             type = prompt(
            "Select Kabaab:\n1. gola\n2. seekh"
        ).toLowerCase();

        if (type === "gola") {
            price = 350;
        }
        else if (type === "seekh") {
            price = 300;
        }
        else {
            alert("Invalid Kabaab Type");
            return;
        }

    }

    let quantity = +prompt("Enter Quantity");

    if (quantity <= 0 || isNaN(quantity)) {
        alert("Enter Valid Quantity");
        return;
    }

    let total = price * quantity;

    document.getElementById("output").innerHTML = `
        <h2>✅ Order Confirmed</h2>
        <p>Item: ${item}</p>
        <p>Category: ${type}</p>
        <p>Quantity: ${quantity}</p>
        <p>Total Bill: Rs ${total}</p>
    `;
}