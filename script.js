let boxes=document.querySelectorAll(".box");
let reset=document.getElementById("reset-btn");
let msgcontainer=document.querySelector(".msg-container");
let winmsg=document.getElementById("winning-msg");
let newgame=document.getElementById("newgame-button");
let turnO=true;  //playerX playerO




// If any one of the player achieve any one below given pattern then that player is the winner
const winPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]
];

// Following Functionality writes X or O on the targeted button
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){ //player O turn
            box.innerText="O";
            box.style.color="#058E3F";
            turnO=false;
        }
        else{ //player X turn
            box.innerText="X";
            box.style.color="#1E2EDE";
            turnO=true;
        }
        buttoncount();
        box.disabled=true;
        checkWinner();
    })
});

// Following functionality checks all the winning pattern
const checkWinner=()=>{
    for (const pattern of winPattern) {
        let pos1Val=boxes[pattern[0]].innerText; //po1=O
        let pos2Val=boxes[pattern[1]].innerText; //0
        let pos3Val=boxes[pattern[2]].innerText; //0

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                showWinningMsg(pos1Val);
                count=0;
            }
        }
    }
};

// Dislay the winning msg
function showWinningMsg(winner){
    winmsg.innerText=`Congratulations ${winner} is the Winner!`;
    winmsg.style.color="#2274A5"
    msgcontainer.classList.remove("hide");
    disabledbutton();
};

let count=0;
function buttoncount(){
    count++;
    console.log(count);
    if(count==9){
        showTiemsg();
        count=0;
    }
}

// Display the tie msg
function showTiemsg(){
    winmsg.innerText="It's a Draw";
    winmsg.style.color=""
    msgcontainer.classList.remove("hide");
    disabledbutton();
    count=0;
}

// Disable the button after the winner is anounced
const disabledbutton=()=>{
    for (const box of boxes) {
        box.disabled=true;
    }
};

// enable the button for new game
const enablebutton=()=>{
    for (const box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};

// reset the game
const resetgame=()=>{
    turnO=true;
    enablebutton();
    msgcontainer.classList.add("hide");
    count=0;
};


newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);