import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

const Item = () => {
  let params = useParams();
  console.log(params);

  const [data, setData] = useState();
  // let [x, setX] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await fetch(
        `https://api.nasa.gov/insight_weather/?api_key=W55GuHiUNV1HCTszzbNVGftKPbpha45nckE2FmMo&feedtype=json&ver=1.0`
      )
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          console.log(json);
        })
        .catch((e) => console.log(e));
    }
    fetchData();
  }, []);

  // function getX() {
  //   setX(x + 1);
  // }

  function generate(element) {
    return data.validity_checks[params.id].AT.sol_hours_with_data.map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  return (
    <div>
      {data ? (
        <div>
          <Typography sx={{ mt: 4, mb: 2, ml: 1, textDecorationLine: 'underline' }} variant="h6" component="div">
            Atmospheric temperature sensor
          </Typography>
          <ul>
            {data.validity_checks[params.id].AT.sol_hours_with_data.map(
              (li) => {
                return <li key={li}>{li}</li>;
              }
            )}
          </ul>

          <Typography sx={{ mt: 4, mb: 2, ml: 1, textDecorationLine: 'underline' }} variant="h6" component="div">
            Horizontal wind speed sensor
          </Typography>
          <ul>
            {data.validity_checks[params.id].HWS.sol_hours_with_data.map(
              (li) => {
                return (
                  <li key={li}>
                    <Typography>{li}</Typography>
                  </li>
                );
              }
            )}
          </ul>

          <Typography sx={{ mt: 4, mb: 2, ml: 1, textDecorationLine: 'underline' }} variant="h6" component="div">
            Atmospheric pressure sensor
          </Typography>
          <ul>
            {data.validity_checks[params.id].PRE.sol_hours_with_data.map(
              (li) => {
                return <li key={li}>{li}</li>;
              }
            )}
          </ul>

          <Typography sx={{ mt: 4, mb: 2, ml: 1, textDecorationLine: 'underline' }} variant="h6" component="div">
            Wind direction sensor
          </Typography>
          <ul>
            {data.validity_checks[params.id].WD.sol_hours_with_data.map(
              (li) => {
                return <li key={li}>{li}</li>;
              }
            )}
          </ul>
        </div>

      ) : (

        <div className="spinner">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
