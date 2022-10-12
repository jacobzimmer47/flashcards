const chai = require('chai')
const expect = chai.expect

const Round = require('../src/round')
const Card = require('../src/Card')
const Deck = require('../src/deck')
const Turn = require('../src/turns')

describe('Round', () => {
    let card1, card2, card3, card4, deck, round;
    beforeEach(() => {
      card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
      card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
      card4 = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method')
      round = new Round([card1, card2, card3, card4])  
    })

    it.skip('should be a function', () => {
        expect(Round).to.be.a('function')
    })

    it.skip('should have a current card', () => {
        expect(round.currentCard.id).to.equal(1)
    })

    it.skip('should start at turn 0', () => {
        expect(round.turnCount).to.equal(0)
    })

    it.skip('should start with no incorrect guesses', () => {
        expect(round.incorrectGuesses).to.deep.equal([])
    })

    it.skip('should be able to return the current card', () => {
        expect(round.returnCurrentCard()).to.equal(round.currentCard)
    })

    it.skip('should be able to track turns', () => {
        round.takeTurn('object')
        expect(round.turnCount).to.equal(1)
    })

    it.skip('should be able to change the current card', () => {
        round.takeTurn('object')
        expect(round.deck.cards[0].id).to.equal(2)
    })

    it.skip('should be able to track incorrect guesses', () => {
        round.takeTurn('object')
        expect(round.incorrectGuesses.length).to.equal(0)
        expect(round.turn.evaluateGuess()).to.deep.equal(true);
        expect(round.turn.giveFeedback()).to.deep.equal('Correct!');

        round.takeTurn('Serena Williams')
        expect(round.incorrectGuesses.length).to.equal(1)
        expect(round.turn.evaluateGuess()).to.deep.equal(false);
        expect(round.turn.giveFeedback()).to.deep.equal('Incorrect!');
    })

    it.skip('should give feedback', () => {
        expect(round.takeTurn('object')).to.equal('Correct!')
        expect(round.takeTurn('Serena Williams')).to.equal('Incorrect!')
    })

    it.skip('should calculate the score', () => {
        round.takeTurn('object')
        round.takeTurn('array')
        round.takeTurn('mutator method')
        round.takeTurn('Serena Williams')

        expect(round.calculatePercentCorrect()).to.equal('75%')
    })
   
    it.skip('should be able to end the round', () => {
        round.takeTurn('object')
        round.takeTurn('array')
        round.takeTurn('mutator method')
        round.takeTurn('Serena Williams')

        expect(round.endRound()).to.equal('** Round over! ** You answered 75% of the questions correctly!')

    })
})