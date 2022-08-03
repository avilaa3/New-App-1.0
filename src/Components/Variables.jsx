import React from 'react'

const Variables = () => {

    const saludo = 'Regards from my app';
    const imagen = 'https://media.istockphoto.com/photos/high-angle-view-asian-chinese-womans-hand-on-mobile-app-for-online-picture-id1300476665?k=20&m=1300476665&s=612x612&w=0&h=J5PPqAdqXC8ehmaoHRIm2g6qFT3wySM-UKLnksyvtF4='
  return (
    <div>
        <h2>New component {saludo}</h2>
        <img src={imagen} />
    </div>
  )
}

export default Variables