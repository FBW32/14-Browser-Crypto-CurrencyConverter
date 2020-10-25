//example from website:
//https://api.cryptonator.com/api/ticker/btc-usd
//{"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}
let button=document.querySelector("button");
let crypto=document.querySelector("#crypto");
let currency=document.querySelector("#currency");

button.addEventListener("click",()=>{
let base=crypto.value;
let target=currency.value;
//get change from the website
fetch(`https://api.cryptonator.com/api/ticker/${base}-${target}`).then(resp=>resp.json())
.then(end=>{
    let diff=end.ticker.change;
    console.log(diff);
let amount=document.querySelector("#amount").value;
console.log(amount);
let result=document.querySelector("#result");
let resultOfMultip=amount*diff;
console.log(resultOfMultip);
result.value=resultOfMultip;})
})
