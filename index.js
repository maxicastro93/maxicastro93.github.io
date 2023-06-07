let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeDot";
}


function getPosts(){
  $.ajax({
    method:"GET",
    url:'https://blog.grupobicastro.com/wp-json/wp/v2/posts?_embed',
    success:function(data){
      console.log(data)

      const result = data;
      document.getElementById('tituloPost1').innerHTML = result[0].title.rendered;
      document.getElementById('tituloPost2').innerHTML = result[1].title.rendered;
      document.getElementById('tituloPost3').innerHTML = result[2].title.rendered;

      document.getElementById('resumenPost1').innerHTML = result[0].excerpt.rendered;
      document.getElementById('resumenPost2').innerHTML = result[1].excerpt.rendered;
      document.getElementById('resumenPost3').innerHTML = result[2].excerpt.rendered;

      
      document.getElementById('linkPost1').href = result[0].link;
      document.getElementById('linkPost2').href = result[1].link;
      document.getElementById('linkPost3').href = result[2].link;

      const fondo1 = document.querySelector('#fondo1');
      fondo1.style.backgroundImage = "url('"+result[0]._embedded['wp:featuredmedia'][0].source_url+"')";

      const fondo2 = document.querySelector('#fondo2');
      fondo2.style.backgroundImage = "url('"+result[1]._embedded['wp:featuredmedia'][0].source_url+"')";

      const fondo3 = document.querySelector('#fondo3');
      fondo3.style.backgroundImage = "url('"+result[2]._embedded['wp:featuredmedia'][0].source_url+"')";


      var tituloPost = result[0].title;
      var tituloPost = result[0].title;
      var tituloPost = result[0].title;


      return result;
    }
  })
}

getPosts();


// function sendEnquiryform(){
//   var name=$('#name').val();
//   var email=$('#email').val();
//   var message=$('#message').val();
//   $.post("send_mail.php",'name='+name+'&email='+email+'&message='+message,function(result,status,xhr) {
//           if( status.toLowerCase()=="error".toLowerCase() )
//           { alert("An Error Occurred.."); }
//           else { 
//               alert(result);
//               $('#sucessMessage').html(result);
//           }
//       })
//       .fail(function(){ alert("something went wrong. Please try again") });
// }