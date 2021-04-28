import React from "react";
import Header from './components/header'
import Footer from './components/footer';
import Subscription from './components/subscription';
import Beyond from './components/beyond';
import Deploy from './components/deploy'
class App extends React.Component {    
   render() {   
       
      return (<div> 
         <Header/>
         <Subscription/><br/>
         <Deploy/><br/>
         <Beyond/><br/>
         <br/>
       <Footer/> <br/>
         
        </div>);
   }
}
export default App;
