import React from 'react'
import '../style/word.css'

/**
 * @param
 * @returns 
 */

type HangmanWordProps = {
  guessedLetter: string[]
  wordToGuess: string
  reveal?: boolean
}

function HangmanWord({ guessedLetter, wordToGuess, reveal=false }:HangmanWordProps) {

  return (
    <>
      <div className='show-word-underline'>

        {wordToGuess.split("").map((letter , index) => {
            // add underlining on each word
            return ( 
                <span key={index}
                    style={{ borderBottom: '.1em solid black', padding: '0 0.25em' }}>
                      {/* visible the word */}
                      {/* add reveal = true */}
                      <span style={{ visibility: guessedLetter.includes(letter) || reveal
                          ? 'visible' 
                          : 'hidden',
                          // add specific color when game is over and lose
                          color: !guessedLetter.includes(letter) && reveal ? "red" : "black"
                          }}
                      >
                        {letter}
                      </span>
                </span>
              )
        })}
      </div>
    </>
  )
}

export default HangmanWord
