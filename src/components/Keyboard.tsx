import React from 'react'
import '../style/keyboard.css'


/**
 * @param
 * @returns 
 */

// initialize letter a-z array
const aTOz: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

type KeyboardProps = {
  activeLetters: string[]
  inactiveLetters: string[]
  // function return void
  addGuessedLetter: (letter: string) => void
  // optional variable boolean
  disabled?: boolean
}


function Keyboard({activeLetters, inactiveLetters, addGuessedLetter, disabled = false}: KeyboardProps) {


  return (
    <>
      <div className='keyboard-container'>
        {/* a-z button */}
        {aTOz.map(key => {
          // determine if the key is activee or inactive
          const isActive= activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);

          return (
            // add onclick into the button
            <button onClick={() => addGuessedLetter(key)} 
            className={`keyboard-btn ${isActive ? 'active' : ""} ${isInactive ? 'inactive' : ''}`} 
             // disable the button is it's already active or inactive 
            disabled={isActive || isInactive || disabled} // if the game is over, then disabled on every button
            key={key}>
              {key}
            </button>
          )
        })}
     </div>
    </>
  )
}

export default Keyboard;
