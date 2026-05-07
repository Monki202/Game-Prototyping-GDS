var canvas;
var context;
var player;
var timer;
var interval = 1000/60;

var frictionX = 0.8;
var frictionY = 0.8;
var gravity = 1;

var w
var d
var a

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject(100,canvas.height/2,100,100,"#eeea1e");
platform0 = new GameObject();
platform0.width = 300;
platform0.y = player.y + player.height/2 + platform0.height/2;
platform0.color = "#2600ff";

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0,0,canvas.width,canvas.height);

    if (w && player.canJump)
    {
        player.canJump = false;
        player.vy += player.jumpSpeed;
    }

    doHandleAcceleration();
    doHandleFriction();
    doHandleGravity();
    doUpdatePosition();
    doCheckBottomBounds();

    while(platform0.hitTestPoint(player.bottom()) && player.vy >= 0)
    {
        player.y--;
        player.vy = 0;
        player.canJump = true;
    }

    // while(platform0.hitTestPoint(player.top()))
    // {
    //     player.y++;
    //     player.vy = 0;
    // }

    player.move();
    if (player.x > canvas.width + player.width/2)
    {
       // player.vx *= -1;
        player.color = "#40ff00";
    }
    if (player.x < 0 + player.width/2)
    {
       // player.vx = 2;
        player.color = "#ff0000";
    }
    if (player.y > canvas.height + player.height/2)
    {
        //player.vy *= -1;
        player.color = "#ff40b6";
    }
    if (player.y < 0 + player.height/2)
    {
       // player.vy = 2;
        player.color = "#0000ff";
    }

    player.jumpSpeed = -20

    player.drawCircle();
    player.drawDebug();
    platform0.drawRect();
}

function doHandleAcceleration()
{
    if (d)
    {
        player.vx += player.ax * player.force;
    }
    if (a)
    {
        player.vx += player.ax * -player.force;
    }
}

function doHandleFriction()
{
    player.vx *= frictionX;
}

function doHandleGravity()
{
    player.vy += gravity;
}

function doUpdatePosition()
{
    player.x += player.vx;
    player.y += player.vy;
}

function doCheckBottomBounds()
{
    if (player.y > canvas.height - player.height/2)
    {
        player.y = canvas.height - player.height/2;
        player.vy = 0;
        player.canJump = true;
    }
}

function doJump()
{
    if (w)
    {
        player.vy = player.jumpSpeed;
        
    }
}