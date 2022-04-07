import React from 'react'
import CardHats from './CardHats'
import CardImage from './CardImage'
import CardInfo from './CardInfo'

function FeaturesSection() {
  return (
    <div className="container">
        <div className="grid-system section">
            <CardHats/>
            <CardInfo/>
        </div>
        <CardImage/>
    </div>
  )
}

export default FeaturesSection