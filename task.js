function fizzbuzz(num){

    if (num%3==0 && num%5==0){
        return "fizzbuzz"
    }
 
    else if(num%3 == 0){
          return "fizz"
    } 
 
    else if(num%5==0){
          return "buzz"
    }
    else{
       return "wrong"
    }
 } 
 
 console.log(fizzbuzz(15));
 console.log(fizzbuzz(6));
 console.log(fizzbuzz(11));
 
 
    
 let marks=50;
 
 switch(true){
    case marks>=90 && marks<=100:
       console.log("Very Good");
    break;   
 
    case marks>=70 && marks<90:
       console.log("Good");
    break;
    
    case marks>=50 && marks<70:
       console.log("Satisfied");
    break;
    
    case marks>=40 && marks<50:
       console.log("Not Satisfied");
    break;
    
    default:
       console.log("Failed");
 }