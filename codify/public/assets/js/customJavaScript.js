// TweenMax.to("#iphone-left", 1, {
//   scrollTrigger: {
//     trigger: ".three-mob",
//     start: "top 75%",
//     end: "bottom 25%",
//     toggleActions: "restart complete none reset"
//   },
//   x: -80
// });
//
// TweenMax.to("#iphone-right", 1, {
//   scrollTrigger: {
//     trigger: ".three-mob",
//     start: "top 75%",
//     end: "bottom 25%",
//     toggleActions: "restart complete none reset"
//   },
//   x: 80
// });


$( window ).on('scroll', function(){

      // var scrollTop = $(this).scrollTop();
      //
      // TweenMax.to(["#iphone-right", "#iphone-left"],  {
      //   scrollTrigger: {
      //     trigger: ".three-mob",
      //     start: "top 75%",
      //     end: "bottom 25%",
      //     toggleActions: "restart complete none reset"
      //   },
      //   x: Math.min(Math.max(( 0.35* scrollTop ), 50), 200)  +'px',
      //   y: - Math.min(Math.max(( 0.06* scrollTop ), 0), 100)  +'px'
      // });
      //
      //
      // TweenMax.to("#iphone-left",  {
      //   scrollTrigger: {
      //     trigger: ".three-mob",
      //     start: "top 75%",
      //     end: "bottom 25%",
      //     toggleActions: "restart complete none reset"
      //   },
      //   x: - Math.min(Math.max(( 0.35* scrollTop ), 50), 200)  +'px'
      // });



    });

    const moveUpBoxes = gsap.utils.toArray('.move-up');
    moveUpBoxes.forEach(box => {
      gsap.to(box, {
        y: -80,
        scrollTrigger: {
          trigger: box,
          start: "center 75%",
          end: "center 35%",
          scrub: true
        }
      })
    });

    const moveDownBoxes = gsap.utils.toArray('.move-down');
    moveDownBoxes.forEach(box => {
      gsap.to(box, {
        y: 90,
        scrollTrigger: {
          trigger: box,
          start: "center 75%",
          end: "center 35%",
          scrub: true
        }
      })
    });

    const moveUpFromBoxes = gsap.utils.toArray('.move-up-from');
    moveUpFromBoxes.forEach(box => {
      gsap.from(box, {
        y: 80,
        scrollTrigger: {
          trigger: box,
          start: "center 65%",
          end: "center 35%",
          scrub: true
        }
      })
    });

    const moveUpFBoxes = gsap.utils.toArray('.move-up-f');
    moveUpFBoxes.forEach(box => {
      gsap.to(box, {
        y: -40,
        scrollTrigger: {
          trigger: box,
          start: "center 65%",
          end: "center 55%",
          scrub: true
        }
      })
    });


    const moveLeftBoxes = gsap.utils.toArray('.move-left');
    moveLeftBoxes.forEach(box => {
      gsap.to(box, {
        x: -200,
        scrollTrigger: {
          trigger: box,
          start: "top 85%",
          end: "top 25%",
          scrub: true
        }
      })
    });

    const moveLeftFromBoxes = gsap.utils.toArray('.move-left-from');
    moveLeftFromBoxes.forEach(box => {
      gsap.from(box, {
        x: 400,
        opacity: 0,
        scrollTrigger: {
          trigger: box,
          start: "center 80%",
          end: "center 55%",
          scrub: true
        }
      })
    });


    const moveRightFromBoxes = gsap.utils.toArray('.move-right-from');
    moveRightFromBoxes.forEach(box => {
      gsap.from(box, {
        x: -400,
        opacity: 0,
        scrollTrigger: {
          trigger: box,
          start: "center 80%",
          end: "center 55%",
          scrub: true
        }
      })
    });

    const moveLeftFBoxes = gsap.utils.toArray('.move-left-f');
    moveLeftFBoxes.forEach(box => {
      gsap.to(box, {
        x: -50,
        scrollTrigger: {
          trigger: box,
          start: "top 50%",
          end: "bottom 100%",
          scrub: true
        }
      })
    });

    const moveRightBoxes = gsap.utils.toArray('.move-right');
    moveRightBoxes.forEach(box => {
      gsap.to(box, {
        x: 200,
        scrollTrigger: {
          trigger: box,
          start: "top 85%",
          end: "top 25%",
          scrub: true
        }
      })
    });


    const hideUpBoxes = gsap.utils.toArray('.hide-up');
    hideUpBoxes.forEach(box => {
      gsap.to(box, {
        opacity: 0,
        scrollTrigger: {
          trigger: box,
          start: "center 20%",
          end: "center 2%",
          scrub: true
        }
      })
    });

// scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)
;