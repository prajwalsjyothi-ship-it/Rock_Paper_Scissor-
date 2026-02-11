let userscore=0;
let computerscore=0;
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const usescorepara=document.querySelector("#your-score");
const cmpscorepara=document.querySelector("#computer-score");
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];

}
const showwinner=(userwin,userchoice,cmpchoice)=>{
    if(userwin){
        userscore++;
        usescorepara.innerText=userscore;
        msg.innerText=`You win! ${userchoice} beats ${cmpchoice}`;
        msg.style.backgroundColor="#d3a117";
    }
    else{
        computerscore++;
        cmpscorepara.innerText=computerscore;
        msg.innerText=`You lose! ${cmpchoice} beats ${userchoice}`;
        msg.style.backgroundColor="#eb0606";
    }
};
const draw=()=>{
    msg.innerText="Its a draw!";
    msg.style.backgroundColor="#081313";
};
const playgame=(userchoice)=>{
    const cmpchoice=gencompchoice();
    if(userchoice===cmpchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin= cmpchoice==="scissors"? true:false;
        }
        else if(userchoice==="paper"){
            userwin= cmpchoice==="rock"? true:false;
        }
        else{
            userwin= cmpchoice==="paper"? true:false;
            }
            showwinner(userwin,userchoice,cmpchoice);
        }
};

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const choiceid = choice.getAttribute("id");
        playgame(choiceid);
    });
});