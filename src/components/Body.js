import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
const Body = () => {

    const appRouter = createBrowserRouter([
     {
        path: "/",
        element: <Login/>
     }  , 
     {
        path: "/browse",
        element: <Browse/>
     }   
    
    ])

  return (
    <div>
      <img
          className="h-screen w-[100%] absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_medium.jpg"
          alt="bg"
        />
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
