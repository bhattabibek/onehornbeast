
  
      const imageContainer = document.querySelector('.image-container');

        let isSwiping = false;
        let startX = 0;
        let scrollLeft = 0;

        imageContainer.addEventListener('touchstart', (e) => {
            if (e.touches.length === 2) { // Detect two-finger touch
                isSwiping = true;
                startX = e.touches[0].pageX - imageContainer.offsetLeft;
                scrollLeft = imageContainer.scrollLeft;
            }
        });

        imageContainer.addEventListener('touchmove', (e) => {
            if (!isSwiping) return;
            e.preventDefault();
            const x = e.touches[0].pageX - imageContainer.offsetLeft;
            const walk = (x - startX) * 2; // Adjust swipe sensitivity
            imageContainer.scrollLeft = scrollLeft - walk;
        });

        imageContainer.addEventListener('touchend', () => {
            isSwiping = false;
        });



  const productContainer = document.querySelector('.product-container');

  const leftArrow = document.querySelector('.arrow-left');
  const rightArrow = document.querySelector('.arrow-right');

  const scrollAmount = 270; // Adjust the width as necessary

  // Scroll left when left arrow is clicked
  leftArrow.addEventListener('click', () => {
  console.log("hi")
    productContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  });

  // Scroll right when right arrow is clicked
  rightArrow.addEventListener('click', () => {
    console.log("hi")
    productContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  });