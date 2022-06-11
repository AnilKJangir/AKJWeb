let cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,

      onRepeat: function() {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY
          }
        })
      }
    });

    window.addEventListener('mousemove', function(e){
      console.log(e);
      mouseX = e.pageX;
      mouseY = e.pageY;
    })

cursorScale.forEach(single => {
  single.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow');
    cursor.classList.remove('grow-small');
  })
  single.addEventListener('mousemove', () => {
    cursor.classList.add('grow');
    if(single.classList.contains('small')){
      cursor.classList.remove('grow');
      cursor.classList.add('grow-small');
    }
  })
})