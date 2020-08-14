import React from 'react';
import Api from '../utils/Api';
import Card from '../components/city/Card';
 class HomeContainer extends React.Component{
   componentDidMount(){
     console.log('mount')
     Api.getHome();
   }
     render(){
         return(
        <div
            className='container-fluid'
            style={{
              fontFamily: 'Montserrat'
            }}>
          
              The cities that you might like them
              <Card /> 
        </div>
     
         );
     }

 }
 export default HomeContainer;