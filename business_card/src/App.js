import './App.css';
import MainContent from './maincontent'
import Top from './top'
import Links from './links'

function App() {
  const date = new Date()

  return (
    <div className="App">
      <h1 className='date'>It is currently {date.getHours() % 12}</h1>
      <Top></Top>
      <MainContent></MainContent>
      <Links></Links>
    </div>
  );
}

export default App;
