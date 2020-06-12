import React, { Component } from 'react'

export default class Repartidor extends Component {

 static async getInitialProps({ query }) {
  let response = await fetch(`https://5ec86440155c130016a909c5.mockapi.io/repartidor/${query.speakerId}`);
  let data = await response.json();
  return {
   repartidor: data
  }
 }

 render() {
  return (
   <div className='container'>
    <div className="row">
     <h2 className='margintopbottom20'>
      {this.props.repartidor.rep_nom} {this.props.repartidor.rep_ape}</h2>
     <p className='margintopbottom20'>{this.props.repartidor.rep_dni}</p>
    </div>
   </div>
  )
 }
}
