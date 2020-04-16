import React, { Component } from 'react';
import Scoreboard from './Scoreboard'

const options = [
  'rock',
  'paper',
  'scissors',
  'lizard',
  'spock',
]

class App extends Component {

  state = {
    usersChoice: '',
    computersChoice: '',
    userWins: 0,
    computerWins: 0,
    draws: 0,
    result: ''
  }

  handeUserChoice = (choice) => {
    this.setState({ usersChoice: choice})
    this.handleComputerGuess()
  }

  handleComputerGuess = () => {
    const randomNumber = Math.floor(Math.random() * options.length)
    this.setState({ computersChoice: options[randomNumber]}, () => {
      this.handleGameLogic()
    })
    
  }

  handleGameLogic = () => {
    const { 
      usersChoice, 
      computersChoice,
      userWins,
      computerWins,
      draws } = this.state
    
    if (usersChoice === 'rock') {

      if (computersChoice === 'scissors' || computersChoice === 'lizard') {
        this.setState({ userWins: userWins + 1 })

        if (computersChoice === 'scissors') {
          this.setState({ result: 'You win! Rock crushes Scissors!'})
        } else {
          this.setState({ result: 'You win! Rock crushes Lizard!'})
        }
      } else if (computersChoice === 'paper' || computersChoice === 'spock') {
        this.setState({ computerWins: computerWins + 1 })

        if (computersChoice === 'paper') {
          this.setState({ result: 'You lose! Paper covers Rock!'})
        } else {
          this.setState({ result: 'You lose! Spock vaporizes Rock!'})
        }
      } else {
        this.setState({ draws: draws + 1 })
        this.setState({ result: 'Draw!'})
      }

    } else if (usersChoice === 'paper') {

      if (computersChoice === 'rock' || computersChoice === 'spock') {
        this.setState({ userWins: userWins + 1 })
        if (computersChoice === 'rock') {
          this.setState({ result: 'You win! Paper covers Rock!'})
        } else {
          this.setState({ result: 'You win! Paper disproves Spock!'})
        }
      } else if (computersChoice === 'scissors' || computersChoice === 'lizard') {
        this.setState({ computerWins: computerWins + 1 })
        if (computersChoice === 'scissors') {
          this.setState({ result: 'You lose! Scissors cuts Paper!'})
        } else {
          this.setState({ result: 'You lose! Lizard eats Paper!'})
        }
      } else {
        this.setState({ draws: draws + 1 })
        this.setState({ result: 'Draw!'})
      }

    } else if (usersChoice === 'scissors') {

      if (computersChoice === 'paper' || computersChoice === 'lizard') {
        this.setState({ userWins: userWins + 1 })

        if (computersChoice === 'paper') {
          this.setState({ result: 'You win! Scissors cuts Paper!'})
        } else {
          this.setState({ result: 'You win! Scissors decapitates Lizard!'})
        }
      } else if (computersChoice === 'rock' || computersChoice === 'spock') {
        this.setState({ computerWins: computerWins + 1 })

        if (computersChoice === 'rock') {
          this.setState({ result: 'You lose! Rock crushes Scissors!'})
        } else {
          this.setState({ result: 'You lose! Spock smashes Scissors!'})
        }
      } else {
        this.setState({ draws: draws + 1 })
        this.setState({ result: 'Draw!'})
      }

    } else if (usersChoice === 'lizard') {

      if (computersChoice === 'spock' || computersChoice === 'paper') {
        this.setState({ userWins: userWins + 1 })

        if (computersChoice === 'spock') {
          this.setState({ result: 'You win! Lizard poisons Spock!'})
        } else {
          this.setState({ result: 'You win! Lizard eats Paper!'})
        }
      } else if (computersChoice === 'rock' || computersChoice === 'scissors') {
        this.setState({ computerWins: computerWins + 1 })

        if (computersChoice === 'rock') {
          this.setState({ result: 'You lose! Rock crushes Lizard!'})
        } else {
          this.setState({ result: 'You lose! Scissors decapitates Lizard!'})
        }
      } else {
        this.setState({ draws: draws + 1 })
        this.setState({ result: 'Draw!'})
      }
    
    } else if (usersChoice === 'spock') {

      if (computersChoice === 'rock' || computersChoice === 'scissors') {
        this.setState({ userWins: userWins + 1 })
        if (computersChoice === 'rock') {
          this.setState({ result: 'You win! Spock vaporizes Rock!'})
        } else {
          this.setState({ result: 'You win! Spock smashes Scissors!'})
        }
      } else if (computersChoice === 'lizard' || computersChoice === 'paper') {
        this.setState({ computerWins: computerWins + 1 })
        if (computersChoice === 'lizard') {
          this.setState({ result: 'You lose! Lizard poisons Spock!'})
        } else {
          this.setState({ result: 'You lose! Paper disproves Spock!'})
        }
      } else {
        this.setState({ draws: draws + 1 })
        this.setState({ result: 'Draw!'})
      }

    }
  }

  render() {

    const { 
      usersChoice, 
      computersChoice,
      userWins,
      computerWins,
      draws,
      result } = this.state
    
    return (
      <div className="App">
        {
          usersChoice ? (
            <div className={[
              'game-result',
              computersChoice === usersChoice 
                ? 'draw' 
                : `${usersChoice}-${computersChoice}`
            ].join(' ')}>
              <h1 className="result">{usersChoice.toUpperCase()} vs {computersChoice.toUpperCase()}</h1>
              <p>{result}</p>
            </div>
          ) : (
            <h1>Please choose an item</h1>
          )
        }

        <div className="options">
          <button onClick={() => this.handeUserChoice('rock') }>Rock<span role="img" aria-label="rock">🗿</span></button>
          <button onClick={() => this.handeUserChoice('paper') }>Paper<span role="img" aria-label="paper">📜</span></button>
          <button onClick={() => this.handeUserChoice('scissors') }>Scissors<span role="img" aria-label="scissors">✂️</span></button>
          <button onClick={() => this.handeUserChoice('lizard') }>Lizard<span role="img" aria-label="lizard">🦎</span></button>
          <button onClick={() => this.handeUserChoice('spock') }>Spock<span role="img" aria-label="spock">🖖</span></button>
        </div>
        
        
        <Scoreboard userWins={userWins} computerWins={computerWins} draws={draws}/>
  
        {/* <Rules /> */}
      </div>
    );
  }
}

export default App;
