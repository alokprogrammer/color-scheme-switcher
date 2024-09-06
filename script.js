let buttons = document.querySelectorAll(".btn");
let body = document.querySelector("body");

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener("click", function(e){
    // console.log(e);
    // console.log(e.target);

    if (e.target.id === "blue") {
        body.style.backgroundColor = "blue";
    }

    if (e.target.id === "red") {
      body.style.backgroundColor = "red";
    }
    if (e.target.id === "purple") {
    body.style.backgroundColor = "purple";
     }
    if (e.target.id === "yellow") {
    body.style.backgroundColor = "yellow";
    }
    
    
  })
  
});