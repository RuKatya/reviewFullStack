import React from "react";
import { getListItem } from "./listItems";
import { Link, useSearchParams } from "react-router-dom";

const Orders = () => {
  let orders = getListItem();

  console.log(orders);

  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <h1>ORDERS</h1>

      <input
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;

          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />

      {orders
        .filter((items) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = items.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        .map((order) => {
          return (
            
              <Link to={order.id} >
                <div key={order.id}>{order.name}</div>
              </Link>
           
          );
        })}
    </div>
  );
};

export default Orders;
