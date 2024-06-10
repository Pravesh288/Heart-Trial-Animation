const bodyE1= document.querySelector("body");
bodyE1.addEventListener("mousemove", (event)=>{
   const xPos= event.offsetX;
   const yPos= event.offsetY;
   const span1=document.createElement("span");
   span1.style.left= xPos+"px";
   span1.style.top=yPos+"px";
   const rSize= Math.random()*100;
   span1.style.height= rSize+"px";
   span1.style.width= rSize+"px";
   
  // bodyE1.insertBefore(span1, document.querySelector("script"));
  bodyE1.prepend(span1)
  setTimeout(
    ()=>{
        span1.remove();
    }, 3000
  );
}

);