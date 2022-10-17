var container = $("#container")[0];
let containerResize = new ResizeObserver(()=>{
    align();
    manage_ftLeft();
    //ft_pxToper();
});
containerResize.observe(container);


var app = $("#app")[0];
let appResize = new ResizeObserver(()=>{
    manage_ftLeft();
    document.getElementById("curr_width").innerHTML = document.getElementById("app").style.width;
    //ft_pxToper();
});
appResize.observe(app);

function manage_ftLeft(){
    var ftLeft = $("#floatTools").css("left");
    ftLeft = ftLeft.replace("px", "");
    ftLeft = parseFloat(ftLeft);

    var ftCon= $("#cover").width();
    // ftCon= ftCon.replace("px","");
    // ftCon= parseFloat(ftCon);

    if((ftLeft+100) > ftCon){
        document.getElementById("floatTools").style.left = String(ftCon - 100)+"px";
    }
}

