import reactLogo from './assets/react.svg'
import './App.css'
import Headshot from './components/Headshot'
import Main from './components/Main'
import Media from './components/Media'


function App() {
    return (
      <div className='background-container'>
        <div className='card'>
      <Headshot />
      <Main />
      
      <Media />   
       </div>   
    </div>
  )
}

export default App
