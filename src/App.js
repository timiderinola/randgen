import './App.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function App() {
  const [link, setLink] = useState([]);
  const [info, setInfo] = useState(["Click the button to generate "]);
  const [report, setReport] = useState([]);
  const [seeReport, setSeeReport] = useState([false]);
  const [loading, setLoading] = useState([false]);
  const fetchData = async () => {
    try {
      setLink("");
      setInfo("Please wait while we generate your file ");
      setLoading(true);
      const { data } = await axios.get('https://randgen-api.herokuapp.com/generate');
      setInfo("");
      setLoading(false);
      setLink(data.link);
      setReport(data.count);
    } catch (e) {
      setInfo(e.message);
      setLoading(false);
    }
  };
  const showReport = () => {
    setSeeReport(true);
  };
  return (
    <div className="App">
      <div className="container main">
        <div id="app-card" className="card">
          <div className="card-body">
            <p>This app generates four different types of random numbers and allows you to download it as a text file.</p>
            <Button onClick={fetchData} variant="primary" disabled={loading === true}>
              {(loading === true) ?
                <span><i className="fas fa-cog fa-spin"></i> Generating</span>
                :
                <span><i class="fas fa-random"></i> Generate</span>
              }
            </Button>
            <div className="link">
              <p>
                <span>{info}</span>
                <a className="card-link" href="https://randgen-api.herokuapp.com/download" target="_blank" rel="noreferrer">
                  {link}
                </a>
              </p>
            </div>
            <Button onClick={showReport} disabled={info !== ""} variant="primary">Show Report</Button>
            <div className="report text-center">
              {(seeReport === true) ?
                (<>
                  <p>In the generated random file, we have</p>
                  <ul>
                    <li>Alphabetical strings: {report.alphabets}</li>
                    <li>Real numbers strings: {report.real}</li>
                    <li>Integer strings: {report.numerals}</li>
                    <li>Alphanumeric strings: {report.alphanumeric}</li>
                  </ul>
                  <p>We're sure. We counted it.</p>
                </>)
                :
                <>
                  <p><em>The report here will show how many:</em></p>
                  <ul>
                    <li><em>Alphabetical strings;</em></li>
                    <li><em>Real number strings;</em></li>
                    <li><em>Integers strings; and</em></li>
                    <li><em>Alphanumeric strings</em></li>
                  </ul>
                  <p><em>we have in the random file.</em></p>
                </>
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
