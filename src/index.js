// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let exchange = {};
    let h, q, d, n, p;
    let num = currency;
    if (num > 10000){
      exchange.error ="You are rich, my friend! We don't have so much coins for exchange";
      return exchange;
    }
    if (num >= 50){
      h = Math.floor(num/50);
      num = num - h*50;
      exchange.H = h;
      console.log(num);
    }
    if (num >= 25){
      q = Math.floor(num/25);
      num = num - q*25;
      exchange.Q = q;
    }
    if (num >= 10){
      d = Math.floor(num/10);
      num = num - d*10;
      exchange.D = d;
    }
    if (num >= 5){
      n = Math.floor(num/5);
      num = num - n*5;
      exchange.N = n;
    }
    if (num >= 1){
      p = Math.floor(num/1);
      num = num - p*1;
      exchange.P = p;
    }
    return exchange;
}
