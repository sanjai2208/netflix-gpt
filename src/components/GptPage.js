import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion' 
const GptPage= () => {
  return (
    <div className=" bg-black h-full">
     
      <GptSearchBar/>

      
      <GptMovieSuggestion/>
      
    </div>
  )
}

export default GptPage
