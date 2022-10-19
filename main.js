const navlinks=document.getElementById('#navLinks');
const menubtn=document.getElementsByClassName('.bi-list');
function showmenu(){
    navlinks.style.width="100%";
    navlinks.style.height="100vh";
}
function hidemenu(){
    navlinks.style.right="-100vw";
}
