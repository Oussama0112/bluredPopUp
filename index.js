document.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("btn")) {
    const r = e.target.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    e.target.style.setProperty("--tran-or", `${x}px ${y}px`);
  }
});
//------------------------------------------------------------------
//----------------------------------main events--------------
const signBtn = document.querySelector(".signbtn"),
  joinBtn = document.querySelector(".joinbtn"),
  exitBtn = document.querySelector(".exit"),
  popUp = document.querySelector(".popUp");

signBtn.addEventListener("click", function () {
  this.parentElement.classList.add("active");
  popUp.style.cssText = "z-index:5;transform:translateY(0);opacity:1;";
});

exitBtn.addEventListener("click", function () {
  document.querySelector(".container").classList.remove("active");
  popUp.style.cssText = "z-index:-5;transform:translateY(-200%);opacity:0;";
});
