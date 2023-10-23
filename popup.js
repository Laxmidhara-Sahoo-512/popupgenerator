let a=document.getElementById("popup");
setTimeout(() => {
    show();
}, 2000);
function show(){
    
    a.classList.add("active");
    
}
function rem(){
  a.classList.remove("active");
}