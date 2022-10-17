$("#floatTools").draggable({
    cursor: "move",
    handle: $("#floatTools-dragHandle"),
    containment: $("#cover"),
    drag: ()=>{
        localStorage.setItem("ft-top", document.getElementById("floatTools").style.top);
        localStorage.setItem("ft-left", document.getElementById("floatTools").style.left);
    },
    stop: ()=>{
        var ft_left = document.getElementById("floatTools").style.left;
        var ft_top = document.getElementById("floatTools").style.top;
        // console.log(`Top: ${ft_top}, Left: ${ft_left}`);
        ft_left = ft_left.replace("px", "");
        ft_left = parseInt(ft_left);
        ft_top= ft_top.replace("px","");
        ft_top= parseInt(ft_top);

        var cover_width = $("#cover").width();
        var cover_height = $("#cover").height();

        var left_percent = (ft_left/cover_width)*100;
        document.getElementById("floatTools").style.left = String(left_percent)+"%";
        
        
        var top_percent= (ft_top/cover_height)*100;
        document.getElementById("floatTools").style.top= String(top_percent)+ "%";
        // console.log(`Top%: ${top_percent}, Left%: ${left_percent}`);
    }
});

// function ft_pxToper(){
//     // console.log("ft_pxToper Called");
//     var ft_left = document.getElementById("floatTools").style.left;
//     var ft_top = document.getElementById("floatTools").style.top;
//     // console.log(`Top: ${ft_top}, Left: ${ft_left}`);
//     ft_left = ft_left.replace("px", "");
//     ft_left = parseInt(ft_left);
//     ft_top= ft_top.replace("px","");
//     ft_top= parseInt(ft_top);

//     var cover_width = $("#cover").width();
//     var cover_height = $("#cover").height();

//     var left_percent = (ft_left/cover_width)*100;
//     document.getElementById("floatTools").style.left = String(left_percent)+"%";
    
    
//     var top_percent= (ft_top/cover_height)*100;
//     document.getElementById("floatTools").style.top= String(top_percent)+ "%";
//     // console.log(`Top%: ${top_percent}, Left%: ${left_percent}`);
// }

var elm_icons = document.querySelectorAll(".elmManage_icons");
elm_icons.forEach((elmIcon)=>{
    elmIcon.addEventListener("mouseover", ()=>{
        document.getElementById(elmIcon.getAttribute("val")).classList.add("displayTitle");
    });
});

elm_icons.forEach((elmIcon)=>{
    elmIcon.addEventListener("mouseout", ()=>{
        document.getElementById(elmIcon.getAttribute("val")).classList.remove("displayTitle");
    });
});

var user_icons = document.querySelectorAll(".usermanage_icons");
user_icons.forEach((elmIcon)=>{
    elmIcon.addEventListener("mouseover", ()=>{
        document.getElementById(elmIcon.getAttribute("val")).classList.add("displayTitle");
    });
});

user_icons.forEach((elmIcon)=>{
    elmIcon.addEventListener("mouseout", ()=>{
        document.getElementById(elmIcon.getAttribute("val")).classList.remove("displayTitle");
    });
});