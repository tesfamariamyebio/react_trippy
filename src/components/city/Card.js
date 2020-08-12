import React from 'react';
import styled from 'styled-components';
const Container=styled.div`

`;
class Card extends React.Component{
  constructor(props){
    super(props);
    this.state={
      cities:[],
    
    }
  }
  componentDidMount(){
    const url='http://localhost:3001/api/home';
    console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(json=>{
      console.log(json);
      this.setState({
        cities:json.cities,
       
      })
    });
  }
  render(){
    return (
      <div>{this.state.cities.map((city)=>{
        console.log(city);
        return (
              <div> 
              <img src={'http://localhost:3001/' + city.source}/>
             
                <p> {city.name}</p>
                <p> {city.slug}</p>
              </div>
        )
      })}
    </div>
    );
  
}
}
export default Card;