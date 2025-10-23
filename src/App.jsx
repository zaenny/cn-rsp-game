import { useState } from 'react'
import './App.css'
import Box from './component/Box'

const choice = {
  rock: {
    name : "Rock",
    img : "/image/rock.png"
  },
  scissors:{
    name : "Scissors",
    img : "/image/scissors.png"
  },
  paper:{
    name: "Paper",
    img : "/image/paper.png"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  }

  const judgement = (user, computer) => {
    
    if (user.name == computer.name){
      return "TIE";
    }else if(user.name == "Rock"){ 
      return computer.name == "Scissors" ? "WIN" : "LOSE" 
    }else if(user.name == "Scissors"){
      return computer.name == "Paper" ? "WIN" : "LOSE"
    }else if(user.name == "Paper"){
      return computer.name == "Rock" ? "WIN" : "LOSE"
    }
    
  }

  const randomChoice = () => { 
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];

    return choice[final];
  }

  return (
    <> 
      <div className='main'>
        <h1>✌🏻✊🏻✋🏻 가위 바위 보</h1>
      </div>
      <div className='main'>
        <Box title='You' item={userSelect} result={result}/>
        <Box title='Computer' item={computerSelect} result={result}/>
      </div>
      {/* // 가위바위보 버튼  */}
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  )
}

export default App
