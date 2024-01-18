import React from 'react'
import './Greeting.css'






 export const monthContext = React.createContext()

const month = new Date();
let mm = month.getMonth()
let hh = month.getHours()

let x = hh >= 12 ? "Afternoon": "Morning"

// switch (x) {
//     case x < 12:
//         hh = 'morning'
        
//         break;

//     default:
//         break;
// }
const Greeting = () => {
  return (
         <div className='greeting-container'>
            <monthContext.Provider value={mm}>
                <h1>Good {x}!</h1>
                <p>You've got some task to do .</p>
            </monthContext.Provider>
                
        </div>
   
  )
}

export default Greeting
