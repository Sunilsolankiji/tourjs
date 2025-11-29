# Tourjs Library Documentation  
  

## Introduction  
The tourjs JavaScript library empowers developers to craft engaging website tours and walkthroughs for users. These tours serve as valuable tools to user newcomers through a website's features and functionalities, be it a web application or any online platform. With tourjs, creating interactive and user-friendly guides becomes a breeze, allowing you to effortlessly highlight and elucidate different elements on a web page, thereby enhancing the user's comprehension and navigation of the interface.   
  

## Table of Contents 
- [Installation](#installation)
- [Getting Started](#getting-started) 
- [Tour Configuration](#tour-config)
    
---  
  
<a name="installation"></a>
## Installation   
  
To use the Tour Library in your project, follow these steps:   
  
  1. Download the library files from our website or repository.  
  2. Include the library files (tourjs.js and tourjs.css) in your project  
  3. Link the library files in your HTML file.   
  4. You're now ready to start using the Tour Library!        
  
---  
  
<a name="getting-started"></a>
## Getting Started ##
To create a basic Tour, follow these steps:      

**Step 1:** Initialize the Tour Library using JavaScript.  

~~~js
let ztTour = new ztTour(options); 
~~~  

**Step 2:** Define all your configuration.   


**Step 3:** start the tour by calling the appropriate function.   

~~~js
ztTour.start(); 
~~~   

**Note:** Customize the tour's appearance and behavior as needed.   

[Live demo](https://zehntech.github.io/zt-gantt/)      

**Complete Documentation:** [ztTour Documentation](./docs/Tour-Library-Documentation.pdf)  
  
  ---  
  
<a name="tour-config"></a>
## 3. Tour Configuration     

  ~~~js
  
  let options = { 
// Opacity of the backdrop. (default: 0.7) 
          overlayOpacity?: number, 

// Distance between the highlighted element and the cutout. (default: 10) 
          stagePadding?: number, 

// Distance between the popover and the highlighted element. (default: 10) 
          popupOffset?: number, 

// Radius of the cutout around the highlighted element. (default: 5) 
          stageRadius?: number, 

// Overlay color. (default: black) 
          overlayColor?: string, 

// Whether to animate the product tour. (default: true) 
          animate?: boolean, 

// Whether to smooth scroll to the highlighted element. (default: false) 
          smoothScroll?: boolean, 

// Whether to allow closing the popover by clicking on the backdrop. (default: true) 
          allowBackdropClose?: boolean, 

// If you want to add custom class to the popover 
          popupClass?: string, 

// Whether to allow keyboard navigation. (default: true) 
          keyboardControl?: boolean, 

// Whether to show the progress text in popover. (default: false) 
          showProgress?: boolean, 

// Array of buttons to show in the popover. Defaults to ["next", "previous", "close"] 
          VisibleButtons?: [], 

// Array of buttons to disable. Default to [] 
          disableButtons: [], 

// Duration of the animation. (default: 400) 
          animationDuration?: number, 

//Text of the next button. Default ("Next &rarr;") 
        nextBtnText?:string, 

//Text of the previous button. Default ("&larr; Previous") 
        prevBtnText?:string, 

//Text of the done button. Default ("Done") 
        DoneBtnText?:string, 

//function trigered when clicked on next button 
          onNextClick: (step)=>{ 
            console.log(step, " Next Click"); 
          }, 

//function trigered when clicked on close button 
          onClose: ()=>{ 
            console.log("Tour Closed"); 
          }, 

//function trigered when clicked on previous button 
          onPreviousClick: (step)=>{ 
            console.log(step, " Previous Click"); 
          }, 

    //example steps for the tour 
          steps: [ 
            { 
              element: ".collapse-container", 
              popup: { 
                title: "Toggle Collapse", 
                description: "Toggle all the tree!!", 
                side: "bottom", 
                align: "start", 
              }, 
            }, 
            { 
              element: ".export-data", 
              popup: { 
                title: "Export Chart", 
                description: "Export the gantt chart in pdf, png and excel.", 
                side: "bottom", 
                align: "center", 
              }, 
            }, 
            { 
              element: ".fullscreen", 
              popup: { 
                title: "Fullscreen", 
                description: "View the gantt chart in fullscreen mode.", 
                side: "bottom", 
                align: "end", 
              }, 
            }, 
            { 
              element: "#ZT-Gantt", 
              popup: { 
                title: "tourjs", 
                description: "Gantt Chart", 
                side: "top", 
                align: "start", 
              }, 
            }, 

//for showing the popup only without highlighting any element 
            { 
              popup: { 
                title: "That's everything", 
                description: `<div class="finish"> 
                  <p>Looks like you're ready to go 🎉</p> 
                  <p>Click anywhere to exit the tour.</p> 
                  <img src="https://media.tenor.com/y2JXkY1pXkwAAAAM/cat-computer.gif"> 
                  </div>`, 
                side: "over", 
                align: "over", 
              }, 
            }, 
          ], 
        }; 

  ~~~
    
  ---
