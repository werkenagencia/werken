document.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    
    document.querySelector(".parallax-img.one").style.transform = `translateY(${scrollTop * 0.1}px)`;
    document.querySelector(".parallax-img.two").style.transform = `translateY(-${scrollTop * 0.1}px)`;
    document.querySelector(".parallax-img.three").style.transform = `translateY(-${scrollTop * 0.1}px)`;

    });
  