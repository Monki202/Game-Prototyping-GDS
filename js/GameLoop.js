var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d")

var interval = 1000/60
var timer = setInterval(animate, interval);

var colors = [];
colors[0] = "#ff0000";
colors[1] = "#00ff00";
colors[2] = "#0000ff";

var amt = 50;

dots.vx = 10;
dots.vy = 10;

var dots = [];
for(var i = 0; i < amt; i++)
{
    dots[i] = new GameObject();
    dots[i].x = Math.random() * canvas.width;
    dots[i].y = Math.random() * canvas.height;
    dots[i].color = colors[Math.floor(rand(0,2.9))];
    dots[i].width = rand(5,20);
}

function animate()
{
    context.clearRect(0,0,canvas.clientWidth,canvas.height);

    for(var i = 0; i < amt; i++)
    {
        dots[i].drawCircle();
    }

    dots.move();


}

function rand(low, high)
{
    return Math.random() * (high - low) + low;
}