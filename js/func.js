
// DOM
const widthGame = document.getElementById("widthGame");
const a = document.getElementById("a");

// LEVEL 
let easyLev = 100;
let mediumLev = 81;
let hardLev = 49;

let selectBox = document.querySelector(".cellBox");
 

// default grid 
for(let i = 1; i <= 49; i++)
{
    widthGame.innerHTML +=
    `
    <div class="cellBox">${i}</div>
    `
}

a.addEventListener('click' , function()
{    
    const level = document.getElementById("level").value;
    console.log(level);
    widthGame.innerHTML = '';
    let i = 1;

    if(level === 'easy')
    {
        widthGame.style.width = 1000 + "px";
        for(let i = 1; i <= easyLev; i++)
        {
            widthGame.innerHTML +=
            `
            <div class="cellBox">${i}</div>
            `
        }
    }

    else if(level === 'medium')
    {
        widthGame.style.width = 900 + "px";
        for(let i = 1; i <= mediumLev; i++)
        {
            widthGame.innerHTML +=
            `
            <div class="cellBox">${i}</div>
            `
        }
    }

    else
    {
        widthGame.style.width = 700 + "px";
        for(let i = 1; i <= hardLev; i++)
        {
            widthGame.innerHTML +=
            `
            <div class="cellBox">${i}</div>
            `
        }
    }
    
});