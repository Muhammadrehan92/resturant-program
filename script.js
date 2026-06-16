let item = prompt ("Biryani ,Tikka ,Kabaab")
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
}

