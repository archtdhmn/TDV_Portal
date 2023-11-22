function openNav() {
  document.getElementById("menu").style.width = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("menu").style.width = "0%";
}

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("pitv");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    // image.style.transform = "rotate(" + window.pageXOffset/2 + "deg)";
}


//$(document).mousemove(function(e) {
//
//  const cursor = $('.cursor');
//  const target = $(event.target);
//  
//  // update position of cursor
//  cursor.css('left', e.pageX-10).css('top', e.pageY-10);
//  
//  const isLinkTag = target.is('a');
//  const isHovered = cursor.hasClass('.enlarged');
//  
//  // toggle the cursor class if necessary 
//  if(isLinkTag && !isHovered) {
//  
//    cursor.addClass('.enlarged');
//
//  } else if(!isLinkTag && isHovered) {
//  
//    cursor.removeClass('.enlarged');
//  
//  }
//  
//});
//
//$(document).mouseleave(function(e) {
//
//  const cursor = $('.cursor');
//  cursor.hide()
//
//});
//
//$(document).mouseenter(function(e) {
//
//  const cursor = $('.cursor');
//  cursor.show()
//
//});


var cursor = document.querySelector('.cursor');
var links = document.querySelectorAll('a');
var btn = document.querySelector('.alt-nav-btn');
var hov = document.querySelector('#hoverable');
var bub = document.querySelectorAll('.image-bubble');
var baskets = document.querySelectorAll('.utw-link');
var nav = document.querySelectorAll('.navigation');
var courage = document.querySelector('.doers-courage');

window.addEventListener("mousemove", ola);

function ola(e){
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
}

links.forEach(link => {
    link.addEventListener("mouseover", () =>
                         {
        cursor.classList.add('enlarged');
    })
    
     link.addEventListener("mouseleave", () =>
                         {
        cursor.classList.remove('enlarged');
    })
});

btn.addEventListener("mouseover", () =>
                         {
        cursor.classList.add('btn-hover');
    })
    
     btn.addEventListener("mouseleave", () =>
                         {
        cursor.classList.remove('btn-hover');
    });

baskets.forEach(link => {
    link.addEventListener("mouseover", () =>
                         {
        cursor.classList.add('baskets-enlarged');
    })
    
     link.addEventListener("mouseleave", () =>
                         {
        cursor.classList.remove('baskets-enlarged');
    })
});

nav.forEach(link => {
    link.addEventListener("mouseover", () =>
                         {
        cursor.classList.add('image-enlarged');
        
    })
    
     
    
     link.addEventListener("mouseleave", () =>
                         {
        cursor.classList.remove('image-enlarged');
    })
});



hov.addEventListener("mouseover", () =>
                         {
        cursor.classList.add('image-enlarged');
    })

    
     hov.addEventListener("mouseleave", () =>
                         {
        cursor.classList.remove('image-enlarged');
    });

courage.addEventListener("mouseover", ()=>
                        {
    cursor.classList.add('pillars');
})

courage.addEventListener("mouseleave", ()=>{
    cursor.classList.remove('pillars');
})

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    bub.style.top = (y - 300) + 'px';
    bub.style.left = (x - 480) + 'px';
};




