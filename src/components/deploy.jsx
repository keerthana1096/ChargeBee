import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import CallMadeIcon from '@material-ui/icons/CallMade';
import '../styles/deploy.css'
class Deploy extends React.Component{
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
            <Grid xs={7}>
         <div className="row">
           <div className="col-sm-1">
            <ColoredLine color='#FF7846' height='10px' width='35px'/>
           </div>
           <div className="col-sm-5">
               <h3 className="deploytitle">DEPLOY STRATEGIES</h3>
           </div>
           </div>
           <div className="row">
               <div className="col-md-5">
                   <Card>
                       <CardContent>
                        <p className="card1">What does this challenge make possible?</p>
                        <p className="cardcontent1">A changing world requires an evolving business strategy. Chargebee makes it easy to adapt and deploy the next strategy to grow your subscription revenue</p>
                       </CardContent>
                   </Card>
                   </div>
                   <div className="col-md-5">
                       <Card >
                      <CardContent>
                        <p className="cardtitle2">Roll<p className="cardtitlep">New Pricing</p></p>
                        <p className="cardcontent2">Improve value-price fit.<br/> Iterate and launch new<br/> pricing structures without the dev effort.  </p>
                        <br/>
                        <br/>
                        <p className="automate-sublink">Change pricing<CallMadeIcon/></p>
                      </CardContent>
                       </Card>
                   </div>
                   </div>
                   </Grid>
                   <Grid xs={4}>
                       <div className="row">
                   
                   <div className="col-md-4">
                       <Card className="card2">
                  <CardContent><br/><br/>
                  <br/>
                  <br/>
                  </CardContent>
                       </Card>
                   </div>
                   </div>
                   </Grid>
          
         
       </Grid>
         
        </div>)
    }
}
export default Deploy;