import React from 'react';
import'../styles/subscription.css'
import image from '../../assets/heroimage@2x.png';
import freshworks from  '../../assets/logo/freshworks.png';
import goop from '../../assets/logo/goop.png';
import study from '../../assets/logo/study.png'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
class Subscription extends React.Component{
    render(){
        console.log(image)
        return(<div>
         <div className="row" >
             <div className="col-md-1"/>
             <div className="col-md-4">
           <p className="descript1">  Subscription <br/>Billing & Revenue Operations </p>
           <p className="descript2">For Businessess Designed for Growth</p>
           <h6 className="descript3">Chargebee gives you the freedom to deploy the right growth strategies, while automating everything else in your order-to-revenue workflow. </h6>
           <button  className="button1"><h6>Get a Consultation <ArrowForwardIcon/></h6> </button>
            <button  className="button2"><h6>SignUp for free <ArrowForwardIcon/></h6> </button><br/>
            <br/>
            <p className="descript4"> Trusted by leading brands to process over<br/> $3Bn in recurring revenue.</p>
              <div className="row">
              <div className="col-md-3">
               <img src={goop} height="40px" width="80px" />
                  </div>
                  <div className="col-md-4">
               <img src={study} height="40px" width="120px" />
                  </div>
                  <div className="col-md-3">
               <img src={freshworks} height="40px" width="120px" />
                  </div>
              </div>
             </div>
             <div className="col-md-6">
              <img src={image} height="500px" width="650px" style={{marginTop:"10px",marginLeft:0}}/> 
             </div>
         </div>

        </div>)
    }
}

export default Subscription;