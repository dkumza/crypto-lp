let cryptoData = [];
let crytoTittles = [];

// function to create market grid
const marketData = () => {
   // crypto currency market random data
   cryptoData = [
      {
         id: 1,
         currency: "Bitcoin",
         icon: "icons/crypto/01-btc.png",
         price: "$55,206.61",
         change24h: "+0.92%",
         change7d: "+15.86%",
         marketCap: "$1,031,053,197,418",
         volume24h: "$68,976,007,433",
         imgValue: "images/crypto/line-green.png",
      },
      {
         id: 2,
         currency: "Ethereum",
         icon: "icons/crypto/02-eth.png",
         price: "$3,616.61",
         change24h: "-0.62%",
         change7d: "+12.86%",
         marketCap: "$831,053,197,418",
         volume24h: "$58,976,007,433",
         imgValue: "images/crypto/line-green.png",
      },
      {
         id: 3,
         currency: "Cardano",
         icon: "icons/crypto/03-cardano.png",
         price: "$5,100.36",
         change24h: "+1.92%",
         change7d: "-10.86%",
         marketCap: "$531,053,197,418",
         volume24h: "$28,976,007,433",
         imgValue: "images/crypto/line-red.png",
      },
      {
         id: 4,
         currency: "Tether",
         icon: "icons/crypto/04-tether.png",
         price: "$3,120.00",
         change24h: "-0.42%",
         change7d: "+15.86%",
         marketCap: "$1,031,053,197,418",
         volume24h: "$68,976,007,433",
         imgValue: "images/crypto/line-green.png",
      },
      {
         id: 5,
         currency: "Avalanche",
         icon: "icons/crypto/05-avalanche.png",
         price: "$224,144.00",
         change24h: "-2.92%",
         change7d: "+1.86%",
         marketCap: "$7,031,053,197,418",
         volume24h: "$18,976,007,433",
         imgValue: "images/crypto/line-red.png",
      },

      {
         id: 6,
         currency: "Algorand",
         icon: "icons/crypto/06-algorand.png",
         price: "$8.00",
         change24h: "+5.92%",
         change7d: "+10.86%",
         marketCap: "$9,031,053,197,418",
         volume24h: "$8,976,007,433",
         imgValue: "images/crypto/line-green.png",
      },
   ];

   crytoTittles = [
      "#",
      "Name",
      "Price",
      "24h %",
      "7d %",
      "Market Cap",
      "Volume 24h",
      "Last 7 Days",
   ];
   //    return cryptoData;
   // select market-wrap div
   const marketWrap = document.querySelector("#market-wrap");
   //    create grid and append grid items to market-wrap div
   function createGrid() {
      for (let i = 1; i <= 56; i++) {
         //  console.log(i);
         // create market cell div element
         const marketCell = document.createElement("div");
         // add class to market cell div
         marketCell.classList.add("market-cell");
         // add id to market cell div
         marketCell.id = `cell-${i}`;
         // add text to market cell div
         marketCell.innerHTML = `<p>${i}</p>`;
         // append market cell div to market wrap div
         marketWrap.appendChild(marketCell);
      }
      //   console.log(marketWrap);
   }
   createGrid();
};
marketData();

// console.log(cryptoData);

// to push all cryotiTittles values to the grid cells from 1 to 8
function fillTitles() {
   for (let i = 1; i <= 8; i++) {
      const cell = document.querySelector(`#cell-${i}`);
      cell.classList.add("title-cell");
      cell.innerHTML = `${crytoTittles[i - 1]}`;
   }

   //    console.log(crytoTittles);
}

// fill id from cryptoData to the grid cells 9, 17, 25, 33, 41, 49
// function fillId() {
//    for (key in cryptoData) {
//       //   console.log(cryptoData[key].id);
//       valueId = cryptoData[key].id;
//       const cellForId = document.querySelector(`#cell-${valueId}`);
//       cellForId.innerHTML = `${valueId}`;
//       //   console.log(valueId);
//       //   console.log(valueId);

//       //   function to fill cryptoData id values to the grid cells from 9 to 56
//    }
// }

fillTitles();
// fillId();
for (key in cryptoData) {
   //    console.log(key);
   //    console.log(cryptoData[key].id);
   //    valueId = cryptoData[key].id;
   console.log(cryptoData[key].currency);
}
