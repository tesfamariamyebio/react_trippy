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
        {/* <div
          className='row'>
          <div
            className={'col-lg-4 col-md-8 col-12'}>
            <p>
              Je vérifie que les 2 mots : Voleur et <span style={{fontFamily: 'serif' }}>Voleur</span> ont une police d'écriture différente
            </p>
          </div>
          <div
            className='col-lg-8 col-md-4 col-12'>
            Une autre phrase
          </div>
        </div> */}
              The cities that you might like them
              <Card /> 
   </div>
     
         );
     }

 }
 export default HomeContainer;