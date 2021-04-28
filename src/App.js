import React from "react";
import Header from './components/header'
import Footer from './components/footer';
import Subscription from './components/subscription';
import Beyond from './components/beyond'
class App extends React.Component {    
   render() {   
       
      return (<div> 
         <Header/>
         <Subscription/><br/>
         
         <Beyond/><br/>
         <br/>
       <Footer/> <br/>
         <br/>
         <br/>
        </div>);
   }
}
export default App;
