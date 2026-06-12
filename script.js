let item = prompt ("Biryani ,Tikka ,Kabaab")
let output = document.getElementById('output')

let chkBiryani = 220
let alooBiryani = 120
let chestTikka = 400
let chickenTikka = 500
let seekhKabaab = 350 
let golaKabaab = 450 


if(item === "Biryani"){
quantity = quantity =+prompt("kitney")
output.innerHTML = `order your ${quantity} ${item}, and your bill is ${chkBiryani * quantity}`    
}
else if(item === "Tikka"){
quantity = +prompt("kitney")
output.innerHTML = `order your ${quantity} ${item}, and your bill is ${chickenTikka * quantity}`
}
else if(item === "kabaab"){
quantity = +prompt("kitney")
output.innerHTML = `order your ${quantity} ${item}, and your bill is ${seekhKabaab * quantity}`
}
