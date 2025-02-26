
// // **-- Exercise1



// function displayNumberDivisible(){
//     let sum=0;
//     console.log("numbers divisble by 23: ")
//     for (let i=0 ; i <500; i++){
//         if (i % 23 ===0){
//             console.log(i);
//             sum += i;
//         }
//     }
//     console.log("sum:",sum)
// }


// displayNumberDivisible()

// **-- Exercise2


const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}; 

const shoppingList = ["banana", "orange", "apple"];


    function myBill() {
    let total =0

    for (let item of shoppingList){
        if (stock[item]>0){
            total += prices[item];
         }
     }
    return `Total Bill:$${total}`;

}

console.log(myBill())


// **-- Exercise3

    def changeEnough(itemPrice, amountOfChange):
    coinValues = [0.25,0.10,0.05,0.01]
    totalChange=sum(coin * value for coin, value in zip(amountOfChange,coin_values))

    return total_change >= itemPrice

// not workinggg
    
print(changeEnough(4.25, [25, 20, 5, 0])) 




function changeEnough(itemPrice,amountOfChange){
    let coinValues= [0.25,0.10,0.05,0.01];
    let totalChange= amountOfChange
                                .map((coin,index) => coin * coinValues[index])
                                .reduce((acc,value) => acc + value,0);

    return totalChange >= itemPrice


}

// **-- Exercise4

function hotelCost() {
    let nights;
    do {
        nights=prompt("how many nights will you stay in the hotel?");
    } while (isNaN(nights) and nights != 0);    
    return nights * 140
}

function planeRideCost(){
    let destination;
    do {
        destination=prompt("What is the destination?").toLowerCase().trim();
    } while (isNaN(destination));
    if (destination==="london") 
        return 183
    if (destination==="paris")
        return 220
    return 300
}

function rentalCarCost(days) {
    let days;
    do {
        days=prompt("How many days would you like to rent the car?")
    } while (isNaN(days));
    }
    let cost=days * 40;
    if (days>10){
        cost *= 0.95;
    }
    return cost;



function totalVacationCost() {
    let hotelTotal= hotelCost();
    let flightTotal = planeRideCost();
    let carTotal = rentalCarCost();


    console.log(`${carTotal},${hotelTotal},${flightTotal}`);
}

