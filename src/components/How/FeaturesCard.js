import React from 'react'
import FeaturesFormat from './FeaturesFormat'

const FeaturesCard = ({}) => {
  return (
   <>
   <FeaturesFormat 
   text1={'Discover Promising Projects'} 
   text2={"FOMOBOT helps you identify projects with great potential at their early stages, giving you a competitive edge in the market."}/>
   <FeaturesFormat 
   text1={'Real-Time Alerts'} 
   text2={"Get instant notifications on potential investment opportunities and be ahead of the game at all times."}/>
   <FeaturesFormat 
   text1={'User-Friendly Interface'} 
   text2={"Our easy-to-use interface makes crypto investing accessible to everyone, from beginners to seasoned traders."}/>
   </>
  )
}

export default FeaturesCard