//Shree Ganeshaye Namah
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const thr = document.querySelector(".three");
const roc = document.querySelector(".rock");
const pap = document.querySelector(".paper");
const sci = document.querySelector(".scissor");
const btn = document.querySelector(".button");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function cbtn(){
    btn.style.display="none";
    sleep(2000).then(() => { thr.style.display="flex"; });
    
    sleep(4000).then(() => {thr.style.display="none"; two.style.display="flex"; });
    
    sleep(6000).then(() => {two.style.display="none"; one.style.display="flex"; });

    sleep(8000).then(() => { one.style.display="none";});
    const x =getRandomInt(3);
    if(x==0){
        sleep(8000).then(() => { roc.style.display="flex";});
        sleep(10000).then(() => { roc.style.display="none"; btn.style.display="flex";});
        
    }
    else if(x==1){
        sleep(8000).then(() => { pap.style.display="flex";});
        sleep(10000).then(() => { pap.style.display="none"; btn.style.display="flex";});
    }
    else if(x==2){
        sleep(8000).then(() => { sci.style.display="flex";});
        sleep(10000).then(() => { sci.style.display="none"; btn.style.display="flex";});
    } 
}



