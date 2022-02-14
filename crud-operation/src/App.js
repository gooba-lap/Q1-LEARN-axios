import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Update from './components/update/update';


function App() {
  return (
    <Router>

      <div className="main">

        <div>
          <h3>React Crud Operations</h3>
        </div>        

        <div style={{ marginTop: 20 }}>
          <Routes>
            <Route path='/' element={<Create />} />
            <Route path='/read' element={<Read />} />
            <Route path='/update' element={<Update />} />
          </Routes>
        </div>

      </div>

  </Router>
  );
}

export default App;





// function App() {
//   return (
//     <Router>
//       <Routes>

//         <Route  path='/' element={<Create />} />
     
//         <Route  path='/read' element={<Read />} />
      
//         <Route path='/update' element={<Update />} />

//     </Routes>
//   </Router>
//   );
// }