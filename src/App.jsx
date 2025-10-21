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
  
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);  
  }

  return (
    <> 
      {/* //박스 2개 타이틀, 사진, 결과 */}
      <div className='main'>
        <h1>✌🏻✊🏻✋🏻 가위 바위 보</h1>
      </div>
      <div className='main'>
        <Box title='You' item={userSelect}/>
        <Box title='Computer'/>
      </div>
      {/* // 가위바위보 버튼  */}
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
      {/* // 버튼을 클릭하면 클릭한 값이 박스에 보임
      // 컴퓨터는 랜덤하게 선택이된다
      // 결과를 가지고 누가 이겼는지 승패를 따진다
      // 승패결과에 따라 테두리 색 변경 - 이기면 초록, 지면 빨강, 비기면 검은색  */}
    </>
  )
}

export default App
