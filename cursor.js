require("@babel/core").transform("code", options);

const $ball = document.querySelector('.cursor__ball');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($ball, .4, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })

// Hover an element
function onMouseHover() {
  TweenMax.to($ball, .3, {
    scale: 5
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}