// still working on this file

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';
import words from '../src/wordList.json'

// jest and react testing library 

// mock the word list to ensure
jest.mock('./wordList.json', () => ['apple', 'banana', 'cherry']);

describe('App component' , () => {
     // reset mocks before each test
    beforeEach(() => {
        jest.spyOn(Math, 'random').mockReturnValue(0.5); // consistent word selection
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    // Note: there's an error on the App , asking for typeof. have not check any document yet
    test('renders the game components', () => {
        render(<App />);
        
        // UI elements
        expect(screen.getByText('Welcome to Hangman Game')).toBeInTheDocument();
        expect(screen.getByText(/hangman/i)).toBeInTheDocument();
      });

    test('' , () => {

    });

    test('' , () => {

    });

    test('' , () => {

    });

}); 