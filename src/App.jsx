import './App.sass'
import AppRouter from './components/AppRouter'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'

function App() {

  return (
    <div className="App">
      <Header/>
      <AppRouter/>
    </div>
  )
}

export default App
