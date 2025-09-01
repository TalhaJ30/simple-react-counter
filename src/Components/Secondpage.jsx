import React, { useContext } from 'react';
import { counterContext } from '../Context/Context';

function Secondpage() {

  const value = useContext(counterContext);

  return (
    <>
      <div>

        <div className="min-h-screen bg-gradient-to-tr scroll-smooth from-indigo-500 to-purple-600 flex items-center justify-center px-4">
          <div className="bg-white text-gray-800 rounded-xl shadow-xl p-8 w-full max-w-md text-center">
            <h1 className="text-3xl font-bold mb-4 text-indigo-600">📊 Total Counter</h1>

            <div className="text-6xl font-extrabold text-indigo-700 mb-6">
              {value.result}
            </div>

            <div className="bg-indigo-100 rounded-lg p-4">
              <p className="text-indigo-700 font-medium">
                Great job! Your total count is looking strong 💪
              </p>
            </div>
          </div>
        </div>
        <footer className='bg-white text-xl w-full text-center pt-1 pb-1.5'>
          Highest score information
        </footer>

      </div>
    </>
  );
}

export default Secondpage;