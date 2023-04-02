export class Coins {
  block_time_in_minutes: number | undefined;
  id: string | undefined;
  name: string | undefined;
  symbol: string | undefined;
}

// | sign means union 
//10. Go to Console Log, look for bitcoin coin or one of 
//the other 50 coins. Copy-paste its items. 
//id, block-time-in-minutes, image, name, symbol 
//11. Then define each item up here. 

//Example item from console log:
/* 0: Object { id: "bitcoin", symbol: "btc", name: "Bitcoin", … }
​​
block_time_in_minutes: "10.0"
​​
id: "bitcoin"
​​
image: Object { thumb: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579", small: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579", large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" }
​​
last_updated: "2023-04-02T05:56:52.808Z"
​​
localization: Object { en: "Bitcoin", de: "Bitcoin", es: "Bitcoin", … }
​​
market_data: Object { market_cap_rank: 1, price_change_24h: -103.111947019, price_change_percentage_24h: -0.36072, … }
​​
name: "Bitcoin"
​​
symbol: "btc" */