//set variables
let Q1 = document.getElementById("Question-1")
let Q2 = document.getElementById("Question-2")
let Q3 = document.getElementById("Question-3")
let Q4 = document.getElementById("Question-4")
let Q5 = document.getElementById("Question-5")
let Q6 = document.getElementById("Question-6")
let Q7 = document.getElementById("Question-7")
let result = document.getElementById("Outcome")

//HTML CSS VARIABLES



    



document.getElementById("EnterFinal-btn").addEventListener("click", MarkQuiz)

function MarkQuiz(){

    //QUESTION 1
    //INPUT
    let CI1 = document.getElementById("CI-1")
    console.log(CI1)

    let Img1 = document.getElementById("Q1img")
    console.log(Img1)

let Q1Response = document.getElementById("Q1-response")

let Q1R = document.getElementById("Q1-response").value
    console.log(Q1R)

    Q1R = Q1R.toLowerCase();
console.log(Q1R.toLowerCase())
    

if(Q1R == "thor")
    {
        CI1.innerHTML = "CORRECT";
        Img1.style.border = '5px solid green';
        Q1Response.style.border = '3px solid green';
        CI1.style.color = 'green';
} 
    else{
        CI1.innerHTML = "INCORRECT";
        Img1.style.border = '3px solid red';
        Q1Response.style.border = '3px solid red';
        CI1.style.color = 'red';

    }

//QUESTION 2
let CI2 = document.getElementById("CI-2")
    console.log(CI2)

let Q2Response = document.getElementById("Q2-response")

let Q2R = document.getElementById("Q2-response").value
    console.log(Q2R)

    Q2R = Q2R.toLowerCase();
console.log(Q2R.toLowerCase())
    

if(Q2R == "thanos")
    {
        CI2.innerHTML = "CORRECT";
        Q2Response.style.border = '3px solid green';
        CI2.style.color = 'green';
} 
    else{
        CI2.innerHTML = "INCORRECT";
        Q2Response.style.border = '3px solid red';
        CI2.style.color = 'red';

    }

    //QUESTION 3

    let CI3 = document.getElementById("CI-3")
    console.log(CI3)

    let Img3 = document.getElementById("Q3img")
    console.log(Img3)

let Q3Response = document.getElementById("Q3-response")

let Q3R = document.getElementById("Q3-response").value
    console.log(Q1R)

    Q3R = Q3R.toLowerCase();
console.log(Q3R.toLowerCase())
    

if(Q3 == "kang" || "kang the conqueror")
    {
        CI3.innerHTML = "CORRECT";
        Img3.style.border = '5px solid green';
        Q3Response.style.border = '3px solid green';
        CI3.style.color = 'green';
} 
    else{
        CI3.innerHTML = "INCORRECT";
        Img3.style.border = '3px solid red';
        Q3Response.style.border = '3px solid red';
        CI3.style.color = 'red';

    }

    //QUESTION 4
let CI4 = document.getElementById("CI-4")


let Q4Response = document.getElementById("Q4-response")

let Q4R = document.getElementById("Q4-response").value


Q4R = Q4R.toLowerCase();

if(Q4R == "proffesor x" || "charles xavier" || "charles francis xavier")
{
    CI4.innerHTML = "CORRECT";
    Q4Response.style.border = '3px solid green';
    CI4.style.color = 'green';
} 
else{
    CI4.innerHTML = "INCORRECT";
    Q4Response.style.border = '3px solid red';
    CI4.style.color = 'red';

}


 //QUESTION 5
 let CI5 = document.getElementById("CI-5")


 let Q5Response = document.getElementById("Q5-response")
 
 let Q5R = document.getElementById("Q5-response").value
 
 
 Q5R = Q5R.toLowerCase();
 
 if(Q5R == "6")
 {
     CI5.innerHTML = "CORRECT";
     Q5Response.style.border = '3px solid green';
     CI5.style.color = 'green';
 } 
 else{
     CI5.innerHTML = "INCORRECT";
     Q5Response.style.border = '3px solid red';
     CI5.style.color = 'red';
 
 }
 

 //QUESTION 6
 let CI6 = document.getElementById("CI-6")


 let Q6Response = document.getElementById("Q6-response")
 
 let Q6R = document.getElementById("Q6-response").value
 
 
 Q6R = Q6R.toLowerCase();
 
 if(Q6R == "toxin")
 {
     CI6.innerHTML = "CORRECT";
     Q6Response.style.border = '3px solid green';
     CI6.style.color = 'green';
 } 
 else{
     CI6.innerHTML = "INCORRECT";
     Q6Response.style.border = '3px solid red';
     CI6.style.color = 'red';
 
 }

//QUESTION 7

let CI7 = document.getElementById("CI-7")


let Img7 = document.getElementById("Q7img")


let Q7Response = document.getElementById("Q7-response")

let Q7R = document.getElementById("Q7-response").value


Q7R = Q7R.toLowerCase();

if(Q7R == "nova")
{
    CI7.innerHTML = "CORRECT";
    Img7.style.border = '5px solid green';
    Img7.src = "img/nova.jpg"
    Q3Response.style.border = '3px solid green';
    CI7.style.color = 'green';

} 
else{
    CI7.innerHTML = "INCORRECT";
    Img7.style.border = '3px solid red';
    Q7Response.style.border = '3px solid red';
    CI7.style.color = 'red';

}

    
    

    // if(Q2 == "Thanos"){
        
    // } 

    // if(Q3 == "Kang" || "Kang The Conqueror"){
        
    // }

    // if(Q4 == "Proffesor X" || "Charles Xavier" || "Charles Francis Xavier"){
        
    // }

    // if(Q5 == "6"){
        
    // }

    // if
    // (Q6 == "Btn3"){
        
    // }  
    
    // if(Q7 == "Nova"){
        
    
}
