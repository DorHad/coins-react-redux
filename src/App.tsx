import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Coins } from "./coinsModel";
import { store } from "./redux/store";
import { coinsUpdate } from "./redux/coinsState";
//deleted from below heade classname till header tag not needed
function App() {
  //4. const url api link
  const url = "https://api.coingecko.com/api/v3/coins/";
  //2. const [coins, setCoins] = useState<Coins[]>([]); 
  //13. as Coins module which is an array
  //28. Commented out above useState. Because we want REDUX.
  //28. Because We do not want to load or go to axios. If we have the data give it 
  // to us through REDUX. If you don`t have the data, update 
  //REDUX and update the system.

  const [stam, setStam] = useState(false);

  const showCoin = () => {
    console.log(store.getState().coinState.coins);
  };

  //1. 
  useEffect(() => {
    //29. what is the condition to return from the function and 
    //not to use axios ? 
    //If there are coins in the coinState. 
    //30. check the store, go to the store and request the State
    //because store keeps all the reducers combined
    //store we ask for the state . go to coinstate . there we have
    //coins . there we have length
    if (store.getState().coinState.coins.length > 0) return;
    // > 0 means we have coins and return, all ok.
    // if we don`t have coins, then use axios 

    //3. axios.get
    //4. (url)
    axios 
      .get(url)
      //5. then(response)
      .then((response) => {
        //30. Dispatch is activated through store.
        //store.dispatch. in which directory is it? in redux
        //so it`s in the dropwdown menu redux/coinsState
        store.dispatch(coinsUpdate(response.data));
        //7. setCoins(response.data); Commented out because 28.
        //8. console.log(response.data)
        //9. create file coinsMode.ts and define id, name, symbol
        setStam(true);
        console.log(store.getState().coinState.coins);
      })
      //6. catch (err)
      .catch((err) => {
        console.log(err.message);
      });
  }, []); //14. useEffect at the end add [] 
  //15. create redux directory 
  //16. create coinsState.ts in redux
  //17. create store.ts in redux
  return (
    <div className="App">
      <h1>My Coins</h1>
      <hr />
      {/*31.  interpolation. Coins array in the store, get from the
      store.getState and there it will find coinState.coins.map (map)
      because it`s an array.
      */}

      {store.getState().coinState.coins.map((coin) => {
        return (
          <div className="Box" key={coin.id} style={{ height: 150 }}>
            <h3>{coin.name}</h3> 
            <hr />
            {coin.id}
            <br />
            {coin.symbol}
          </div>
        );
      })}
    </div>
  );
}

export default App;
//id name symbol
//npm install axios
//npm install redux 
//chrome, redux devtools
