console.log('Welcome to tic tac toe');

let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3");

let gameover = new Audio('gameover.mp3');

let turnInit = "X";
let gameovers = false;

const reset = document.querySelector('.btn');
// function to change the turn 
let changeTurn = () => {
 
    return turnInit === "X" ? "0" : "X";
}

// Function To check Win

const checkWin = () => {

    let boxtext = document.getElementsByClassName('boxtext');
    console.log(boxtext);
    let wins = [
     
        [0,1,2],
        [3,4,5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
]
    
    wins.forEach(e => {
    
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ''))
        {

            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
            gameovers = true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";

        }

})
    

}


// Game logic

let boxes = document.querySelectorAll(".box");


Array.from(boxes).forEach((element) =>
{
    let boxtext = element.querySelector('.boxtext');

    element.addEventListener('click', () =>
    {
        if (boxtext.innerText === '')
        {
            boxtext.innerText = turnInit;
            turnInit=changeTurn();
            turn.play();
            checkWin();

            if (!gameovers)
            {
                document.getElementsByClassName('info')[0].innerText = "Turn For" + turnInit;     
            }
           
        }
  })
});


// add onClick listener to reset button

reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
  
    Array.from(boxtext).forEach((element) => {
        

        element.innerText = "";
    })

    turnInit = "X";
   gameovers=false
        document.getElementsByClassName('info')[0].innerText = "Turn For" + turnInit;
    
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

})

