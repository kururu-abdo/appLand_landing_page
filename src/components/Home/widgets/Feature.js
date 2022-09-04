export default function Featrue(params) {
    


    return  (
        <div 
        
        //class="column is-one-third"
        class="level-item has-text-centered" 
        
        style={{display:"flex"  , flexDirection:"column"
     , alignItems:"center" ,textAlign:"center"
    }}
        >

<figure class="image is-64x64">

<img src={process.env.PUBLIC_URL+`${params.data.icon}`}  alt ='' /> 
</figure>
<h4>{params.data.title}</h4>
</div>

    );
}