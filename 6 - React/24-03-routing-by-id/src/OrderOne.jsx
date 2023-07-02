import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getItem } from "./listItems";

const OrderOne = () => {
  let navigate = useNavigate();
  let param = useParams();

  console.log(param);
  console.log(param.id);

  let item = getItem(param.id);
  console.log(item);

  useEffect(() => {
    if (item === false) {
      navigate("/orders");
    }
  });

  return (
    <div>
      <h1>{item.name}</h1>
      <h2>{item.price} $ </h2>
      <p>{item.desc}</p>
      <img src={`/img/${item.img}`} alt={item.name} />
    </div>
  );
};

export default OrderOne;
