
import { contacts } from './data';
import './Footer.css';
export default function Footer() {




    return  (

//         <footer class="footer
//         has-background-grey-lighter
//         has-text-centered 
//         is-flex-align-items-flex-end mt-auto
//         "
        
     
//         >

// <div class="columns">
//   <div class="column">
//   <div class="content ">
//   <div class="title">
// اتصل بنا
// </div>
// <div  

// style={{display:"flex"  , flexDirection:"row"}}
// ><span class="icon">
//   <i class="fas fa-phone"></i>
// </span>   <h5>0995769544</h5> </div>

// <div style={{display:"flex"  , flexDirection:"row"}}><span class="icon">
//   <i class="fas fa-home"></i>
// </span>   <h5>abdurrahim.hassan@gmail.com</h5> </div>






//   </div>
//   </div>
  
//   {/* <div class="column">
//     Third column
//   </div>
//   <div class="column">
//     Fourth column
//   </div> */}
// </div>





// {/* <div class="content has-text-centered">


//     <small>
//       <span>  <p class="has-text-centered">اب لاند للدعم الفني ،  2022</p></span>
//       <br />
//     </small>


//     </div> */}
// </footer>


<footer class="footer-distributed">

<div class="footer-left">

  <h3>آب<span>لاند</span></h3>

  {/* <p class="footer-links">
    <a href="#" class="link-1">Home</a>
    
    <a href="#">Blog</a>
  
    <a href="#">Pricing</a>
  
    <a href="#">About</a>
    
    <a href="#">Faq</a>
    
    <a href="#">Contact</a>
  </p> */}

  <p class="footer-company-name">App Land © 2022</p>
</div>

<div class="footer-center">

  <div>
    <i class="fas fa-map-marker"></i>
    <p> الخرطوم  ، السودان</p>
  </div>

  <div>
    <i class="fas fa-phone"></i>
    <p>{contacts.contacts.phone}</p>
  </div>

  <div>
    <i class="fas fa-envelope"></i>
    <p><a href={ `mailto:${contacts.contacts.mail}`}
   
    > 
    {contacts.contacts.mail}</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>عن الخدمة</span>
اب لاند سبورت عبارة عن خدمة للدعم الفني بكل ما تصل بتطبيقات الهواتف الذكية من  تطوير  ،صيانة  ، و رفع علي متاجر التطبيقات.

  </p>

  <div class="footer-icons">

  <span class="icon">  <a href="#"><i class="fas fa-facebook"></i></a></span>
  <span class="icon">    <a href="#"><i class="fas fa-twitter"></i></a> </span>
  <span class="icon">  <a href="#"><i class="fas fa-linkedin"></i></a> </span>
  <span class="icon">  <a href="#"><i class="fas fa-github"></i></a> </span>

  </div>

</div>

</footer>

    );
}