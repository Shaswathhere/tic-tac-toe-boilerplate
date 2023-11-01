const Element=document.querySelectorAll(".box");
var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
var xAttempt = [];
var oAttempt = [];
var click=0;
var wonTheGame = 0;
const message= document.getElementById("message");
const restart=document.getElementById("button");
const gameResult=document.getElementById("result");

// Iteration 2: Onclick function
Element.forEach(box=>{

    box.onclick  = handleClick;
})
function handleClick(e){
    
    const i=e.target.getAttribute('id'); 
    const text = document.createElement('p');
    text.setAttribute('id','text'); 
    Element[i-1].appendChild(text);
    console.log(Element[i-1]);
    if(click%2 == 0){
        xAttempt.push(parseInt(i-1));
        
        text.innerHTML="X"; 
        text.style.color = '#FAB201';
        result(winningCombinations,xAttempt,"X");
    }
    else{
        oAttempt.push(parseInt(i-1));
        
        text.innerHTML="O";
        text.style.color = '#FAB201';
        result(winningCombinations,oAttempt,"O");
    }
    click++;
    if(click == 9 && wonTheGame == 0){ 
            gameResult.style.visibility="visible";
            message.innerHTML = " Match Drawn ";
    }
}

// Iteration 3: Result function
function result(winningCombinations, attempts, player){
    let flag = 0;
    let checker = [];
    for (var i = 0; i < winningCombinations.length; i++) {
        
        if (Array.isArray(winningCombinations[i])){
                                                   
            result(winningCombinations[i],attempts,player);
        }else{
            if(attempts.includes(winningCombinations[i])){ 
                checker.push(true); 
                flag++;
            } else {
                checker.push(false)
            }
        }
    }
    if (checker.every(check => check === true)&&flag>2){
            gameResult.style.visibility="visible";
            message.innerHTML ="'"+ player +"'" + " Won the game ";  
            wonTheGame=1;   
    }
}

// Iteration 4: Restart function

restart.onclick=()=>{ 
    location.reload();
}

