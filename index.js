var readlineSync = require('readline-sync');
var chalk = require('chalk');
let userName = readlineSync.question('What is your name ?');
let score =0;
console.log('Hello '+ chalk.green( userName) + ' welcome to my quiz ,let me see how much you know me !');

let questions=
[  
   {
     question: `
      Who is the founder of Roc8 Careers ?
      a. jeff bezoz
      b. Garry vee
      c. Tanay Pratap
      d. Swapnil Agarwal
     `,
    answer: 'd'
    },

  {
     question: `
      What is neogcamp ?
      a. social media
      b. Aloo bhujia bootcamp
      c. Web development bootcamp under Tanay's Mentorship
      d. jungle safari
     `,
    answer: 'c'
    },
   {
     question: `
      what to expect after neog camp ?
      a. 2x growth in salary
      b. Knowledge x100
      c. confidence level 9999
      d. All of the Above
     `,
    answer: 'd'
    },
    {
     question: `
      Who is Tanay pratp ?
      a. Cool dude
      b. Heavy programmer
      c. Best Mentor
      d. All of the above
     `,
    answer: 'd'
    },
    {
     question: `
      Who can join this bootcamp ?
      a. Min 2 yrs experience
      b. Rich people only 
      c. Anyone with interest in coding
      d. People with Alienware machine only
     `,
    answer: 'b'
    }
    
    ];

    let highScores =[

      { name:'jerry',
        score:'3'
      },
      {
        name:'Tom',
        score:'2'
      }


    ] ;

function quiz(question,answer)
{
  
  console.log(chalk.yellow(question));
  userAns= readlineSync.question();
  
 if (answer.toUpperCase()===userAns.toUpperCase()){
   console.log(chalk.green('Correct Answer , You got a point !'));
   score +=1;
   console.log(chalk.bgCyan('score = ',score));
 }
else {
  console.log(chalk.red('wrong answer , you need to spend more time with me'));
  console.log(chalk.blue( 'score = ' , score));
}


}


for(let  i=0 ;i<questions.length; i++){

  quiz(questions[i].question,questions[i].answer);
 
}

 let finalscore=score;
  console.log(chalk.bgRed('Quiz finished you scored ' + chalk.bgBlack(finalscore) + ' /4 points, ' ));

  console.log('-------------------');

  console.log(chalk.bgYellow('HighScores'));
  for(let i = 0 ;i<highScores.length;i++){
    console.log(chalk.green(highScores[i].name, ' score = ' + highScores[i].score));
  };