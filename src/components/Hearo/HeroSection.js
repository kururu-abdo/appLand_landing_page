
import  './HeroSection.css';
export default function HeroSection() {
    
return (

<section class="hero  is-medium hero-body-padding-medium
        ">
          
  <div class="hero-body ">


  <div class="columns">

  <div class="column">
  <figure class="image   is-200x150">
  <img class="is-rounded"
  src={process.env.PUBLIC_URL+"/hero.png"}
  
   
   />
</figure>




{/* <p class="title">
      Hero subtitle
    </p> */}
  
</div>


    
  <div class="column">
  <div class="title content is-normal">
    
    <p class="title">
    <h1>الان مع اب لاند</h1>
    </p>
    <p> يمكنك طلب الاتي:</p>

    
    <ul>
      <li>برمجة تطبيقات الهواتف الذكية</li>
      <li>صيانة التطبيقات   </li>
      <li>رفع التطبيقات علي متاجر التطبيقات</li>

      <li>و خدمات اخري</li>
    </ul>
  </div>
</div>






    </div>



   
   
  </div>
</section>
);
    return (
 <div class="card card-radius"

className='card'
> 
        <section class="hero  is-medium hero-body-padding-medium
        ">
          
  <div class="hero-body ">


  <div class="columns">

  <div class="column">
  <figure class="image   is-200x150">
  <img class="is-rounded"
  src={process.env.PUBLIC_URL+"/hero.png"}
  
   
   />
</figure>




{/* <p class="title">
      Hero subtitle
    </p> */}
  
</div>


    
  <div class="column">
  <div class="title content is-normal">
    
    <p class="title">
    <h1>الان مع اب لاند</h1>
    </p>
    <p> يمكنك طلب الاتي:</p>

    
    <ul>
      <li>برمجة تطبيقات الهواتف الذكية</li>
      <li>صيانة التطبيقات   </li>
      <li>رفع التطبيقات علي متاجر التطبيقات</li>

      <li>و خدمات اخري</li>
    </ul>
  </div>
</div>






    </div>



   
   
  </div>
</section>
 </div> );


}