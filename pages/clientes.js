import React, { Component } from 'react'

export default class clientes extends Component {
 static async getInitialProps() {
  // return ({
  //   time: new Date().toISOString()
  // })
  // return new Promise((resolve, reject) => {
  //   setInterval(() => {
  //     resolve({ time: new Date().toISOString() })
  //   }, 3000);
  // })

  let response = await fetch("https://5ec86440155c130016a909c5.mockapi.io/cliente");
  let data = await response.json();
  return {
   clientes: data
  }
 }

 constructor(props) {
  super(props);
  this.state = {
   clientes: props.clientes
  }
 }

 componentDidMount() {
 }

 componentWillUnmount() {
 }


 render() {
  return <ul>
   {this.state.clientes.map(c => (<li key={c.id}>{c.cli_nom} {c.cli_ape}</li>))}
  </ul>
 }
}
