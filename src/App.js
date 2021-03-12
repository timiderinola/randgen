import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <div className="container main">
        <div id="app-card" className="card">
          <div className="card-body">
            <Button variant="primary">Generate</Button>
            <div className="link">
              <label>Link: </label>
              <a href="" className="card-link">Link</a>
            </div>
            <Button variant="primary">Report</Button>
            <div className="report">
              <ul>
                <li>Alphabetical string: </li>
                <li>Real numbers: </li>
                <li>Integers: </li>
                <li>Alphanumerics: </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
