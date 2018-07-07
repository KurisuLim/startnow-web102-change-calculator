// Write your JavaScript here

function calculateChange(amountReceived,amountDue){

   return amountReceived - amountDue;
}

function handleClickEvent(e) {

    var amountDue = document.getElementById('amount-due').value;
    amountDue = Math.floor(amountDue * 100);
    var amountReceived = document.getElementById('amount-received').value;
    amountReceived = Math.floor(amountReceived * 100);
    var amountTotal = calculateChange(amountReceived,amountDue);;
    var dollars = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    var cents = amountTotal;

    debugger; //Thanks to Anthony
 
    //Sam Helped with my logic
    dollars =  Math.floor(cents/100);
    cents -= dollars *100;
    document.getElementById('dollars-output').innerHTML = dollars;

    quarters =  Math.floor(cents/25);
    cents -= quarters * 25;
    document.getElementById('quarters-output').innerHTML = quarters;

    dimes =  Math.floor(cents/10);
    cents -= dimes * 10;
    document.getElementById('dimes-output').innerHTML = dimes;
  
    nickels =  Math.floor(cents/5);
    cents -= nickels*5;
    document.getElementById('nickels-output').innerHTML = nickels;
   
    pennies =  Math.floor(cents/1);
    document.getElementById('pennies-output').innerHTML = pennies;
 
}

document.getElementById('calculate-change').addEventListener('click',handleClickEvent);