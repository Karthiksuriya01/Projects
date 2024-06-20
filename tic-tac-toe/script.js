const boxes = document.querySelectorAll('.box');
const resetgame = document.querySelector('.reset');
const win = document.getElementById('winner');

resetgame.onclick = resetg;

const displayWinner = (winner) =>
{
    win.innerText = `Congratulations 🥳 "${winner}" you are the winner`
    for(let box of boxes)
    {
        box.disabled = true;
    }
}


function resetg()
{
    for(let box of boxes)
    {
        box.innerText = ""
        box.disabled = false;
    }
    turn = true;
    win.innerText = "";
    win.style.display = "block";
}

let turn = true;

const wpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



boxes.forEach((box)=>
{
    box.addEventListener('click', ()=> {
        if(turn)
        {
            box.innerText = "X";
            turn = false;
            console.log(turn);
        }
        else if(!turn)
        {
            box.innerText = "O";
            turn = true;
            console.log(turn)
        }
        box.disabled = true;
        checkWinner();

    })
})

const checkWinner = () =>
{
    for (let pattern of wpatterns)
    { 
        console.log(pattern[0],pattern[1],pattern[2])

        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if((p1!= "") && (p2 != "") && (p3 != ""))
        {
            if((p1 === p2) && (p2 === p3))
            {
                displayWinner(p1);
            }
        }


    }
}
