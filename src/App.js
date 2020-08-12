import React from 'react';
import './App.css';
// import Home from '../components/core/Home';
import HomeContainer from './containers/HomeContainer';

import{
  BrowserRouter as Router,
  Route,
  Switch,
}
from 'react-router-dom';
class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //     cities:[],
    
  //   }
  // }
  // componentDidMount(){
  //   const url='http://localhost:3001/api/home';
  //   console.log(url);
  //   fetch(url)
  //   .then(res=>res.json())
  //   .then(json=>{
  //     console.log(json);
  //     this.setState({
  //       cities:json.cities,
       
  //     })
  //   });
  // }
  render(){
    return (
     
        <Router>
        <div>
          <Switch>
            <Route path="/">
            <HomeContainer />
            </Route>
            {/* <Route path="/">
            <Home />
            </Route> */}
            
          </Switch>
        </div>
        </Router>
       

    //   <div>{this.state.cities.map((city)=>{
    //     console.log(city);
    //     return (
    //           <div> 
    //           <img src={'http://localhost:3001/' + city.source}/>
             
    //             <p> {city.name}</p>
    //             <p> {city.slug}</p>
    //           </div>
    //     )
    //   })}
    // </div>
    );
  
}
}
export default App;