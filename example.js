
if(matchMedia('(max-width: 360px)').matches)
{
    const scoreE = document.getElementById('score');
    let score = 0;
    const grid = document.querySelector('.container');
    const boardWidth = 350;
    const boardHeight = 500;
    const blockWidth = 50;
    const blockHeight = 15;
    const userWidth = 60;
    const userHeight = 12;

    const currentPositionBall = [180, 40];
    let setCurrentPositionBall = currentPositionBall;

    const currentPositionUser = [145, 20];
    let setCurrentPositionUser = currentPositionUser;
    const diameterBall = 15;

    let xDirection = 2;
    let yDirection = 2;
    let timer;

    //Block class
    class Block{
        constructor(x, y)
        {
            this.bottomLeft = [x, y];
            this.bottomRight = [x + blockWidth, y];
            this.topLeft = [x, y + blockHeight];
            this.topRight = [x + blockWidth, y + blockHeight];
        }
    }

    //All my blocks
    const blocks = [
        new Block(10, 470),
        new Block(95, 470),
        new Block(195, 470),
        new Block(295, 470),
        new Block(10, 400),
        new Block(95, 400),
        new Block(195, 400),
        new Block(295, 400),
        new Block(10, 330),
        new Block(95, 330),
        new Block(195, 330),
        new Block(295, 330),
    ]

    //Draw block
    function drawBlock()
    {
        for(let i = 0; i < blocks.length; i++)
        {
            const block = document.createElement('div');
            block.classList.add('block');
            block.style.left = blocks[i].bottomLeft[0] + 'px';
            block.style.bottom = blocks[i].bottomLeft[1] + 'px';
            grid.appendChild(block);
        }
    }
    drawBlock();

    //draw ball
    function drawBall()
    {
        ball.style.left = setCurrentPositionBall[0] + 'px';
        ball.style.bottom = setCurrentPositionBall[1] + 'px';
    }
    const ball = document.createElement('div');
    ball.classList.add('ball');
    drawBall();
    grid.appendChild(ball);

    //move ball
    function moveBall()
    {
        if(setCurrentPositionBall[1] === 37)
        {
            console.log(setCurrentPositionBall[1])
        }
        
        console.log(setCurrentPositionUser[1])
        setCurrentPositionBall[0] += xDirection;
        setCurrentPositionBall[1] += yDirection;
        drawBall();
        colictionsBlocks();
    }

    timer = setInterval(moveBall, 30);

    //draw user
    function drawUser()
    {
        user.style.left = setCurrentPositionUser[0] + 'px';
        user.style.bottom = setCurrentPositionUser[1] + 'px';
    }
    const user = document.createElement('div');
    user.classList.add('user');
    drawUser();
    grid.appendChild(user);

    //coliction blocks
    function colictionsBlocks()
    {
        for(let i = 0; i < blocks.length; i++)
        {
            if(setCurrentPositionBall[0] > blocks[i].bottomLeft[0] && setCurrentPositionBall[0] < blocks[i].bottomRight[0] &&
                setCurrentPositionBall[1] + 15 > blocks[i].bottomLeft[1] &&
                setCurrentPositionBall[1] < blocks[i].topLeft[1])
            {
                changeDirection();
                const allBlocks = Array.from(document.querySelectorAll('.block'));
                allBlocks[i].classList.remove('block');
                blocks.splice(i, 1);
                score += 1;
                scoreE.innerText = score;
            }
        }
        if(blocks.length === 0)
        {
            scoreE.innerText = "You win"
        }
        if(setCurrentPositionBall[0] >= (boardWidth - diameterBall) || setCurrentPositionBall[1] >= (boardHeight - diameterBall) || setCurrentPositionBall[0] <= 0)
        {
            changeDirection();
        }
        if(setCurrentPositionBall[0] > setCurrentPositionUser[0] && setCurrentPositionBall[0] < (setCurrentPositionUser[0] + userWidth) && setCurrentPositionBall[1] === (setCurrentPositionUser[1] + userHeight))
        {
            changeDirection(true);
        }
        if(setCurrentPositionBall[1] === 0)
        {
            scoreE.innerText = "You loser";
            clearInterval(timer)
        }
    } 

    //changeDirection
    function changeDirection(userColi = false)
    {
        if(xDirection === 2 && yDirection === 2)
        {
            xDirection = -2;
            return;
        }
        if(xDirection === -2 && yDirection === 2)
        {
            yDirection = -2;
            return;
        }
        if(xDirection === -2 && yDirection === -2)
        {
            if(userColi)
        {
            yDirection = 2
            xDirection = 2
            return;
        }else{
            xDirection = 2;
            return;}
        }
        if(xDirection === 2 && yDirection === -2)
        {
            if(userColi)
        {
            yDirection = 2
            xDirection = 2
            return;
        }else{
            xDirection = -2;
            return;
        }
        }
        
    }

    //move User
    function goLeft()
    {
        if(setCurrentPositionUser[0] > 0)
        {
            setCurrentPositionUser[0] -= 10;
            drawUser();
            
        }
    }
    function goRight()
    {
        if(setCurrentPositionUser[0] < (boardWidth - userWidth))
        {
            setCurrentPositionUser[0] += 10;
            drawUser();
        }
    }
}