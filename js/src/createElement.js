initDraw(document.getElementById('app'));
var createElement = 'div';


function initDraw(canvas) {
    function setMousePosition(e) {
        var ev = e || window.event; //Moz || IE
        if (ev.pageX) { //Moz
            mouse.x = ev.pageX + window.pageXOffset;
            mouse.y = ev.pageY + window.pageYOffset;
        } else if (ev.clientX) { //IE
            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;
        }
    };

    var mouse = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0
    };
    var element = null;

    canvas.onmousemove = function (e) {
        setMousePosition(e);
        if (element !== null) {
            if(document.getElementById("navigationContainer").style.width == "0px"){
                element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
                element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
    
                element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x - 38 + 'px' : mouse.startX - 38 + 'px';
                element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y - 34 + 'px' : mouse.startY - 34 + 'px';
            }

            else if(document.getElementById("navigationContainer").style.width == "250px"){
                element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
                element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
    
                element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x - 288 + 'px' : mouse.startX - 288 + 'px';
                element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y - 34 + 'px' : mouse.startY - 34 + 'px';
            }
           
        }
    }

    canvas.onclick = function (e) {
        if (element !== null) {
            element = null;
            canvas.style.cursor = "default";
            console.log("finsihed.");
        } else {
            console.log("begun."); 
            mouse.startX = mouse.x;
            mouse.startY = mouse.y;
            element = document.createElement(createElement);
            element.className = 'genElm';
            element.style.left = (mouse.x - document.getElementById("app").getBoundingClientRect().left)+ 'px';
            element.style.top = (mouse.y - document.getElementById("app").getBoundingClientRect().top) + 'px';
            // console.log(typeof mouse.y)
            canvas.appendChild(element)
            canvas.style.cursor = "crosshair";
        }
    }
}
