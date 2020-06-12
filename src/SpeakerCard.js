import React from 'react'
import Link from 'next/link';

const SpeakerCard = (props) => {
 return (
  <div>
   <img className="card-img-top" src={`http://placehold.it/350x250`} />
   <div className="card-body">
    <Link
     href={{
      pathname: "/repartidor", query:
      {
       speakerId: props.repartidor.id
      }
     }}
     as={`repartidor/${props.repartidor.id}`}>
     <a className="btn btn-lg btn-block btn-outline-primary">
      Details</a>
    </Link>

    <h4 className="card-title">{props.repartidor.rep_nom} {props.repartidor.rep_ape} </h4>
    <p className="card-text">{props.repartidor.rep_dni}</p>
   </div>
  </div>
 );
}

export default SpeakerCard
