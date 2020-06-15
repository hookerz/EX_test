"use strict";
import {smoothify, patchChromeSVG} from "display-browser-quirks";
import {CustomEase} from "gsap/dist/CustomEase";
import {DrawSVGPlugin} from "gsap/dist/DrawSVGPlugin";
import bowser from "bowser";
function ctaOverHandler(e) {
    console.log('collapsed cta over')
    TweenMax.fromTo("#ctaBG", .05, {backgroundColor:"#4285f4"}, {backgroundColor:"#1a73e8"});
}

function ctaOutHandler(e) {
    console.log('collapsed cta out')
    TweenMax.to("#ctaBG", .05, {backgroundColor:"#4285f4"});
}

function bind() {
    document.querySelector('.cta').addEventListener('mouseover', ctaOverHandler);
    document.querySelector('.cta').addEventListener('mouseout', ctaOutHandler);
    document.querySelector('.cta').addEventListener('click', ctaOutHandler);
}

export function animateIn() {

  smoothify(document.querySelectorAll('#phone:not(.no-smoothify)'));


    // add no-smoothify to the class of any DIV you DO NOT want smoothed.
    //smoothify(document.querySelectorAll('div:not(.no-smoothify)'));
    //patchChromeSVG (document.querySelectorAll('svg path,svg circ,svg rect, svg g'));
    document.body.style.opacity = 1;
    let content = document.querySelector('.content');
    let startHandler = function (e) {
        console.log('Standard animateIn START');
    };
    let completeHandler = function (e) {
        bind();
        console.log('Standard animateIn COMPLETE');
    };
        console.log('!!! BROWSER CHECK', bowser.name, bowser.safari, parseFloat(bowser.version));
    if (bowser.safari === true && parseFloat(bowser.version) >= 12) {
      //  console.log("!!!!! safari timing hack");
       // window.addEventListener('blur', function () {
           // console.log("!!!!! Timing Hack Engaged");
          //  gsap.ticker.useRAF(false);
       // });
    }

    let tl = gsap.timeline({
        id: 'StandardRootTimeline',
        onStart: startHandler,
        onComplete: completeHandler,
    });
    window.endframe = function () {
        tl.seek(15)
    };
    tl.add([
       gsap.to(content,  {duration:1,  opacity: 1})
    ], 0);

    tl.add([
      gsap.from("#rightColumnRoot", 1.6, {x: "+=150", ease: Power4.easeOut }),
    ], 0);

    tl.add([
      gsap.from(".phoneIn", 1.6, {x: "+=300", ease: Power4.easeOut }),
    ], .1);

    tl.add([
      gsap.from("#message01", .75, {autoAlpha:0, y:"+=25", ease: Power3.easeOut }),
    ], 1.7);

    return tl;
}
