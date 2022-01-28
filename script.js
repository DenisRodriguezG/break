/*const container = document.querySelector('.container');
const userPsotion = document.createElement('div');
const ballMove = document.createElement('div');
let userNavegation = [];
let ballPosition = [];
let xPosition = 2;
let yPosition = 2;
if(matchMedia('(max-width: 769px)').matches)
{
    ballPosition = [180, 34];
    userNavegation = [20, 140];
}
else
{
    userNavegation = [20, 228];
    ballPosition = [280, 50];
}
let increment = 5;
userPsotion.classList.add('user');
userPsotion.style.left = userNavegation[1] + "px";
userPsotion.style.bottom = userNavegation[0] + 'px';
container.appendChild(userPsotion);

ballMove.classList.add('ball');
const ballP = () => {
ballMove.style.left = ballPosition[0] + 'px';
ballMove.style.bottom = ballPosition[1] + 'px';
console.log(ballPosition[0])
}
ballP();
container.appendChild(ballMove);
class Blocks{
    constructor(yPoint, xPoint)
    {
        this.yPoint = yPoint;
        this.xPoint = xPoint;
    }
}
    console.log(matchMedia('(max-width: 769px)').matches)
    if(matchMedia('(max-width: 769px)').matches)
{
    const blocks = [
        new Blocks(10, 10),
        new Blocks(10, 100),
        new Blocks(10, 200),
        new Blocks(10, 290),
        new Blocks(80, 10),
        new Blocks(80, 100),
        new Blocks(80, 200),
        new Blocks(80, 290)
    ]
    for(let i = 0; i < blocks.length; i++)
    {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].xPoint + "px";
        block.style.top = blocks[i].yPoint + 'px';
        container.appendChild(block);
    }
}
else
{
    const blocks = [
        new Blocks(10, 50),
        new Blocks(10, 190),
        new Blocks(10, 320),
        new Blocks(10, 450),
        new Blocks(80, 50),
        new Blocks(80, 190),
        new Blocks(80, 320),
        new Blocks(80, 450)
    ]
    for(let i = 0; i < blocks.length; i++)
{
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.left = blocks[i].xPoint + "px";
    block.style.top = blocks[i].yPoint + 'px';
    container.appendChild(block);
}
}

const moveBall = () => {
    ballPosition[0] += xPosition;
    ballPosition[1] += yPosition;
    ballP();
}

const goLeft = () => {
    
    userNavegation[1] === 0 ? userNavegation[1] : userNavegation[1]-=5;
    userPsotion.style.left = userNavegation[1] + 'px';
    console.log(userNavegation[1]);
}

const goRight = () => {
        userNavegation[1] == 275 ?  userNavegation[1] : userNavegation[1]+=5
        userPsotion.style.left =  userNavegation[1] + 'px';
    console.log(userNavegation)
}
setInterval(() => {
    moveBall();
}, 100);

function changeDirection()
{
  if(ballPosition[0] === 562)
  {
    yPosition = -2;
    return;
  }
}
changeDirection()*/

/*const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score');
const blockWidth = 100;
const blockHeight = 20;
const ballDiameter = 20;
const boardWidth = 560;
const boardHeight = 300;
let xDirection = -2;
let yDirection = 2;

const userStart = [230, 10];
let currentPosition = userStart;

const ballStart = [270, 40];
let ballCurrentPosition = ballStart;

let timerId;
let score = 0;

class Block
{
    constructor(xAxis, yAxis)
    {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis, yAxis];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
        this.topLeft = [xAxis, yAxis + blockHeight];
    }
}

//all my blocks
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
  ]

function addBlock()
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

addBlock();

//add user
const user = document.createElement('div');
user.classList.add('user');
grid.appendChild(user);
drawUser();

//add ball
const ball = document.createElement('div');
ball.classList.add('ball');
grid.appendChild(ball);
drawBall();

//move user
function moveUser(e)
{
    switch(e.key)
    {
        case 'ArrowLeft':
            if(currentPosition[0] > 0)
            {
                currentPosition[0] -= 10;
                console.log(currentPosition[0])
                drawUser();
            }
            break;
        case 'ArrowRight':
            if(currentPosition[0] < (boardWidth - blockWidth))
            {
                currentPosition[0] += 10;
                console.log(currentPosition[0])
                drawUser();
            }
            break;
    }
}

document.addEventListener('keydown', moveUser);

//draw User
function drawUser()
{
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}

//draw ball
function drawBall()
{
    ball.style.left = ballCurrentPosition[0] + 'px';
    ball.style.bottom = ballCurrentPosition[1] + 'px';
}

//move ball
function moveBall()
{
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall()
    checkForCollisions();
}
timerId = setInterval(moveBall, 30);

//check for collisions
function checkForCollisions()
{
     //check for block collision
  for (let i = 0; i < blocks.length; i++){
    if
    (
      (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
      ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1]) 
    )
      {
      const allBlocks = Array.from(document.querySelectorAll('.block'))
      allBlocks[i].classList.remove('block')
      blocks.splice(i,1)
      changeDirection()   
      score++
      scoreDisplay.innerHTML = score
      if (blocks.length == 0) {
        scoreDisplay.innerHTML = 'You Win!'
        clearInterval(timerId)
        document.removeEventListener('keydown', moveUser)
      }
    }
  }
  // check for wall hits
  if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || ballCurrentPosition[0] <= 0 || ballCurrentPosition[1] >= (boardHeight - ballDiameter))
  {
    changeDirection()
  }

  //check for user collision
  if
  (
    (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
    (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight ) 
  )
  {
    changeDirection()
  }

  //game over
  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerId)
    scoreDisplay.innerHTML = 'You lose!'
    document.removeEventListener('keydown', moveUser)
  }
}

function changeDirection ()
{
    if(xDirection === 2 && yDirection === 2)
    {
        yDirection = -2;
        return;
    }
    if(xDirection === 2 && yDirection === -22)
    {
        xDirection = -2;
        return;
    }
    if(xDirection === -2 && yDirection === -2)
    {
        yDirection = 2;
        return;
    }
    if(xDirection === -2 && yDirection === 2)
    {
        xDirection = 2;
        return;
    }
}
/*const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
const blockWidth = 100
const blockHeight = 20
const ballDiameter = 20
const boardWidth = 560
const boardHeight = 300
let xDirection = -2
let yDirection = 2

const userStart = [230, 10]
let currentPosition = userStart

const ballStart = [270, 40]
let ballCurrentPosition = ballStart

let timerId
let score = 0

//my block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis]
    this.bottomRight = [xAxis + blockWidth, yAxis]
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    this.topLeft = [xAxis, yAxis + blockHeight]
  }
}

//all my blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
]

//draw my blocks
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0] + 'px'  
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'  
    grid.appendChild(block)
    console.log(blocks[i].bottomLeft)
  }
}
addBlocks()

//add user
const user = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)
drawUser()

//add ball
const ball = document.createElement('div')
ball.classList.add('ball')
grid.appendChild(ball)
drawBall()

//move user
function moveUser(e) {
  switch (e.key) {
    case 'ArrowLeft':
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10
        console.log(currentPosition[0] > 0)
        drawUser()   
      }
      break
    case 'ArrowRight':
      if (currentPosition[0] < (boardWidth - blockWidth)) {
        currentPosition[0] += 10
        console.log(currentPosition[0])
        drawUser()   
      }
      break
  }
}
document.addEventListener('keydown', moveUser)

//draw User
function drawUser() {
  user.style.left = currentPosition[0] + 'px'
  user.style.bottom = currentPosition[1] + 'px'
}

//draw Ball
function drawBall() {
  ball.style.left = ballCurrentPosition[0] + 'px'
  ball.style.bottom = ballCurrentPosition[1] + 'px'
}

//move ball
function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions()
}
timerId = setInterval(moveBall, 30)

//check for collisions
function checkForCollisions() {
  //check for block collision
  for (let i = 0; i < blocks.length; i++){
    if
    (
      (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
      ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1]) 
    )
      {
      const allBlocks = Array.from(document.querySelectorAll('.block'))
      allBlocks[i].classList.remove('block')
      blocks.splice(i,1)
      changeDirection()   
      score++
      scoreDisplay.innerHTML = score
      if (blocks.length == 0) {
        scoreDisplay.innerHTML = 'You Win!'
        clearInterval(timerId)
        document.removeEventListener('keydown', moveUser)
      }
    }
  }
  // check for wall hits
  if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || ballCurrentPosition[0] <= 0 || ballCurrentPosition[1] >= (boardHeight - ballDiameter))
  {
    changeDirection()
  }

  //check for user collision
  if
  (
    (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
    (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight ) 
  )
  {
    changeDirection()
  }

  //game over
  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerId)
    scoreDisplay.innerHTML = 'You lose!'
    document.removeEventListener('keydown', moveUser)
  }
}


function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2
    return
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2
    return
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2
    return
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2
    return
  }
}*/
