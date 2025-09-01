import { useEffect, useState } from 'react';
import { counterContext } from './Context/Context';
import Frontpage from './Components/Frontpage';
import Secondpage from './Components/Secondpage';
import Finalpage from './Components/Finalpage';
import { highscore } from './Context/Context';

function App() {

  const [result, setResult] = useState(0);

  const plus = () => {
    setResult((result) => result + 1);
    
    if (result >= highscorevalue) {
       sethighscorevalue((para) => para + 1);
    }
   else{
    
   }
  
  };

  useEffect(() => {
    if (result >= 1000) {
      setmessage('Great job! Your total count is looking strong 💪')
    } else if (result >= 500) {
      setmessage('Your score is looking strong 👌 , but you still need to improve it.')
    } else if (result >= 100) {
      setmessage('your score is looking good ❤️')
    } else if (result >= 50) {
      setmessage('your score is looking nice 🤩')
    } else if (result >= 25) {
      setmessage('your score is looking great ⭐')
    } else if (result >= 10) {
      setmessage('your score is looking better 👍')
    }
    else{
      setmessage(`you score is ${result} please increase your score.`)
    }
  })  

  const [message , setmessage] = useState('hello');

  const reset = () => {
    if (confirm(`you highest score is ${highscorevalue} and your new score is ${result} and are you sure to reset you all the informations`)) {
      setResult(0);
      sethighscorevalue(0);
    }
    else{
      console.log('The user has canceled the reset informations')
    }
  }

  const minus = () => {
    setResult((result) => (result > 0 ? result - 1 : 0));
  };

  const [highscorevalue, sethighscorevalue] = useState(0);


  return (

    <>
      <counterContext.Provider value={{ result, setResult , message }}>
        {/* this is the secondpage */}
        <div>
          <Frontpage />
        </div>
        <div className="min-h-screen scroll-smooth flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-4">
          <div className="bg-white text-gray-800 rounded-xl shadow-lg p-8 w-full max-w-sm text-center">
            <h1 className="text-3xl font-semibold mb-6">ReactJS Counter</h1>
            <div className="text-6xl font-medium mb-8"><span className='font-normal'>{result}</span></div>
            <div className="flex justify-center gap-6">
              <button
                onClick={plus}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1.5 px-5 rounded-lg transition-transform transform hover:scale-105 text-2xl active:scale-95"
              >
                +
              </button>
              <button
                onClick={minus}
                className="bg-red-500 text-2xl hover:bg-red-600 text-white font-bold py-1.5 px-5 rounded-lg transition-transform transform hover:scale-105 active:scale-95"
              >
                -
              </button>
            </div>

          </div>

        </div>
        <footer className='bg-white text-xl w-full text-center pt-1 pb-1.5'>
          In this section you can check your total counters
        </footer>

        <div id='Total'>
          <Secondpage />
        </div>
      </counterContext.Provider>
      <highscore.Provider value={{ highscorevalue, reset }}>
        <div className='scroll-smooth' id='Score'>
          <Finalpage />
        </div>
      </highscore.Provider>


    </>

  );
}

export default App;