//selector
let root=document.querySelector(".root");

//variable
let num=2;
let fSize=20;
let interval= setInterval(addTable,5000);

function addTable(){
    let content="";
    let div=document.createElement("div");
    const color=Math.floor(Math.random()*16777215).toString(16);
    fSize+=3;

    for(let i=1;i<=10;i++){
        let temp=" ";
        let product=i*num;
        temp=temp+product.toString();
        content+=temp;
    }

    div.innerText=content;
    div.style.fontSize=`${fSize}px`;
    div.style.color=`#${color}`;
    root.appendChild(div);
    
    if(num==10){
        clearInterval(interval);
    }
    num++; 
}