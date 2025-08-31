import React, {useContext} from 'react';
import { highscore } from '../Context/Context';


function Finalpage() {

    const value = useContext(highscore)

    return (
        <>
         <div>
           <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center px-4">
      <div className="bg-white text-gray-800 rounded-xl shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">📊 Highest score</h1>

        <div className="text-6xl mt-8 font-extrabold text-indigo-700 mb-6">
        <button  className='border-2 bg-indigo-100 pl-8.5 pr-8.5 border-indigo-400 rounded-xl p-1.5 pb-2'>{value.highscorevalue}</button>
        <div>
          <button className='border-2 text-2xl font-medium bg-indigo-100 pl-4.5 pr-4.5 border-indigo-400 rounded-xl active:text-white active:bg-indigo-500 active:border-indigo-400 transition duration-100  p-1.5 pb-2' onClick={value.reset}>Reset</button>
        </div>
        </div>
        <div className="bg-indigo-100 rounded-lg p-4">
          <p className="text-indigo-700 font-medium">
           In this section you can visit your highest score
          </p>
        </div>
      </div>
    </div>
    <footer className='bg-white text-2xl  w-full text-center pt-3 pb-4.5'>
    © {new Date().getFullYear()} Simple react counter app. All rights reserved.
          </footer>
         </div>
        </>
    );
} 

export default Finalpage;