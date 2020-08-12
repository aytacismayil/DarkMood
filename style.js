const moonPath = "M34 70C34 108.384 71 139.5 71 139.5C31.7878 139.5 0 108.384 0 70C0 31.6162 31.7878 0.5 71 0.5C71 0.5 34 31.6162 34 70Z";

const sunPath ="M142 70C142 108.384 110.212 139.5 71 139.5C31.7878 139.5 0 108.384 0 70C0 31.6162 31.7878 0.5 71 0.5C110.212 0.5 142 31.6162 142 70Z";

const darkMode =document.querySelector("#darkMode");
let toggle =false;


darkMode.addEventListener('click' , ()=> {
  //set up the anime.js
  const timeline = anime.timeline({
    duration : 750,
    easing : "easeOutExpo"
  });

  timeline
  .add({
    targets : ".sun",
    d : [{ value : toggle ? sunPath : moonPath }]
  })
  .add({
    targets : "#darkMode",
    rotate : 320
  },
  "-=350"
  )
  .add({
    targets : "section",
    backgroundColor : toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)',
    color : toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
  },
  "-=700"
  )
  //click on the sun i want that toggle to switch
  if(!toggle){
    toggle = true;
  }else{
    toggle = false;
  }
});