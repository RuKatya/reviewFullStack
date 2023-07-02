import './App.scss';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState();

  //GET DATA
  useEffect(() => {
    async function fetchData() {
      await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=MugxVLqFbLchjdTgaw8anxPDByBzurpnHpGRv5B5`
      )
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          console.log(json)
        })
        .catch((e) => console.log(e));
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      {data ?
      <div className="app__data">
        {/* <h3 className="app__data--title">{data.title}</h3> */}
        <div className="app__data--info">
        <h3 className="app__data--infoTitle">{data.title}</h3>
          <img className="app__data--infoImg" src={data.url} alt={data.title} />
          <p className="app__data--infoExplanation">{data.explanation}</p>
        </div>
      </div>
      :
      <div>Loading</div>
      }
    </div>
  );
}

export default App;
