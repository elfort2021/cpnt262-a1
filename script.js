// check ths strict thing in this class // 

// attempting to make a content drawer open, here we go 

let toggleNavStatus = false;

let toggleNav =  function() {
  let grabSideNav = document.querySelector(".nav-sidebar");
  let grabSideNavUl = document.querySelector(".nav-sidebar ul");
  let grabSideNavSpan = document.querySelector(".nav-sidebar span");
  let grabSideNavLinks = document.querySelectorAll(".nav-sidebar a");


  if (toggleNavStatus === false) { 
    grabSideNavUl.style.visibility = "visible"; 
    grabSideNav.style.width = "275px"; 
    grabSideNavSpan.style.opacity = "0.5"; 

    // let arrayLength = grabSideNavLinks.length; 
    // for (let i = 0; i < arrayLength; i++) {
    //   grabSideNavLinks[i].style.opacity = "1";
    // }

    // grabSideNavLinks.forEach(element => {
    //   grabSideNavLinks[1].style.opacity = "1";
    // });
    
    toggleNavStatus = true; 
  }


else if (toggleNavStatus === true) { 
  
  grabSideNav.style.width = "40px"; 
  grabSideNavSpan.style.opacity = "0"; 

  let arrayLength = grabSideNavLinks.length; 
  for (let i = 0; i < arrayLength; i++) {
    grabSideNavLinks[i].style.opacity = "0";
  }

  // grabSideNavLinks.forEach(element => {
  //   grabSideNavLinks[1].style.opacity = "1";
  // });
  
  grabSideNavUl.style.visibility = "hidden"; 

  toggleNavStatus = false; 
}

}
