import './App.css';
import Profil from './Profile/Profil';

function App() {
  function handleName(name){
    alert(name);
  }
  return (
    <div>
      <Profil FullName="Muhammed" bio="Developer Fullstack" profission="Web developer" data={handleName}/>
    </div>
  );
}

export default App;
