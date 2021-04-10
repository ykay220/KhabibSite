var mainMenu = [ {
    title: "Latest News",
    link: "/dashboard",
    type: "standard",
    level: "all",
   
  },
  {
    title: "Twitter",
    link: "/my-bookings",
    type: "standard",
    level: "all",
    
  },
  {
    title: "Insta",
    link: "/discreet-report",
    type: "standard",
    level: "all",
  
  },
  {
    title: "Myspace",
    link: "/resources",
    type: "standard",
    level: "all",
  
  },
  {
    title: "Admin Panel",
    id: "admin-btn",
    class: "submenu-admin",
    link: "#",
    type: "submenu",
    level: "root",
 
    submenu: [
      {
        title: "New Space",
        link: "#newspace-leftnav",
        id: "leftnav-newspace",
        type: "submenu",
        level: "root", 
      },
      {
        title: "Invite Team",
        link: "/invite-team",
        type: "standard",
        level: "root",
     
      },
      {
        title: "Employee List",
      //   link: ENVIRONMENT.HOSTNAME + "/employee-list",
        type: "standard",
        level: "root",
        
      },
      {
        title: "All Bookings",
        link: "/all-bookings",
        type: "standard",
        level: "root",
       
      },
      {
        title: "Reporting Log",
        link: "/reports",
        type: "standard",
        level: "root",
        
      },
      {
        title: "Upload Resources",
        link: "/upload-resources",
        type: "standard",
        level: "root",
 
      },
      {
        title: "Slack Integration",
        link: "/integrations",
        type: "standard",
        level: "root", 
      },
      {
        title: "Employee View",
        link: "#",
        type: "standard",
        level: "root"
      }
    ]
  },
  {
    title: "Account",
    id: "account-btn",
    class: "submenu-account",
    link:  "/account",
    type: "submenu",
    level: "all", 
    submenu: [
      {
        title: "Logout",
        link:  "/logout",
        type: "button",
        id: "leftnav-logout",
        level: "all", 
      }
    ]
  }
];

const navList = document.querySelector('#navi-list');
const toggleButton = document.querySelector('#toggle-button');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});

const hightlightButton = document.querySelector('#highlight-button');
const lastmatchtButton = document.querySelector('#lastmatch-button');
const coachtButton = document.querySelector('#coach-button');
const modulewrap = document.querySelector('.module-wrap');
const leftFrame = document.querySelector('.left-iframe');
const rightFrame = document.querySelector('.right-iframe');
const middleFrame = document.querySelector('.middle-iframe');
const middleBtn = document.querySelector('#middle-button');
const leftBtn = document.querySelector('#left-button');
const rightBtn = document.querySelector('#right-button');

const centerImage = document.querySelector('#middle-image');
const leftImage = document.querySelector('#left-image');
const rightImage = document.querySelector('#right-image');

const btnfooter = document.querySelector('#footer-button');

const leftContainer = document.querySelector('.left-item');
const middleContainer = document.querySelector('.middle-item');
const rightContainer = document.querySelector('.right-item');

const pquote = document.querySelector('.pquote');
const hquote = document.querySelector('.hquote');
const gif = document.querySelector('.gif-container');
const highlight = document.querySelector('.hilink');
let firstClickDone = false;


leftContainer.style.opacity = 0;
rightContainer.style.opacity = 0;
pquote.style.opacity = 0;
hquote.style.opacity = 0;
gif.style.opacity = 0;
highlight.style.opacity = 0;


let audio = document.querySelector('#audio')

function reveal(){
  leftContainer.animate([{ opacity: '0' }, { opacity: '1' }], 9000);
  rightContainer.animate([{ opacity: '0' }, { opacity: '1' }], 9000);
  pquote.animate([{ opacity: '0' }, { opacity: '1' }], 2000);
  
  gif.animate([{ opacity: '0' }, { opacity: '1' }], 5000);
  highlight.animate([{ opacity: '0' }, { opacity: '1' }], 9000);
  hquote.animate([{ opacity: '0' }, { opacity: '1' }], 2000);
  
  
  
 
setTimeout(function () {
leftContainer.style.opacity = 1;
rightContainer.style.opacity = 1;
hquote.style.opacity = 1;
pquote. style.opacity = 1;
gif.style.opacity = 3;
highlight.style.opacity = 1;

 }, 1000)

 //update the flag to indicate the first click is already over
firstClickDone = true;
}

function play(){
 
  audio.play();
  if(firstClickDone === false){
    reveal();
  }
}


function stopAudio(){
  audio.pause();
  audio.currentTime = 0;

}

centerImage.addEventListener('click', play)


hightlightButton.addEventListener('click', ()=>{
  stopAudio()
  modulewrap.style.display = 'block';
  leftFrame.style.display='none'
  rightFrame.style.display='none'


});

middleBtn.addEventListener('click', () => {
  
  modulewrap.style.display="none"
  leftFrame.style.display='block'
  rightFrame.style.display='block'
});



lastmatchtButton.addEventListener('click', ()=>{
  stopAudio()
  modulewrap.style.display = 'block';
  middleFrame.style.display='none'
  rightFrame.style.display='none'


});

leftBtn.addEventListener('click', () => {
  
  modulewrap.style.display="none"
  middleFrame.style.display='block'
  rightFrame.style.display='block'
});


coachtButton.addEventListener('click', ()=>{
  stopAudio()
  modulewrap.style.display = 'block';
  middleFrame.style.display='none'
  leftFrame.style.display='none'


});

rightBtn.addEventListener('click', () => {
  
  modulewrap.style.display="none"
  middleFrame.style.display='block'
  leftFrame.style.display='block'
});







btnfooter.addEventListener('mouseenter', () => {
  btnfooter.textContent = "CLICK ON THE IMAGE"
})


btnfooter.addEventListener('mouseleave', () => {
  btnfooter.textContent = "HOVER HERE"
})





