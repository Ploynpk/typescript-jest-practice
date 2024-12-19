import React, { useState, useEffect, useCallback } from 'react';
import words from './wordList.json';
import './App.css';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';

/**
 * @param 
 * @returns 
 */

// function to handle getting new word
const getWord = () => {
  // use math.floor to round on the math.random to random words from the list 
  return words[Math.floor(Math.random() * words.length)];
}

const App: React.FC = () => {
  // word to guess 
  // call the random words from the list
  const [wordToGuess , setWordToGuess] = useState(getWord)
  console.log('word is:', wordToGuess);
  
  // store the guessed letter into the array of string to be able keep track on a letter
  const [guessedLetter , setGuessedLetter] = useState<string[]>([]);
  console.log('guessing -->', guessedLetter);

  const inCorrectLetters = guessedLetter.filter(letter => !wordToGuess.includes(letter));

  // lose and win state // bodypart is 6
  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordToGuess.split('').every(letter => guessedLetter.includes(letter));

  // function to handle the guessed letter
  // to disable the keyboard // passin loser and winner
  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetter.includes(letter) || isLoser || isWinner) return;

    setGuessedLetter(currentLetters => [...currentLetters, letter])
  },[guessedLetter, isLoser, isWinner]);

  // handle the keyboard
  useEffect(() => {
    const keyboardHandler = (e: KeyboardEvent) => {
        const key = e.key;
        if (!key.match(/^[a-z]$/)) return;
        e.preventDefault();
        addGuessedLetter(key);
    }

    document.addEventListener('keypress' , keyboardHandler)
    
    return () => {
      document.removeEventListener('keypress' , keyboardHandler)
    }
  }, [guessedLetter]);

  // handle the refresh the page
  useEffect(() => {
    const refreshHandler = (e: KeyboardEvent) => {
          const key = e.key;
          //keyboard's Enter
          if (key !== 'Enter') return;
          e.preventDefault();
          // clear out of the list word from the guessedLetter array
          setGuessedLetter([]);
          // set into new getword function
          setWordToGuess(getWord());
      }

      document.addEventListener('keypress' , refreshHandler)
      
      return () => {
        document.removeEventListener('keypress' , refreshHandler)
      }
  }, [guessedLetter]);

  return (
    <>
    <div className='welcome'>Welcome to Hangman Game</div>
     <div className="game-container">
        <div className="hangman"></div>
          <div className='losewin'>
            {isWinner && 'You are the WINNER, Congratulations! - Press Enter to try again!'}
            {isLoser && 'That\'s ok, Nice try - Press Enter to try again!'}
          </div>
            {/* hangman drawing component */}
              <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
              {/* word guessing component */}
              {/* added reveal the word after the game over */}
              <HangmanWord reveal={isLoser} guessedLetter={guessedLetter} wordToGuess={wordToGuess} />
              {/* keyboard compoment */}
              <Keyboard 
                disabled={isLoser || isWinner}
                activeLetters={guessedLetter.filter(letter => 
                wordToGuess.includes(letter)
                )} 
                inactiveLetters={inCorrectLetters}
                addGuessedLetter={addGuessedLetter}
            /> 
      </div>
    </>

  )

}

export default App;