// Steps: I need to declare variables to store data from the HTML document
var score=0;
var question_number=0;
const audio=document.getElementById("my-audio");




// pseudo code
//Steps create the all the structures

//step 1 startime - get the elements: title, the options 1,2,3,4
// activate the questopm numbers, 
function startTime()
{
   //question number and the last question is 10
   question_number=question_number+1;
   let title=document.getElementById("title");
   title.innerHTML="Level 0 Question "+ question_number;
   document.getElementByid("option1").disabled=false;
   document.getElementByid("option2").disabled=false;
   document.getElementByid("option3").disabled=false;
   document.getElementByid("option4").disabled=false;
   
   // call a function to activate the mechanics of generating a math question
    start_math_question();
    // A TIMER!!!!! DOES NOT EXIST in this level but it will be implemented in level 1 and 2
    // Function, maybe so javascript time function and then show the time
    
}
//******* timer


// create modular sections or function to better maintanance
// Step 2 start math question - function
function start_math_question()
{
   //generate an number that is used to generate an operator(-,+,*,/ 
   //Random 4 values because they 4 operators
    var operator = Math.ceil(Math.random()*4);
    
    //the first number will be generated from 1 to 12
    var number1 = Math.ceil(Math.random()*12);
    document.getElementById('num1').innerHTML=number1;
    //the second number will be generated from 1 to 12 - random
    var number2 = Math.ceil(Math.random()*12);
    document.getElementById('num2').innerHTML=number2;
    
    //selection the operator is 1/2/3/4
    // (1= Sum, 2=substract, 3=multiplication, 4= division)
    
    
    //1 sum 
    
    if(operator===1)
    {
        //first calculate the correct answer
        let correct_answer=number1+number2;
        document.getElementById('operator').innerHTML ="+";
        
        // generate dummy answers and show them on the screen - 4 variables wrong_answers1,2,3,4
        
        let wrong_answer1 = Math.ceil(Math.random() * 12)+Math.ceil(Math.random() * 12);
        let wrong_answer2 = Math.ceil(Math.random() * 12)+Math.ceil(Math.random() * 12);
        let wrong_answer3 = Math.ceil(Math.random() * 12)+Math.ceil(Math.random() * 12);
        let wrong_answer4 = Math.ceil(Math.random() * 12)+Math.ceil(Math.random() * 12);
        
        // send the number back and show them
        
        document.getElementById('option1').innerHTML= wrong_answer1;
        document.getElementById('option2').innerHTML= wrong_answer2;
        document.getElementById('option3').innerHTML= wrong_answer3;
        document.getElementById('option4').innerHTML= wrong_answer4;
        
        // merge the correct answer into one button from 4 possible options
        let correct_answer_button=Math.ceil(Math.random()*4);
        answer_option_id= "option" + correct_answer_button;
        document.getElementById(answer_option_id).innerHTML=correct_answer;
        
        //prevent the wrong answer being the correct answer
        
        if(wrong_answer1 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer2 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer3 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer4 === correct_answer)
        {
            start_math_question();
        }
    }
    //2-subtract
    if(operator===2)
    {
        //first calculate the correct answer
        let correct_answer=number1-number2;
        document.getElementById('operator').innerHTML ="-";
        
        //prevent negative number: if the answer is negative or zero
        //validation
        if(correct_answer<=0)
        {
            start_math_question();
        }
        
      if(correct_answer>=1)
      {
        // generate dummy answers and show them on the screen - 4 variables wrong_answers1,2,3,4 
        let wrong_answer1 = Math.ceil(Math.random() * 11);
        let wrong_answer2 = Math.ceil(Math.random() * 11);
        let wrong_answer3 = Math.ceil(Math.random() * 11);
        let wrong_answer4 = Math.ceil(Math.random() * 11);
        
        // send the number back and show them
        
        document.getElementById('option1').innerHTML= wrong_answer1;
        document.getElementById('option2').innerHTML= wrong_answer2;
        document.getElementById('option3').innerHTML= wrong_answer3;
        document.getElementById('option4').innerHTML= wrong_answer4;
        
        // merge the correct answer into one button from 4 possible options
        let correct_answer_button=Math.ceil(Math.random()*4);
        answer_option_id= "option" + correct_answer_button;
        document.getElementById(answer_option_id).innerHTML=correct_answer;
        
        //prevent the wrong answer being the correct answer
        
        if(wrong_answer1 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer2 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer3 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer4 === correct_answer)
        {
            start_math_question();
        }
      }  
    }
    //3-multiplication
    if(operator===3)
    {
        //first calculate the correct answer
        let correct_answer=number1*number2;
        document.getElementById('operator').innerHTML ="*";
        
        // generate dummy answers and show them on the screen - 4 variables wrong_answers1,2,3,4
        
        let wrong_answer1 = Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
        let wrong_answer2 = Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
        let wrong_answer3 = Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
        let wrong_answer4 = Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
        
        // send the number back and show them
        
        document.getElementById('option1').innerHTML= wrong_answer1;
        document.getElementById('option2').innerHTML= wrong_answer2;
        document.getElementById('option3').innerHTML= wrong_answer3;
        document.getElementById('option4').innerHTML= wrong_answer4;
        
        // merge the correct answer into one button from 4 possible options
        let correct_answer_button=Math.ceil(Math.random()*4);
        answer_option_id= "option" + correct_answer_button;
        document.getElementById(answer_option_id).innerHTML=correct_answer;
        
        //prevent the wrong answer being the correct answer
        
        if(wrong_answer1 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer2 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer3 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer4 === correct_answer)
        {
            start_math_question();
        }
    }
    //4- division
    if(operator===4)
    {
        //first calculate the correct answer
        let correct_answer=number1/number2;
        document.getElementById('operator').innerHTML ="/";
        
        // generate dummy answers and show them on the screen - 4 variables wrong_answers1,2,3,4
        
        let wrong_answer1 = Math.ceil(Math.random() * 12) / Math.ceil(Math.random() * 12);
        let wrong_answer2 = Math.ceil(Math.random() * 12) / Math.ceil(Math.random() * 12);
        let wrong_answer3 = Math.ceil(Math.random() * 12) / Math.ceil(Math.random() * 12);
        let wrong_answer4 = Math.ceil(Math.random() * 12) / Math.ceil(Math.random() * 12);
        
        // send the number back and show them
        
        document.getElementById('option1').innerHTML= wrong_answer1;
        document.getElementById('option2').innerHTML= wrong_answer2;
        document.getElementById('option3').innerHTML= wrong_answer3;
        document.getElementById('option4').innerHTML= wrong_answer4;
        
        // merge the correct answer into one button from 4 possible options
        let correct_answer_button=Math.ceil(Math.random()*4);
        answer_option_id= "option" + correct_answer_button;
        document.getElementById(answer_option_id).innerHTML=correct_answer;
        
        //prevent the wrong answer being the correct answer
        
        if(wrong_answer1 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer2 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer3 === correct_answer)
        {
            start_math_question();
        }
         if(wrong_answer4 === correct_answer)
        {
            start_math_question();
        }
    }
}






// Stepe 3 create a fucntion when the user selects and answers and then compare answers
// compare_answer()
function compare_answer(button_id)
{
    //The uses choose the correct answer and is given a 100 points
    
} 