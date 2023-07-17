const lineup=document.querySelector(".slider input");
const numb=document.querySelector(".num");
const power=document.querySelector(".str");
const indi=document.querySelector(".indicator");
const options=document.querySelectorAll(".option input")
const buton=document.querySelector("#butt");
const texty=document.querySelector(".place input")
const char={
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbol: "`~!@#$%^&*()_-+=[]{}';:|/?.>,<"

}
indi.style.backgroundColor="#EBC400";
power.style.color="#EBC400";
lineup.addEventListener("input",()=>{
    numb.innerText=lineup.value;

    if(lineup.value<10)
{
    power.innerText="Weak";
    power.style.color="#EB2400";
    indi.style.backgroundColor="#EB2400";
}
else if(lineup.value>=10 && lineup.value<20)
{
    power.innerText="Medium";
    power.style.color="#EBC400";
    indi.style.backgroundColor="#EBC400";
}
else{
    power.innerText="Strong";
    power.style.color="#00E061";
    indi.style.backgroundColor="#00E061";
}
})

power.style.color="#EBC400";

const generatePassword=()=>{
    random="";
    static="";
    let lenValue=lineup.value;
    
  //now check for checked
    options.forEach(option => {
        
       if(option.checked){
          option.style.backgroundColor="red";
         static+=char[option.id];
       }
  });
  
  // now giving password to appropriate size;
  for(let i=0;i<lenValue;i++){
       let randomChar= static[Math.floor(Math.random()*static.length)];
       random+=randomChar;
  }
   texty.value=random;
}

 buton.addEventListener("click",generatePassword);

 

