
import React from 'react';
import image from '../../assets/heroimage@2x.png';
import Grid from '@material-ui/core/Grid';
import '../styles/beyond.css';
import icon from '../../assets/subscription-automation.svg';

import CallMadeIcon from '@material-ui/icons/CallMade';
class Beyond extends React.Component{
    render(){
        const ColoredLine = ({ color,height,width }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: height,
                    width:width
                }}
            />
        );
  return(<div>
     <Grid container spacing={0}>
         <Grid xs={1}/>
         <Grid xs={5}>
       <div className="row">
           <div className="col-sm-1">
            <ColoredLine color='#FF7846' height='10px' width='35px'/>
           </div>
           <div className="col-sm-5">
               <h3 className="subtitle">BEYOND BILLING</h3>
           </div>
           
       </div>
       <span className="description1">
       Streamline Your <br/>Entire RevOps<br/> Workflow
       </span><br/>
       <div className="row">
           <div className="col-md-5">
       <span className="description2">
      ChargeBee automates your lead-to-ledger workflow across your revenue stack,so you can dream,deploy and enjoy the breeze while MRR keeps rolling
       </span>
       </div>
       </div>
      
         </Grid>
<Grid xs={6}>
    <div className="row">
        <div className="col-md-2">
            <p className="tab1">Subscription Automation</p>
        </div>
        <div className="col-md-2">
            <p className="tab2">Billing Experiments</p>
        </div>
        <div className="col-md-2">
            <p className="tab2">Extensible Platform</p>
        </div>
        <div className="col-md-2">
            <p className="tab2">Revenue Intelligence</p>
        </div>
    </div>
    <ColoredLine color="#D6D5D5" height="2px" />
"
  <div className="row">
    <div className="col-md-7">
       <img src={icon} alt={icon} className="icon"/>
    </div>
      <div className="col-md-4">
          <p className="automate">Automate the Order-to-Revenue Lifecycle</p>
          <p className="automate-sub">Collect recurring payments and automate your subscription billing logic -from checkout to reconciliation. </p>
          <p className="automate-sublink">Automate Subscriptions<CallMadeIcon/></p>
      </div>
  </div>
</Grid>
     </Grid>

  </div>)
    }
}
export default Beyond