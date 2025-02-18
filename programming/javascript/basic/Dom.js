function outerfunction(outer){
    return function innerfunction(inner){
        console.log(outer);
        console.log(inner);
    }
}

let newfunction=outerfunction("shrinias");
newfunction("nashte");


function counter(){
    let count=0;
    return{
        increment:() => ++count,
        decrement:() => --count,
        getCount: () => count,
    }
}
const mycounter=counter();
console.log(mycounter.getCount());
console.log(mycounter.increment());
console.log(mycounter.increment());
console.log(mycounter.decrement());
console.log(mycounter.getCount());


function multiplier(factor){
    return function(number)
    {
        return number * factor;
    };
}
console.log("______________________________________________________________________________________________________________________________________________________________________")
const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));
console.log(triple(8));

//document.getElementById('mybutton').addEventListener



function create_account(initial_amt){
    let amt=initial_amt;
    return{
        deposit:(new_amt)=>amt=amt+new_amt,
        withdraw:(new_amt)=>(new_amt>amt)? "insufficient balance":amt=amt-new_amt,
        get_balance:()=>amt,
    };
}

let acc=create_account(10000);
console.log(acc.get_balance());
console.log(acc.deposit(5000));
console.log(acc.get_balance());
console.log(acc.withdraw(16000));
console.log(acc.get_balance());

console.log("______________________________________________________________________________________________________________________________________________________________________")


//using IIFE to create a discount system...
const fixedDiscount = (function(){
    const discountRate=0.10;
    return function (productPrice) {
        return productPrice - productPrice * discountRate;
    };
})();

const productPrice=100;

console.log("fixed discount output");
console.log("product price:"+ productPrice);
console.log("Discount rate:10%" + productPrice);
console.log("discount rate:10%");
console.log("price after discount :" + fixedDiscount(productPrice));



//using closure to create a discount system 

function adjustableDiscount(){
    let discountRate = 0.10;//default 10% discount

    return{
        setDiscountRate:function(newRate){
            discountRate = newRate/100; //change to percentage
        },
        getDiscountRate: function(){
            return discountRate * 100; //convert to decimal 
        },
        calculateDiscountedPrice: function (productPrice) {
            return productPrice - productPrice * discountRate;
        }
    };
}

//adj. dis.
const discountSystem = adjustableDiscount();
console.log(" \nAdjustable Discount is:");
console.log("product price:" +productPrice);
discountSystem.setDiscountRate(15);//adjusting the diff. discount
console.log("discount rate adjusted to:" + discountSystem.getDiscountRate() + "%");
console.log("price after discount:" + discountSystem.calculateDiscountedPrice(productPrice));