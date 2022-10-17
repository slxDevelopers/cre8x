var createElement = 'div';



var canvas = document.getElementById('app');

var mouse = {
    x: 0,
    y: 0,
    initX: 0,
    initY: 0
}

var temp = null;

function create(canvas){
    canvas.addEventListener('dblclick', (e)=>{
        canvas.style.cursor = "crosshair";
        mouse.x = e.pageX;
        mouse.y = e.pageY;
        mouse.initX = mouse.x;
        mouse.initY = mouse.y;
        
        temp = document.createElement(createElement);
        temp.classList.add("newElm");
        temp.style.left = e.pageX + "px";
        temp.style.top = e.pageY + "px";
        canvas.appendChild(temp);
    });
    
    canvas.addEventListener('mousemove', (e)=>{
        if(temp !== null){
            mouse.x = e.pageX;
            mouse.y = e.pageY;
            temp.style.height = Math.abs(mouse.y - mouse.initY) + "px";
            temp.style.width = Math.abs(mouse.x - mouse.initX) + "px";
            temp.style.left = (mouse.x - mouse.initX < 0) ? mouse.x + "px" : mouse.initX + 'px';
            temp.style.top = (mouse.y - mouse.initY < 0) ? mouse.y + "px" : mouse.initY + 'px';
        }
    });
    
    canvas.addEventListener('click', (e)=>{
        canvas.style.cursor = "default";
        temp = null;
    });
}


create(canvas);