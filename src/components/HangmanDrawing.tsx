import React from 'react'
import '../style/drawing.css'


/**
 * @param
 * @returns 
 */

// create a hangman body
// head part
const head = <div className='head-part' />;
// body part 
const body = <div className='body-part' />
// right arm
const rightArm = <div className='right-arm' />;
// left arm
const leftArm = <div className='left-arm' />;
// right leg
const rightLeg = <div className='right-leg' />;
// left leg
const leftLeg = <div className='left-leg' />;
// combine all the body part 
const hangman = [head, body, rightArm, leftArm, rightLeg, leftLeg];

type HangmanDrawingProps = {
    numberOfGuesses: number
}


function HangmanDrawing({numberOfGuesses} : HangmanDrawingProps) {
    
  return (
    <>
    {/* call the human body // use .slice  */}
    {/* making bar to hang the hangman */}
    <div className='human-container'>
       {hangman.slice(0 , numberOfGuesses)}
        <div className='rightbar' />
        <div className='topbar' />
        <div className='leftbar' />
        <div className='bottombar' />
    </div>
    </>
  );

};

export default HangmanDrawing
