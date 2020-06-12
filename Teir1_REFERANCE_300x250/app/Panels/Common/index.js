let border = document.getElementById('background-border');
let wrapper = document.getElementById('ad-root-wrapper');
let root = document.getElementById('adRoot');

export function animateExpand() {
  let tl = gsap.timeline({});
  tl.add([
    gsap.set(border, {className: "size-expanded"}),
    gsap.set(wrapper, {className: "wrapper-expanded"}),
    gsap.set(root, {className: "size-expanded"})
  ]);
  return tl;
}



export function animateCollapse() {
  let tl = gsap.timeline({});
  tl.add([
    gsap.set(border, {className: "size-collapsed"}),
    gsap.set(wrapper, {className: "wrapper-collapsed"}),
    gsap.set(root, {className: "size-collapsed"})
  ]);
  return tl;
}

