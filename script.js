function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        tablet: { smooth: true },
        smartphone: { smooth: true }
    });

    // Function to update ScrollTrigger positions
    function updateScrollTriggers() {
        ScrollTrigger.getAll().forEach(trigger => {
            trigger.refresh(); // Refresh each ScrollTrigger
        });
    }

    // Update ScrollTrigger positions after the DOM size changes
    const resizeObserver = new ResizeObserver(() => {
        locoScroll.update();
        updateScrollTriggers();
    });

    // Observe the main element for size changes
    resizeObserver.observe(document.querySelector("#main"));

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => {
        locoScroll.update();
        updateScrollTriggers(); // Update ScrollTrigger positions
    });

    ScrollTrigger.refresh();
}


function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from(".block1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from(".block1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from(".block1 h1, .block1 h3, .block1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}

function navAnimation() {
    let navHead = document.querySelector("nav");
    let nav = document.querySelectorAll(".nav_head");
    let nav_button = document.querySelector(".nav-button-main");
    let button_hover = document.querySelector(".nav-btn-hover");

    nav_button.addEventListener('mouseenter', function() {
        gsap.to(button_hover, {
            width: '3.1vw',
            duration: 0.4,
            ease: 'power5.in'
        })
    })

    nav_button.addEventListener('mouseleave', function() {
        gsap.to(button_hover, {
            width: '10vw',
            duration: 0.35,
            ease: 'power5.out'
        })
    })
    nav.forEach(navH => {
        navH.addEventListener('mouseenter', function() {
            let tl = gsap.timeline();
            
            tl.to("#nav-bottom", {
                height: '19vh',
                duration: 0.3
            });
            tl.to(".nav_head h5", {
                display: 'block',
                duration: 0.1
            });
            tl.to(".nav_head h5 span", {
                y: 0,
                stagger: {
                    amount: 0.12
                }
            });
        });
    });
    
    
    navHead.addEventListener('mouseleave', function() {
        let tl = gsap.timeline();
        
        tl.to(".nav_head h5 span", {
            y: 25,
            stagger: {
                amount: 0.50
            }
        });
        tl.to(".nav_head h5", {
            display: 'none',
            duration: 0.1
        });
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.20
        });
    });
}


function navMove() {

    gsap.to('.navbar', {
        padding: '0 4vh 0 4vh',
        zIndex: 10,
        scrollTrigger: {
            trigger: ".box3",
            scroller: "#main",
            start: "top 60%",
            end: "top 70%",
            scrub: true,
            // markers: true
        }
    });

    gsap.to('.navbar h1', {
        margin: '0.7vw 10vw 0 5vw',
        scrollTrigger: {
            trigger: ".box3",
            scroller: "#main",
            start: "top 60%",
            end: "top 70%",
            scrub: true,
            // markers: true
        }
    });

    gsap.to('.nav_head', {
        marginTop: '1vw',
        scrollTrigger: {
            trigger: ".box3",
            scroller: "#main",
            start: "top 60%",
            end: "top 70%",
            scrub: true,
            // markers: true
        }
    });
}

function block1_animation() {
    let block1_hover = document.querySelector(".c-bttn__morp");

    block1_hover.addEventListener('mouseenter', function() {

        gsap.to(block1_hover, {
            rotation: -30,
            height: '5.7vw',
            width: '5.7vw',
            margin: '1.2vh 1.16vh',
            duration: 0.37,
        })
    })

    block1_hover.addEventListener('mouseleave', function() {

        gsap.to(block1_hover, {
            rotation: 0,
            height: '6.8vw',
            width: '6.8vw',
            margin: '0',
        })
    })
}


function page2Animation() {
    let rightElems = document.querySelectorAll(".right-box");

    rightElems.forEach(function (elem) {
        let arrow = elem.querySelector('#right-box-arrow');
        let arrow_move = elem.querySelector('.move-arrow');

        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })

            arrow.classList.add('first-move');
            arrow.style.opacity = 0;
            arrow.style.duration = 0.1;

            arrow_move.classList.remove('trans');
            arrow_move.classList.add('second-move');
            arrow_move.style.opacity = 1;
            arrow_move.style.duration = 0.2;
        });

        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })

            arrow.classList.remove('first-move');
            arrow.style.opacity = 1;
            arrow.style.duration = 0.2;

            arrow_move.classList.add('trans');
            arrow_move.classList.remove('second-move');
            arrow_move.style.opacity = 0;
            arrow_move.style.duration = 0.1;
        });

        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 45,
                y: dets.y - elem.getBoundingClientRect().y - 65
            })
        })
    })
}



function block3Animation() {
    let block3_video = document.querySelector(".block3 video");
    let playButton = document.querySelector(".block3-playicon");

    playButton.addEventListener('click', function() {
        block3_video.play()

        
        gsap.to(block3_video, {
            transform: 'scaleX(1) scaleY(1)',
            opacity: 1,
            borderRadius: 0,
            zIndex: 20
        })
        
    })

    block3_video.addEventListener('click', function(){
        block3_video.pause()
        
        
        gsap.to(block3_video, {
            transform: 'scaleX(0.7%) scaleY(0%)',
            opacity: 0,
            borderRadius: '30px'
        })
    })
}

function block5_video() {
    let block5_box = document.querySelector(".block5-first-right");
    let block5_video = document.querySelector(".block5-first-right video");
    let block5_hover = document.querySelector(".block5-hover");

    block5_box.addEventListener('mouseenter', function() {
        block5_video.currentTime = 0;
        block5_video.play();
        
        gsap.to(block5_video, {
            opacity: 1
        })

        gsap.to(block5_hover, {
            opacity: 1,
            scale: 1
        })
    })

    block5_box.addEventListener('mouseleave', function() {
        block5_video.pause()
        
        gsap.to(block5_video, {
            opacity: 0
        })

        gsap.to(block5_hover, {
            opacity: 0,
            scale: 0
        })
    })

    block5_box.addEventListener("mousemove", function (dets) {

        gsap.to(block5_hover, {
            x: dets.x - block5_box.getBoundingClientRect().x - 75,
            y: dets.y - block5_box.getBoundingClientRect().y - 70        
        })

    })
}


function block5_secondvideo() {
    let block5_secondbox = document.querySelector(".block5-second-right");
    let block5_secondvideo = document.querySelector(".block5-second-right video");
    let block5_secondhover = document.querySelector(".block5-second-hover");

    block5_secondbox.addEventListener('mouseenter', function() {
        block5_secondvideo.currentTime = 0;
        block5_secondvideo.play();
        
        gsap.to(block5_secondvideo, {
            opacity: 1
        })

        gsap.to(block5_secondhover, {
            opacity: 1,
            scale: 1
        })
    })

    block5_secondbox.addEventListener('mouseleave', function() {
        block5_secondvideo.pause()
        
        gsap.to(block5_secondvideo, {
            opacity: 0
        })

        gsap.to(block5_secondhover, {
            opacity: 0,
            scale: 0
        })
    })

    block5_secondbox.addEventListener("mousemove", function (dets) {

        gsap.to(block5_secondhover, {
            x: dets.x - block5_secondbox.getBoundingClientRect().x - 75,
            y: dets.y - block5_secondbox.getBoundingClientRect().y - 70        
        })

    })
}


function block6_first_animation() {
    let block6_first = document.querySelector(".block6_left");
    let block6_first_svg = document.querySelector(".block6-left-svg");
    let block6_first_text = document.querySelector(".block6_left p");
    let block6_first_video = document.querySelector(".block6_left video");


    block6_first.addEventListener('mouseenter', function() {

        gsap.to([block6_first_text, block6_first_svg], {
            opacity: 0
        })
        block6_first_video.play()

        block6_first_video.currentTime = 0;
        block6_first_video.style.maxHeight = "72%";
        block6_first_video.style.transition = "ease 0.4s";
        block6_first_video.style.zIndex = "5";
    })

    block6_first.addEventListener('mouseleave', function() {

        block6_first_video.pause()
        block6_first_video.currentTime = 0;
        block6_first_video.style.maxHeight = "47%";
        block6_first_video.style.transition = "ease 0.4s";
        block6_first_video.style.zIndex = "0";

        gsap.to([block6_first_text, block6_first_svg], {
            opacity: 1
        })
    })
}


function block6_second_animation() {
    let block6_second = document.querySelector(".block6_right");
    let block6_second_svg = document.querySelector(".block6-right-svg");
    let block6_second_text = document.querySelector(".block6_right p");
    let block6_second_video = document.querySelector(".block6_right video");
    
    block6_second.addEventListener('mouseenter', function() {

        gsap.to([block6_second_text, block6_second_svg], {
            opacity: 0
        })

        block6_second_video.play()
        block6_second_video.currentTime = 0;
        block6_second_video.style.maxHeight = "72%";
        block6_second_video.style.transition = "ease 0.4s";
        block6_second_video.style.zIndex = "5";
    })

    block6_second.addEventListener('mouseleave', function() {

        block6_second_video.pause()
        block6_second_video.currentTime = 0;
        block6_second_video.style.maxHeight = "47%";
        block6_second_video.style.transition = "ease 0.4s";
        block6_second_video.style.zIndex = "0";

        gsap.to([block6_second_text, block6_second_svg], {
            opacity: 1
        })
    })
}



function block7_first_collapsible() {
    let coll = document.getElementsByClassName("block7-first-collapsible");
    let block7_expend = document.querySelector(".block7-svg svg");
    let j = 0;
  
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = document.querySelectorAll(".block7-first-collap");
        content.forEach(function(item) {
          if (item.style.display === "none") {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
          }
        });
        
        if (j % 2 === 0) {
            gsap.to( coll, {
                borderTop: '1px solid #3d3d3c'
            });
          } else {
            gsap.to(coll, {
                borderTop: '1px solid #fff'
            });
          }


        // Toggle rotation of the SVG on each click
        if (j % 2 === 0) {
          gsap.to(block7_expend, {
            rotation: 0,
            duration: 0.37
          });
        } else {
          gsap.to(block7_expend, {
            rotation: 180,
            duration: 0.3
          });
        }
        j++;
      });
    }
  }
  

  function block7_second_collapsible() {
    let coll = document.getElementsByClassName("block7-second-collapsible");
    let block7_expend = document.querySelector(".block7-2-svg svg");
    let j = 0;
  
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = document.querySelectorAll(".block7-second-collap");
        content.forEach(function(item) {
          if (item.style.display === "flex") {
            item.style.display = "none";
          } else {
            item.style.display = "flex";
          }
        });
        
        if (j % 2 === 0) {
            gsap.to( coll, {
                borderTop: '1px solid #fff'
            });
        } else {
            gsap.to(coll, {
                borderTop: '1px solid #3d3d3c'
            });
          }

        // Toggle rotation of the SVG on each click
        if (j % 2 === 0) {
          gsap.to(block7_expend, {
            rotation: 180,
            duration: 0.37
          });
        } else {
          gsap.to(block7_expend, {
            rotation: 0,
            duration: 0.3
          });
        }
        j++;
      });
    }
  }


  function block7_animation_over() {
      let sections1 = document.querySelectorAll('.block7-first-collap');
      
    sections1.forEach(function(section) {
        let hover = section.querySelector('.over'); // Select the specific hover element within each section

        section.addEventListener('mouseenter', function() {
            gsap.set(hover, {
                y: '-100%',
                opacity: 0
            });
            
            gsap.to(hover, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'cubic-bezier(0.19, 1, 0.22, 1)'
            });
            
            gsap.to(section, {
                borderTop: '1px solid #ffffff',
            });
        });

        section.addEventListener('mouseleave', function() {
            gsap.to(hover, {
                y: '100%',
                opacity: 1,
                duration: 0.5,
                ease: 'cubic-bezier(0.19, 1, 0.22, 1)'
            });

            gsap.to(section, {
                borderTop: '0.5px solid #3D3C3C',
            });
        });
    });


    let sections2 = document.querySelectorAll('.block7-second-collap');


    sections2.forEach(function(section) {
        let hover = section.querySelector('.over'); // Select the specific hover element within each section

        section.addEventListener('mouseenter', function() {
            gsap.set(hover, {
                y: '-100%',
                opacity: 0
            });
            
            
            gsap.to(hover, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'cubic-bezier(0.19, 1, 0.22, 1)'
            });

            gsap.to(section, {
                borderTop: '1px solid #ffffff',
            });
        });

        section.addEventListener('mouseleave', function() {
            gsap.to(hover, {
                y: '100%',
                opacity: 1,
                duration: 0.5,
                ease: 'cubic-bezier(0.19, 1, 0.22, 1)'
            });

            gsap.to(section, {
                borderTop: '0.5px solid #3D3C3C',
            });
        });
    });
}

function block8_arrow_move() {
    let box = document.querySelectorAll('.block8-box')
    
    box.forEach(function(boxes) {
        let arrow1 = boxes.querySelector('.block8-svg img');
        let arrow2 = boxes.querySelector('.move8-arrow');

        boxes.addEventListener('mouseenter', function() {

            arrow1.classList.add('first-move')
            arrow1.classList.add('first-move')
            arrow1.style.opacity = 0;
            arrow1.style.duration = 0.1;

            arrow2.classList.add('second-move')
            arrow2.classList.remove('trans')
            arrow2.style.opacity = 1;
            arrow2.style.duration = 0.2;
        })

        boxes.addEventListener('mouseleave', function() {
            arrow1.classList.remove('first-move')
            arrow1.classList.remove('first-move')
            arrow1.style.opacity = 1;
            arrow1.style.duration = 0.2;

            arrow2.classList.remove('second-move')
            arrow2.classList.add('trans')
            arrow2.style.opacity = 0;
            arrow2.style.duration = 0.1;
        })
    })
}



document.addEventListener('DOMContentLoaded', function() {
    const arrow1 = document.querySelector('.move8-arrow1')
    const arrow2 = document.querySelector('.move8-arrow2')
    const circle = document.querySelector('.block8-circle');
    const ourText = new SplitType('h3.block8-move-text', { types: 'chars' });
    const chars = ourText.chars;

    circle.addEventListener('mouseenter', function() {
        gsap.fromTo(chars, { 
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 1,
            ease: 'power4.out',
        });

        gsap.to(circle, {
            height: '12.5vw',
            width: '12.5vw',
        })

            arrow1.classList.add('first-move')
            arrow1.classList.add('first-move')
            arrow1.style.opacity = 0;
            arrow1.style.duration = 0.1;
            arrow1.style.marginRight = '0.6vw'

            arrow2.classList.add('second-move')
            arrow2.classList.remove('trans')
            arrow2.style.opacity = 1;
            arrow2.style.duration = 0.2;
            arrow2.style.marginRight = '0.6vw'
    });

    circle.addEventListener('mouseleave', function() {


        gsap.to(circle, {
            height: '12vw',
            width: '12vw'
        })

            arrow1.classList.remove('first-move')
            arrow1.classList.remove('first-move')
            arrow1.style.opacity = 1;
            arrow1.style.duration = 0.2;

            arrow2.classList.remove('second-move')
            arrow2.classList.add('trans')
            arrow2.style.opacity = 0;
            arrow2.style.duration = 0.1;
    })
});


function block9_animation() {
    gsap.from(".block9-bottom h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#block9-0",
            scroller: "#main",
            start: "top 150%",
            end: "top 0%",
            scrub: true,
        }
    })
}


function block10_tick() {
    ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause",
        scroller: "#main"
      });
      
      ScrollTrigger.create({
        //name: pauseGreen
        trigger: ".block10",
        start: "top top",
        end: "bottom 400px",
        pin: ".block10"
      });
}



function block11_animation() {
    let container = document.querySelector(".block11-text-block");
    let video = document.querySelector('.block11-svg video')

    container.addEventListener('mouseenter', function() {
        video.currentTime = 0;
        video.playbackRate = 0.4;
        const duration = video.duration;
        video.play();

        setTimeout(() => {
            video.pause();
          }, duration * 1.0 * 700);
    })
    
    container.addEventListener('mouseleave', function() {
        video.playbackRate = 0.5;
        var intervalRewind = setInterval(function() {
            if(video.currentTime == 0){
               clearInterval(intervalRewind);
               video.pause();
            }
            else {
                video.currentTime += -(0.1);
            }
        }, 130);
    });
}


function block11_hover() {
    let text_box = document.querySelector('.block11-text-block');
    let hover_circle = document.querySelector('.block11-hover');

    // Add event listeners to the document to track mouse movement
    document.addEventListener('mousemove', function(event) {
        // Check if the mouse is inside the combined area of text_box and hover_circle
        if (!event.target.closest('.block11-text-block') && !event.target.closest('.block11-hover')) {
            // Mouse is outside, hide the hover_circle
            gsap.to(hover_circle, {
                opacity: 0,
                scale: 0
            });
        }
    });

    // Add event listener to the text_box for mouseenter
    text_box.addEventListener('mouseenter', function() {
        gsap.to(hover_circle, {
            opacity: 1,
            scale: 1
        });
    });

    // Adjust mousemove event listener to use document coordinates
    document.addEventListener('mousemove', function(move) {
        gsap.to(hover_circle, {
            x: move.pageX - text_box.getBoundingClientRect().x - 75,
            y: move.pageY - text_box.getBoundingClientRect().y - 78
        });
    });
}


function block12_collapsable_first() {
    let section1 = document.querySelector('#block12-first');
    let svg1 = document.querySelector('#block12-first-summary')
    f = 0;
    section1.addEventListener('click', function() {
        if(f % 2 === 0) {
            gsap.to(svg1, {
                rotation: 0,
                duration: 0.37
            })
        } else {
            gsap.to(svg1, {
                rotation: 180,
                duration: 0.37
            })
        }

        if (f % 2 === 0) {
            gsap.to( section1, {
                borderTop: '1px solid #3d3d3c'
            });
        } else {
            gsap.to(section1, {                
                borderTop: '1px solid #fff'
            });
          }
        f++
    })
}


function block12_collapsable_second() {
    let section2 = document.querySelector('#block12-second');
    let svg2 = document.querySelector('#block12-second-summary')
    i = 0;
    section2.addEventListener('click', function() {
        if(i % 2 === 0) {
            gsap.to(svg2, {
                rotation: 180,
                duration: 0.37
            })
        } else {
            gsap.to(svg2, {
                rotation: 0,
                duration: 0.37
            })
        }

        if (i % 2 === 0) {
            gsap.to( section2, {
                borderTop: '1px solid #fff'
            });
        } else {
            gsap.to(section2, {                
                borderTop: '1px solid #3d3d3c'
            });
          }
        i++
    })
}

function block12_collapsable_third() {
    let section3 = document.querySelector('#block12-third');
    let svg3 = document.querySelector('#block12-third-summary')
    m = 0;
    section3.addEventListener('click', function() {
        if(m % 2 === 0) {
            gsap.to(svg3, {
                rotation: 180,
                duration: 0.37
            })
        } else {
            gsap.to(svg3, {
                rotation: 0,
                duration: 0.37
            })
        }

        if (m % 2 === 0) {
            gsap.to( section3, {
                borderTop: '1px solid #fff'
            });
        } else {
            gsap.to(section3, {                
                borderTop: '1px solid #3d3d3c'
            });
          }
        m++
    })
}


function block12_animation() {
    let block12_box = document.querySelectorAll(".block12-detail1-1");
    let block12_boxx = document.querySelectorAll(".block12-detail1-2");
    let lastBox = block12_boxx[block12_boxx.length - 1];

    block12_box.forEach(function(boxes1) {
        boxes1.addEventListener('mouseenter', function() {
            gsap.to(boxes1.childNodes[1], {
                rotation: -3,
                transform: 'scaleY(100%)',
                duration: 0.5
            });
        });
        boxes1.addEventListener('mouseleave', function() {
            gsap.to(boxes1.childNodes[1], {
                rotation: -3,
                transform: 'scaleY(0)',
            });
        });

        boxes1.addEventListener('mousemove', function(event) {
            const boundingRect = boxes1.getBoundingClientRect();
            const offsetX = event.clientX - boundingRect.left; // Mouse X position relative to the box
            const offsetY = event.clientY - boundingRect.top; // Mouse Y position relative to the box
            const maxMoveX = 500; // Maximum X distance to move
            const maxMoveY = 300; // Maximum Y distance to move
            const moveRatioX = 0.3; // Movement ratio for X direction
            const moveRatioY = 0.3; // Movement ratio for Y direction
            const maxRotation = 7; // Maximum rotation angle
            const minRotation = 0; // Minimum rotation angle
            const rotationSpeed = 0.4; // Speed of rotation
        
            // Calculate movement based on mouse position
            const moveX = (offsetX - boundingRect.width / 2) * moveRatioX;
            const moveY = (offsetY - boundingRect.height / 2) * moveRatioY;
        
            // Calculate rotation angle based on mouse distance from the center
            const distance = Math.sqrt(Math.pow(offsetX - boundingRect.width / 1, 1) + Math.pow(offsetY - boundingRect.height / 2, 2));
            let rotation = 0; // Default rotation is 0
        
            if (distance > 0) {
                rotation = (maxRotation - minRotation) * (1 - distance / (boundingRect.width / 2)) + minRotation;
        
                // Adjust rotation direction based on mouse movement direction
                if (offsetX < boundingRect.width / 2) {
                    rotation = -rotation; // Rotate clockwise
                }
            }
        
            gsap.to(boxes1.childNodes[1], {
                x: Math.min(Math.max(moveX, -maxMoveX), maxMoveX),
                y: Math.min(Math.max(moveY, -maxMoveY), maxMoveY),
                rotation: (moveX === 0 && moveY === 0) ? 0 : rotation, // Set rotation to 0 if mouse is at the center, otherwise use calculated rotation
                ease: 'power1.out', // Smooth rotation
                duration: rotationSpeed // Duration for smooth rotation
            });
        }); 
    });

    block12_boxx.forEach(function(box, index) {
        let secondBox = document.querySelectorAll(".block12-detail1-2")[index + 1]; // Get the next box

        box.addEventListener('mouseenter', function() {
            // Show the second box
            secondBox.childNodes[1].style.top= '-8vw';
            box.style.zIndex = '0';
            gsap.to(secondBox.childNodes[1], {
                rotation: -3,
                transform: 'scaleY(100%)',
                duration: 0.5
            });
        });

        box.addEventListener('mouseleave', function() {
            // Hide the second box
            gsap.to(secondBox.childNodes[1], {
                rotation: -3,
                transform: 'scaleY(0)',
            });
        });

        box.addEventListener('mousemove', function(event) {
            const boundingRect = box.getBoundingClientRect();
            const offsetX = event.clientX - boundingRect.left; // Mouse X position relative to the box
            const offsetY = event.clientY - boundingRect.top; // Mouse Y position relative to the box
            const maxMoveX = 200; // Maximum X distance to move
            const maxMoveY = 100; // Maximum Y distance to move
            const moveRatioX = 0.3; // Movement ratio for X direction
            const moveRatioY = 0.3; // Movement ratio for Y direction
            const maxRotation = 7; // Maximum rotation angle
            const minRotation = 0; // Minimum rotation angle
            const rotationSpeed = 0.4; // Speed of rotation
        
            // Calculate movement based on mouse position
            const moveX = (offsetX - boundingRect.width / 2) * moveRatioX;
            const moveY = (offsetY - boundingRect.height / 2) * moveRatioY;
        
            // Calculate rotation angle based on mouse distance from the center
            const distance = Math.sqrt(Math.pow(offsetX - boundingRect.width / 1.5, 1) + Math.pow(offsetY - boundingRect.height / 2, 2));
            let rotation = 0; // Default rotation is 0
        
            if (distance > 0) {
                rotation = (maxRotation - minRotation) * (1 - distance / (boundingRect.width / 2)) + minRotation;
        
                // Adjust rotation direction based on mouse movement direction
                if (offsetX < boundingRect.width / 2) {
                    rotation = -rotation; // Rotate clockwise
                }
            }
        
            gsap.to(secondBox.childNodes[1], {
                x: Math.min(Math.max(moveX, -maxMoveX), maxMoveX),
                y: Math.min(Math.max(moveY, -maxMoveY), maxMoveY),
                rotation: (moveX === 0 && moveY === 0) ? 0 : rotation, // Set rotation to 0 if mouse is at the center, otherwise use calculated rotation
                ease: 'power1.out', // Smooth rotation
                duration: rotationSpeed // Duration for smooth rotation
            });
        });
        
    });

    // lat box img
    lastBox.addEventListener('mouseenter', function() {
        let last_img = lastBox.querySelectorAll(".block12-hover-img")[1]
        last_img.style.top= '0';
        gsap.to(lastBox.querySelectorAll(".block12-hover-img")[1], {
            transform: 'scaleY(100%)',
            rotation: -3,
            duration: 0.5,
        });
    });

    lastBox.addEventListener('mouseleave', function() {
        gsap.to(lastBox.querySelectorAll(".block12-hover-img")[1], {
            transform: 'scaleY(0)',
            rotation: -3,
        });
    });


    lastBox.addEventListener('mousemove', function(event) {
        const boundingRect = lastBox.getBoundingClientRect();
        const offsetX = event.clientX - boundingRect.left; // Mouse X position relative to the box
        const offsetY = event.clientY - boundingRect.top; // Mouse Y position relative to the box
        const maxMoveX = 200; // Maximum X distance to move
        const maxMoveY = 100; // Maximum Y distance to move
        const moveRatioX = 0.3; // Movement ratio for X direction
        const moveRatioY = 0.3; // Movement ratio for Y direction
        const maxRotation = 7; // Maximum rotation angle
        const minRotation = 0; // Minimum rotation angle
        const rotationSpeed = 0.4; // Speed of rotation
    
        // Calculate movement based on mouse position
        const moveX = (offsetX - boundingRect.width / 2) * moveRatioX;
        const moveY = (offsetY - boundingRect.height / 2) * moveRatioY;
    
        // Calculate rotation angle based on mouse distance from the center
        const distance = Math.sqrt(Math.pow(offsetX - boundingRect.width / 1.5, 1) + Math.pow(offsetY - boundingRect.height / 2, 2));
        let rotation = 0; // Default rotation is 0
    
        if (distance > 0) {
            rotation = (maxRotation - minRotation) * (1 - distance / (boundingRect.width / 2)) + minRotation;
    
            // Adjust rotation direction based on mouse movement direction
            if (offsetX < boundingRect.width / 2) {
                rotation = -rotation; // Rotate clockwise
            }
        }
    
        gsap.to(lastBox.querySelectorAll(".block12-hover-img")[1], {
            x: Math.min(Math.max(moveX, -maxMoveX), maxMoveX),
            y: Math.min(Math.max(moveY, -maxMoveY), maxMoveY),
            rotation: (moveX === 0 && moveY === 0) ? 0 : rotation, // Set rotation to 0 if mouse is at the center, otherwise use calculated rotation
            ease: 'power1.out', // Smooth rotation
            duration: rotationSpeed // Duration for smooth rotation
        });
    });
};


function block13_coll_animation() {
    let block13_box = document.querySelectorAll('.block13-part-2 summary');
    let block13_box_1 = document.getElementById('block13-first-coll');




    // Variable to track the state of each collapsible
    let stateMap = new Map();

    block13_box.forEach(function(collapsible) {
        // Initialize state for each collapsible
        stateMap.set(collapsible, 0);

        collapsible.addEventListener('click', function() {
            let h = stateMap.get(collapsible);
            let svg13 = collapsible.querySelector('svg');

            if (h % 2 === 0) {
                gsap.to(svg13, {
                    rotation: 180
                });
                gsap.to(collapsible, {
                    borderTop: '1px solid #ffffff'
                });
            } else {
                gsap.to(svg13, {
                    rotation: 0
                });
                gsap.to(collapsible, {
                    borderTop: '1px solid #3c3d3d'
                });
            }

            // Update state
            stateMap.set(collapsible, h + 1);
        });
    });

    n = 0
    block13_box_1.addEventListener('click', function() {
        let svg13_1 = block13_box_1.childNodes[5]
        if(n % 2 === 0){
            gsap.to(svg13_1, {
                rotation: 0
            });
        } else {
            gsap.to(svg13_1, {
                rotation: 180
            });
        }

        if(n % 2 === 0){
            gsap.to(block13_box_1, {
                borderTop: '1px solid #3c3d3d'
            });
        } else {
            gsap.to(block13_box_1, {
                borderTop: '1px solid #ffffff'
            });
        }
        n++
    });
}


function block13_animation() {
    let container = document.querySelector(".block13-text-block");
    let video = document.querySelector('.block13-part3-svg video')

    container.addEventListener('mouseenter', function() {
        video.currentTime = 0;
        video.playbackRate = 0.4;
        const duration = video.duration;
        video.play();

        setTimeout(() => {
            video.pause();
          }, duration * 1.0 * 700);
    })
    
    container.addEventListener('mouseleave', function() {
        video.playbackRate = 0.5;
        var intervalRewind = setInterval(function() {
            if(video.currentTime == 0){
               clearInterval(intervalRewind);
               video.pause();
            }
            else {
                video.currentTime += -(0.1);
            }
        }, 130);
    });
}


function block13_hover() {
    let text_box = document.querySelector('.block13-text-block');
    let hover_circle = document.querySelector('.block13-hover');

    text_box.addEventListener('mouseenter', function() {

        gsap.to(hover_circle, {
            opacity: 1,
            scale: 1
        })
    })

    text_box.addEventListener('mouseleave', function() {

        gsap.to(hover_circle, {
            opacity: 0,
            scale: 0
        })
    })

    text_box.addEventListener('mousemove', function(move) {

        gsap.to(hover_circle, {
            x: move.x -text_box.getBoundingClientRect().x -75,
            y: move.y - text_box.getBoundingClientRect().y - 78
        })
    })

}


function block14_animation() {
    gsap.from('.lazarev-circle-img', {
        rotate: 360,
        duration: 5,
        ease: "none",
        ease: 'power5.in-out',
        scrollTrigger: {
            trigger: ".block14-second",
            scroller: "#main",
            start: "top 150%",
            end: "top 30%",
            scrub:true,
            // markers: true
        }
    })
}

function block15_sub_section() {
    let input_box = document.querySelector('.subscribe-section input');
    let input_btn = document.querySelector('.subscribe-section img');
    let text = document.querySelector('.subscribe-section h4');
    let input_animation = document.querySelector('.block15-input-over');

    input_box.addEventListener('click', function() {
        gsap.set(input_animation, {
            x: '-100%',
            opacity: 0
        });

        gsap.to(input_box, {
            padding: '0 6.3vw 2vw 0',
            duration: 0.2
        });

        gsap.to(text, {
            fontSize: '0.8vw',
            top: '1.7vw',
            wordSpacing: '0',
            duration: 0.2
        });

        gsap.to(input_animation, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'cubic-bezier(0.19, 1, 0.22, 1)'
        });
    });

    window.addEventListener('click', function(event) {
        let email = input_box.value;

        if (email.length === 0) {
            if (!input_box.contains(event.target) && !input_btn.contains(event.target) && !text.contains(event.target)) {
                gsap.to(input_box, {
                    padding: '0 6.3vw 1vw 0',
                    duration: 0.2
                });

                gsap.to(text, {
                    fontSize: '1.3vw',
                    top: '2.3vw',
                    wordSpacing: '0.2vw',
                    duration: 0.2
                });

                gsap.to(input_animation, {
                    x: '100%',
                    opacity: 0,
                    duration: 0.5,
                    ease: 'cubic-bezier(0.19, 1, 0.22, 1)'
                });
            }
        }
    });

    input_box.addEventListener('input', function() {
        let email = input_box.value;

        if (email.length !== 0) {
            window.removeEventListener('click', windowClickHandler);
        } else {
            window.addEventListener('click', windowClickHandler);
        }
    });

    function windowClickHandler(event) {
        let email = input_box.value;

        if (email.length === 0) {
            if (!input_box.contains(event.target) && !input_btn.contains(event.target) && !text.contains(event.target)) {
                gsap.to(text, {
                    wordSpacing: '-0.2vw',
                    fontSize: '1.3vw',
                    top: '2.3vw',
                    duration: 0.2
                });

                gsap.to(input_box, {
                    padding: '0 6.3vw 1vw 0',
                    duration: 0.2
                });

                gsap.to(input_animation, {
                    x: '100%',
                    opacity: 0,
                    duration: 0.5,
                    ease: 'cubic-bezier(0.19, 1, 0.22, 1)'
                });
            }
        }
    }

    // Initially set the event listener
    window.addEventListener('click', windowClickHandler);
}




document.addEventListener('DOMContentLoaded', function() {
    let inputBox = document.querySelector('.subscribe-section input');
    let text_color = document.querySelector('.subscribe-section h4');
    let input_btn = document.querySelector('.subscribe-section img');

    function validateEmail(email) {
        const format = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return format.test(email);
      }

      inputBox.addEventListener('input', function() {
        let email = inputBox.value

        if(email.length === 0){
            gsap.to([inputBox,text_color ], {
                color: '#ffffff',
                duration: 0
            })
        }
        else if(validateEmail(email)) {
            gsap.to([inputBox,text_color ], {
                color: '#ffffff',
                duration: 0
            })

            gsap.to(input_btn, {
                cursor: 'pointer'
            })
        } else {
            gsap.to([inputBox,text_color], {
                color: '#fed15b',
                duration: 0
            })

            gsap.to(input_btn, {
                cursor: 'no-drop'
            })
        }
      })
})


function block15_text_hover() {
    let text_box = document.querySelector('.block15-first-left');
    let hover_circle = document.querySelector('.block15-hover');

    text_box.addEventListener('mouseenter', function() {

        gsap.to(hover_circle, {
            opacity: 1,
            scale: 1
        })
    })

    text_box.addEventListener('mouseleave', function() {

        gsap.to(hover_circle, {
            opacity: 0,
            scale: 0
        })
    })

    text_box.addEventListener('mousemove', function(move) {

        gsap.to(hover_circle, {
            x: move.x -text_box.getBoundingClientRect().x -75,
            y: move.y - text_box.getBoundingClientRect().y - 85
        })
    })

}






loadingAnimation();
locomotiveAnimation();
navAnimation();
navMove();
block1_animation();
page2Animation();
block3Animation();
block5_video();
block5_secondvideo();
block6_first_animation();
block6_second_animation();
block7_first_collapsible();
block7_second_collapsible();
block7_animation_over();
block8_arrow_move();
block9_animation();
block10_tick();
block11_animation();
block11_hover();
block12_collapsable_first();
block12_collapsable_second();
block12_collapsable_third();
block12_animation();
block13_coll_animation();
block13_animation()
block13_hover();
block14_animation();
block15_sub_section();
block15_text_hover();
