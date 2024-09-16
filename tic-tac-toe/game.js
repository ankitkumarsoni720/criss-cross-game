let boxes=document.querySelectorAll(".box");

let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector(".newbtn");
let msg=document.querySelector("#msg");
let turn=document.querySelector(".turn");
let msgcontainer=document.querySelector(".msgcontainer");
let turno=true;  //playerX ,playerO
let count=0;
let winpattern=[[0,1,2],[0,3,6],[0,4,8],
           [1,4,7],[2,5,8],[2,4,6],
             [3,4,5],[6,7,8]];
             
 const resetgame=()=>{
    turno=true;
    enabledboxes();
    count=0;
    msg.classList.add("hide");
    turn.classList.add("hide2");
   }   ;    
      
             
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       if(turno){
        box.innerText="O";
       turnfun(turno);
       turno=false;
        }
    
        else{
            
            box.innerText="X";
            turnfun(turno);
            turno=true;
        }
        box.disabled=true;
        count++;
        
        let isWinner=checkwinner();

        if (count === 9 && !isWinner) {
            gameDraw();}

        
    });
    
});
const turnfun=(a)=>{
    if(a===true){
        turn.innerText="Now  'X' turn";
        turn.classList.remove("hide2");
    }
    else{
        turn.innerText="Now 'O' turn";
        turn.classList.remove("hide2");

    }
}
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
       
    }
}
const gameDraw=()=>{
    msg.textContent=`Match tied`;
     msg.classList.remove("hide");
     disabledboxes();
}

const showwinner=(winner)=>{
    
    msg.textContent=`Congratullation ! winner is ${winner}`;
    msg.classList.remove("hide");
    turn.classList.add("hide2");
 disabledboxes();
};
const checkwinner=()=>{
    for(let pattern of winpattern){
        
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern////[2]].innerText);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !=="" && pos2val !== ""&& pos3val !== ""){

            if(pos1val === pos2val &&pos2val === pos3val &&pos3val===pos1val){
               
                showwinner(pos1val);
            }
        }
      
          
            
        
        
    }
};
newbtn.addEventListener("click",resetgame) ;  
resetbtn.addEventListener("click",resetgame) ;  