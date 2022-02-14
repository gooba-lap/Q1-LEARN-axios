import './App.css';
import Create from './component/create/create';
import Read from './component/read/read';

function App() {
  return (
    <div className="main">
      
      <h3>React Crud Operations</h3>

      <div>
        <Create/>
      </div>

      <div style={{marginTop: 20}}>
        <Read/>
      </div>
    </div>
  );
}

export default App;
