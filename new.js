 'use strict'

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = '🥳Correct number!');

// console.log(document.querySelector('.number').textContent = 23);
// document.querySelector('.guess').value = 20;

//  console.log(document.querySelector('.guess').value );

let secretNumber=Math.trunc(Math.random() * 20) + 1;
let score=20;
let highScore=0;
document.querySelector('.message').textConten='Start guessing...';
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
// when there is no input
    if(!guess){
       // document.querySelector('.message').textContent='💫 no number';
       displayMessage('💫 no number');
    }
    //when player win
    else if(secretNumber === guess){
        document.querySelector('.message').textContent='🎉 correct number';
        document.querySelector('.number').textContent = secretNumber; 
        score++;
        document.querySelector('.score').textContent=score;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score > highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }
    // when guess is not equal to the secret number
    else if(secretNumber !== guess){
        if(score > 1){
            
        
         //   document.querySelector('.message').textContent= guess > secretNumber ?'🤷‍♂️ too high number':'🤷‍♂️ too low number';
            displayMessage(guess > secretNumber ?'🤷‍♂️ too high number':'🤷‍♂️ too low number');
            score--;
            document.querySelector('.score').textContent=score;
             }
             else{
                // document.querySelector('.message').textContent='🎇you lost the game';
                displayMessage('🎇you lost the game');
                 document.querySelector('.score').textContent=0;
                 document.querySelector('body').style.backgroundColor='#ff0000';
                 document.querySelector('.number').style.width='50rem';
             }
    }
        
    
    //when guess is too high
//     else if(secretNumber < guess){
//         if(score > 0){
            
        
//        document.querySelector('.message').textContent='🤷‍♂️ too high number';
//        score--;
//        document.querySelector('.score').textContent=score;
//         }
//         else{
//             document.querySelector('.message').textContent='🎇you lost the game'
//             document.querySelector('.score').textContent=0;
//         }
//     }
// // when guess is too low
//     else if(secretNumber > guess){
//         if(score > 0){
            
        
//             document.querySelector('.message').textContent='🤷‍♂️ too low number';
//             score--;
//             document.querySelector('.score').textContent=score;
//              }
//              else{
//                  document.querySelector('.message').textContent='🎇you lost the game'
//                  document.querySelector('.score').textContent=0;
//              }
//             }

           
}); 

document.querySelector('.again').addEventListener('click', function()
{

 secretNumber=Math.trunc(Math.random() * 20) + 1;
 score=20;
//document.querySelector('.message').textContent='Start guessing...';
displayMessage('Start guessing...');
 document.querySelector('.score').textContent=score;
 document.querySelector('.number').textContent='?';
document.querySelector('.guess').value='';

document.querySelector('.number').style.width='15rem';
document.querySelector('body').style.backgroundColor='#222';
    });

// //document.querySelector('.again').addEventListener('click', function () {
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
  
 //    document.querySelector('.message').textContent = 'Start guessing...';
   // displayMessage('Start guessing...');
  //  document.querySelector('.score').textContent = score;
   // document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';
  
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';
//   });