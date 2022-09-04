import React  ,{useState}from 'react';
import HeroSection from "../Hearo/HeroSection";
import { useSelector, useDispatch } from 'react-redux'
import   {decrement ,increment} from '../../components/Request/requestStore';
import { features } from './data';

import Featrue from './widgets/Feature';
export default function Home() {
    // const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    // // State: a counter value
    const [counter, setCounter] = useState(0)

    // // Action: code that causes an update to the state when something happens
    // const increment = () => {
    //   setCounter(prevCounter => prevCounter + 1)
    // }

    return (
        <React.Fragment>
       <HeroSection class="block" />

       <div > &nbsp;</div>
       <span style={{ margin: '30px' }}/>
       <div
       class="level"
       style={{display:"flex"  , flexDirection:"row"
       , alignItems:"center" ,
       alignSelf:"center",
       alignContent:"center"
      }}
    //    class="columns has-text-centered is-variable is-2-mobile is-0-tablet is-3-desktop is-8-widescreen is-1-fullhd"
       
       >

        {
            features.features.map(feature =>(
                <Featrue  data={feature}></Featrue>
            ))
        }

{/* <div class="column">
<img src={process.env.PUBLIC_URL + '/icons/focus.png'} /> 
</div>



<div class="column">
<img src={process.env.PUBLIC_URL + '/icons/focus.png'} /> 
</div>

<div class="column">
<img src={process.env.PUBLIC_URL + '/icons/focus.png'} /> 
</div> */}


</div>




<div > &nbsp;</div>

<div > &nbsp;</div>

          </React.Fragment>
    );
}