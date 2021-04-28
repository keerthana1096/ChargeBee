import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import '../styles/header.css'
class Header extends React.Component{
    render(){
        return(
        <div className="row">
            <div className="col-md-1"/>
            <div className="col-md-11">
          <div  className="row" position="static" color="#FFFFFF"> 
              <div className="col-md-2">
             <p className="title">Chargebee</p>
             </div>
             <div className="col-md-1">
                <p className="tabs">  Product</p>
                 </div>
                 <div className="col-md-1">
                 <p className="tabs">  Pricing</p>
                 </div>
                 <div className="col-md-1">
                 <p className="tabs">  Solutions</p>
                 </div>
                 <div className="col-md-1">
                 <p className="tabs">  Customers</p>
                 </div>
                 <div className="col-md-1">
                 <p className="tabs">Resources</p>
                 </div>
                 </div>
          </div>
        </div>
        )
    }
}
export default Header;