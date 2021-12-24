const menu = document.querySelector("#menu")
const menuBar = document.querySelector(".nav__center")

  menu.addEventListener("click",()=>{
    if(menu.classList.contains("active")){
      menu.classList.remove("active")
      menu.classList.add("close")
      menuBar.classList.add("open")
    }else if(menu.classList.contains("close")){
      menu.classList.add("active")
      menu.classList.remove("close")
      menuBar.classList.remove("open")
    }
  })