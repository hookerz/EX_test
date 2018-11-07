"use strict";
import {smoothify, patchChromeSVG} from "display-browser-quirks";
import bowser from "bowser";
function ctaOverHandler(e) {
    console.log('collapsed cta over')
}

function ctaOutHandler(e) {
    console.log('collapsed cta out')
}

function bind() {
    document.querySelector('.catch-all').addEventListener('mouseover', ctaOverHandler);
    document.querySelector('.catch-all').addEventListener('mouseout', ctaOutHandler);
    document.querySelector('.catch-all').addEventListener('click', ctaOutHandler);
}

export function animateIn() {
    //smoothify(document.querySelectorAll('div'));
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
    console.log("!!!!! safari timing hack");
    window.addEventListener('blur', function () {
        console.log("!!!!! Timing Hack Engaged");
        TweenMax.ticker.useRAF(false);
    //    TweenMax.ticker.fps(60);
        TweenLite.lagSmoothing(0);
    });
    }

    let tl = new TimelineMax({
        id: 'StandardRootTimeline',
        onStart: startHandler,
        onComplete: completeHandler,
    });
    window.endframe = function () {
        tl.seek(15)
    };
    tl.add([
       TweenMax.to(content, 0.01, {opacity: 1})
    ], 0);

    CustomEase.create("swipe", "M0,0,C0.452,0,-0.02,1,1,1");
    CustomEase.create("bouce", "M0,0 C0.052,0 0.06,-0.252 0.14,-0.134 0.164,-0.098 0.278,1 1,1");
    let swipeDur = 0.8;

    // MorphSVGPlugin.convertToPath("#circPath");
	  // MorphSVGPlugin.convertToPath("#loz_ec");
    tl.set("#loz", {autoAlpha:0});

    tl.addLabel("start");
    tl.staggerFrom("#copy1 > g", 1, {autoAlpha:0, y:20, ease:Power3.easeOut}, 0.2, "start");
    // tl.from("#copy1_sub", 1, {autoAlpha:0, y:20, ease:Power3.easeOut}, "+=.15");

    tl.addLabel("frame2", "start+=2.5");
    tl.to("#copy1, #copy1_sub", 0.6, {autoAlpha:0, ease:Power2.easeIn}, "frame2");
    tl.staggerFrom("#copy2 > g", 0.6, {autoAlpha:0, y:20, ease:Power3.easeOut}, 0.2, "frame2+=0.6");
    tl.fromTo("#UIImage", swipeDur, {x:-346}, {x:-231, ease:"swipe"}, "frame2+=0.6");

    tl.addLabel("frame3", "frame2+=2");
    tl.to("#copy2_ln1", 0.4, {autoAlpha:0}, "frame3");
    tl.to("#UIImage", swipeDur, {x:-116, ease:"swipe"}, "frame3");
    tl.from("#copy3", 0.6, {autoAlpha:0, y:13, ease:Power3.easeOut}, "frame3+=0.4");

    tl.addLabel("frame4", "frame3+=1.5");
    tl.to("#copy3", 0.4, {autoAlpha:0}, "frame4");
    tl.to("#UIImage", swipeDur, {x:-1, ease:"swipe"}, "frame4");
    tl.from("#copy4", 0.6, {autoAlpha:0, y:13, ease:Power3.easeOut}, "frame4+=0.4");

    tl.addLabel("frame5", "frame4+=1.6");
    tl.to("#copy4, #copy2_ln2", 0.5, {autoAlpha:0}, "frame5");
    tl.to("#UIImage", swipeDur, {x:165, ease:"swipe"}, "frame5");
    tl.staggerFrom("#copy5 > g", 1, {autoAlpha:0, y:20, ease:Power3.easeOut}, 0.2, "frame5+=0.5");

    tl.addLabel("frame6", "frame5+=2.5");
    tl.to("#copy5, #YTMusicLogo_sm", 0.4, {autoAlpha:0}, "frame6");
    tl.from("#icon, #iconMask", 0.4, {autoAlpha:0}, "frame6+=0.4");
    tl.from("#logoText", 0.01, {autoAlpha:0}, "frame6+=0.9");
    tl.add([
      TweenMax.to("#circPath", .9, {transformOrigin:"50% 50%", x:"-=86", rotation:-360, morphSVG:"#loz_shape", ease:Power3.easeInOut}),
      TweenMax.to("#playTri", .9, {transformOrigin:"50% 50%", scale:.79, x:"-=86", rotation:-360, ease:Power3.easeInOut}),
      TweenMax.to("#innerCirc", .9, {autoAlpha:0, x:"-=86", ease:Power3.easeInOut}),
      TweenMax.to("#iconMask", .9, {x:"-=105", ease:Power3.easeInOut}),
      TweenMax.from("#logoText", .9, {x:-80, ease:Power3.easeInOut}),
    ], "frame6+=1");
    tl.to("#YTMusicLogo_lg, #icon", 0.75, {y:-36, ease:"bouce"}, "frame6+=2");
    tl.staggerFrom("#tag > g", 1, {autoAlpha:0, y:10, ease:Power3.easeOut}, .12, "frame6+=2.1");
    tl.from("#legal", 1, {autoAlpha:0}, "frame6+=2.1");
    return tl;
}
