function navMenu(){
    var navMenu = document.getElementById("navigationContainer");
    if($("#navigationContainer").width() != 250){
        if(localStorage.getItem("openMenu") == '' || localStorage.getItem("openMenu") == null){
            document.getElementById("navigationContainer").style.width = "250px";
            document.getElementById("app").style.width = String($("#app").width() - 250)+"px";
            document.getElementById("cover").style.width = String($("#cover").width() - 250)+"px";
            document.getElementById("cover").style.left = "291px";
            localStorage.setItem("Navbar_status","open");
            document.querySelector("#navIcon").classList.add("active_sbIcon");
        }else{
            document.getElementById(localStorage.getItem("openMenu")).style.width = "0px";
            document.getElementById("floatTools").style.left = localStorage.getItem("ft-left");
            document.getElementById("sideBar_titles").style.left = "10px";
            localStorage.removeItem("openMenu");
            document.querySelector(".active_sbIcon").classList.remove("active_sbIcon");
            setTimeout(()=>{
                document.querySelector("#navIcon").classList.add("active_sbIcon");
                document.getElementById("navigationContainer").style.width = "250px";
                document.getElementById("app").style.width = String($("#app").width() - 250)+"px";
                document.getElementById("cover").style.width = String($("#cover").width() - 250)+"px";
                document.getElementById("cover").style.left = "291px";
                localStorage.setItem("Navbar_status","open");
            }, 500);
        }
    }

    else{
        document.getElementById("navigationContainer").style.width = "0px";
        document.getElementById("app").style.width = String($("#app").width() + 250)+"px";
        document.getElementById("cover").style.width = String($("#cover").width() + 250)+"px";
        document.getElementById("cover").style.left = "41px";
        localStorage.removeItem("Navbar_status");
        document.querySelector("#navIcon").classList.remove("active_sbIcon");
    }
}


var submenus = document.querySelectorAll(".elsubmenu");
var sb_icons = document.querySelectorAll(".elmManage_icons");
sb_icons.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        if(icon.getAttribute("menuId") != "navigationContainer"){
            if((localStorage.getItem("openMenu") == '' || localStorage.getItem("openMenu") == null) && (localStorage.getItem("Navbar_status") == '' || localStorage.getItem("Navbar_status") == null)){
                localStorage.setItem("openMenu", icon.getAttribute("menuId"));
                document.getElementById(icon.getAttribute("menuId")).style.width = "300px";
                var ftLeft = localStorage.getItem("ft-left");
                ftLeft = ftLeft.replace("px", "");
                ftLeft = parseFloat(ftLeft);
                if(ftLeft < 310){
                    document.getElementById("floatTools").style.left = "310px";
                } 
                
                document.getElementById("sideBar_titles").style.left = "310px";
                icon.classList.add("active_sbIcon");
            }else if(localStorage.getItem("Navbar_status") == "open"){
                document.getElementById("navigationContainer").style.width = "0px";
                document.getElementById("app").style.width = String($("#app").width() + 250)+"px";
                document.getElementById("cover").style.width = String($("#cover").width() + 250)+"px";
                document.getElementById("cover").style.left = "41px";
                localStorage.removeItem("Navbar_status");
                document.querySelector("#navIcon").classList.remove("active_sbIcon");
                icon.classList.add("active_sbIcon");

                localStorage.setItem("openMenu", icon.getAttribute("menuId"));
                setTimeout(()=>{
                    document.getElementById(icon.getAttribute("menuId")).style.width = "300px";
                }, 500);
                var ftLeft = localStorage.getItem("ft-left");
                ftLeft = ftLeft.replace("px", "");
                ftLeft = parseFloat(ftLeft);
                if(ftLeft < 310){
                    document.getElementById("floatTools").style.left = "310px";
                } 
                
                document.getElementById("sideBar_titles").style.left = "310px";
            }else if(localStorage.getItem("openMenu") != icon.getAttribute("menuId")){
                document.getElementById(localStorage.getItem("openMenu")).style.width = "0px";
                // document.getElementById(icon.getAttribute("menuId")).style.width = "300px";
                document.querySelector(".active_sbIcon").classList.remove("active_sbIcon");
                setTimeout(()=>{
                    icon.classList.add("active_sbIcon");
                    document.getElementById(icon.getAttribute("menuId")).style.width = "300px";
                    localStorage.setItem("openMenu", icon.getAttribute("menuId"));
                }, 500);
            }else{
                document.getElementById(localStorage.getItem("openMenu")).style.width = "0px";
                document.getElementById("floatTools").style.left = localStorage.getItem("ft-left");
                document.getElementById("sideBar_titles").style.left = "10px";
                localStorage.removeItem("openMenu");
                icon.classList.remove("active_sbIcon");
            }
        }
    });
});


var ur_icons = document.querySelectorAll(".usermanage_icons");
ur_icons.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        if(icon.getAttribute("menuId") != "navigationContainer"){
            if((localStorage.getItem("openMenu") == '' || localStorage.getItem("openMenu") == null) && (localStorage.getItem("Navbar_status") == '' || localStorage.getItem("Navbar_status") == null)){
                localStorage.setItem("openMenu", icon.getAttribute("menuId"));
                document.getElementById(icon.getAttribute("menuId")).style.width = "300px";
                var ftLeft = localStorage.getItem("ft-left");
                ftLeft = ftLeft.replace("px", "");
                ftLeft = parseFloat(ftLeft);
                if(ftLeft < 310){
                    document.getElementById("floatTools").style.left = "310px";
                } 
                document.getElementById("sideBar_titles").style.left = "310px";
                icon.classList.add("active_sbIcon");
            }else if(localStorage.getItem("Navbar_status") == "open"){
                document.getElementById("navigationContainer").style.width = "0px";
                document.getElementById("app").style.width = String($("#app").width() + 250)+"px";
                document.getElementById("cover").style.width = String($("#cover").width() + 250)+"px";
                document.getElementById("cover").style.left = "41px";
                localStorage.removeItem("Navbar_status");
                document.querySelector("#navIcon").classList.remove("active_sbIcon");
                icon.classList.add("active_sbIcon");

                localStorage.setItem("openMenu", icon.getAttribute("menuId"));
                setTimeout(()=>{
                    document.getElementById(icon.getAttribute("menuId")).style.width = "300px";
                }, 500);
                var ftLeft = localStorage.getItem("ft-left");
                ftLeft = ftLeft.replace("px", "");
                ftLeft = parseFloat(ftLeft);
                if(ftLeft < 310){
                    document.getElementById("floatTools").style.left = "310px";
                } 
                document.getElementById("sideBar_titles").style.left = "310px";
            }else if(localStorage.getItem("openMenu") != icon.getAttribute("menuId")){
                document.getElementById(localStorage.getItem("openMenu")).style.width = "0px";
                localStorage.setItem("openMenu", icon.getAttribute("menuId"));
                document.querySelector(".active_sbIcon").classList.remove("active_sbIcon");
                setTimeout(()=>{
                    icon.classList.add("active_sbIcon");
                    document.getElementById(icon.getAttribute("menuId")).style.width = "300px";
                }, 500);
            }else{
                document.getElementById(localStorage.getItem("openMenu")).style.width = "0px";
                document.getElementById("floatTools").style.left = localStorage.getItem("ft-left");
                document.getElementById("sideBar_titles").style.left = "10px";
                localStorage.removeItem("openMenu");
                icon.classList.remove("active_sbIcon");
            }
        }
    });
});

