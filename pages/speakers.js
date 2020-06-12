import React, { Component } from 'react';
import Link from 'next/link';
import SpeakerCard from '../src/SpeakerCard';
class Speakers extends Component {



  // static getRepartidoresURL() {
  //   if (process.env.NODE_ENV === "production") {
  //     return process.env.RESTURL_SPEAKERS_PROD;
  //   } else {
  //     return process.env.RESTURL_SPEAKERS_DEV;
  //   }
  // }

  static async getInitialProps() {
    let response = await fetch("https://5ec86440155c130016a909c5.mockapi.io/repartidor");
      let data = await response.json();
    return {
      repartidores: data
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      repartidores: props.repartidores
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card-deck">
            {this.state.repartidores.map((r) =>
              <div className="card col-4 cardmin margintopbottom20" key={r.id}>
                <SpeakerCard repartidor={r} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Speakers;