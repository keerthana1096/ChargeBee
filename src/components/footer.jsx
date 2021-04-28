import React from 'react';
import '../styles/footer.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
class Footer extends React.Component{
    render(){
        return(<div className="footer"><br/>
          <br/>

            <Grid container spacing={1}>
                <Grid item xs={2}/>
                <Grid item xs={5}>
            <p className="text">Experience the Smartest Way to Automate Recurring Payments</p>
            </Grid>
            <Grid item xs={5}>
            <button  className="button1"><h6>Schedule a demo <ArrowForwardIcon/></h6> </button>
            <button  className="button2"><h6>SignUp for free <ArrowForwardIcon/></h6> </button>
            </Grid>
            </Grid> <br/>
            <br/>
             </div>)
    }
}
export default Footer;