window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// testimonials

const testimonialsContainer = document.querySelector('.testimonials-container'),
  testimonial = document.querySelector('.testimonial'),
  userImage = document.querySelector('.user-img'),
  username = document.querySelector('.username'),
  role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Dr Mrs Adebola, Lagos',
    position: 'Customer',
    photo:
      'Image/IMG-20210428-WA0016.jpg',
    text:
      "Good day Mrs Loveth, this is my testimony on behalf my mother who has been on medication since Jan 2014. I have spent so much on her drug to no avail. On the 20/2/2019, the Holy Spirit draw my attention to somebody's testimony on Global Village Extra who was down with diabetes. A banker who was already on wheel chair due to diabetes and was totally healed, so I urgently called and place an order for Complete Packs for my Mother on the 26/2/19. Today my mother is very OK no more drugs. Thank U Mrs Loveth for allowing urself to be used to save life. I have given ur number to some people .Thank God 4 ur life. More wisdom from God for more research."   
  },
  {
    name: 'Mrs Gloria, Enugu',
    position: 'Customer',
    photo: 'Image/IMG-20210428-WA0016.jpg',
    text:
      "To whom it may concern, I just want to write a few words to say how pleased I am since I've started using the product. I used to be very tired and stressed out all of the time. When I was introduced to it I was very skeptical about using it, but said, what the hell, it can't make me any worse. So I did. I have been taking it for about 3 weeks now and I have found great energy since i started using it. I would recommend this to anyone who feels like this as I've had great results.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);

//scroll to top 

$(document).ready(function() {
  $(window).scroll(function() {
  if ($(this).scrollTop() > 20) {
  $('#toTopBtn').fadeIn();
  } else {
  $('#toTopBtn').fadeOut();
  }
  });
  
  $('#toTopBtn').click(function() {
  $("html, body").animate({
  scrollTop: 0
  }, 1000);
  return false;
  });
  });

// aos animate

// AOS.init({
//   duration: 1000,
//   easing:'ease-in-cubic',
//   delay: 100,
//   offset: 300
// });



// read more

var i=0

function read(){
  if(!i){
    document.getElementById("more").style.display = "inline";;
    document.getElementById("read").innerHTML = "Read Less";

    i=1;
  }
  else{
    document.getElementById("more").style.display = "none";
    document.getElementById("read").innerHTML = "Read More";

    i=0;
  }

}


var i=0

function readSNC(){
  if(!i){
    document.getElementById("moreSNC").style.display = "inline";;
    document.getElementById("readSNC").innerHTML = "Read Less";

    i=1;
  }
  else{
    document.getElementById("moreSNC").style.display = "none";
    document.getElementById("readSNC").innerHTML = "Read More";

    i=0;
  }

}




var i=0

function readSIC(){
  if(!i){
    document.getElementById("moreSIC").style.display = "inline";;
    document.getElementById("readSIC").innerHTML = "Read Less";

    i=1;
  }
  else{
    document.getElementById("moreSIC").style.display = "none";
    document.getElementById("readSIC").innerHTML = "Read More";

    i=0;
  }

}


var i=0

function readSCC(){
  if(!i){
    document.getElementById("moreSCC").style.display = "inline";;
    document.getElementById("readSCC").innerHTML = "Read Less";

    i=1;
  }
  else{
    document.getElementById("moreSCC").style.display = "none";
    document.getElementById("readSCC").innerHTML = "Read More";

    i=0;
  }

}


// form


function submitForm() {
  document.contact-form.submit();
  document.contact-form.reset();
}



// aos animate

AOS.init({
  duration: 1000,
  easing:'ease-in-cubic',
  delay: 100,
  offset: 300
});