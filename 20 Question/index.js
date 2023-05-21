const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(!shoppingCart.includes("Meat") && !shoppingCart.includes("Sugar")){
    shoppingCart.unshift("Meat")
    shoppingCart.push("Sugar")
}
shoppingCart.splice(4,1)
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"
console.log(shoppingCart);