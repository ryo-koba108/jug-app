

const btn = document.getElementById('btn');
const totalcount = document.getElementById('totalcount');
const bigbonus = document.getElementById('bigbonus');
const regulerbonus = document.getElementById('regulerbonus');
const bonus = document.getElementById('bonus');
const mycoins = document.getElementById('mycoin');

let totalcounter = 0;
let mycoin = 0;
let bigcounter = 0;
let regcounter = 0;
let bonuscounter = 0;

btn.addEventListener('click', () => {
  // const results = ['大吉', '中吉', '凶'];
  //Math.random() : 0以上1未満の数値をランダムに取得
  //Math.floor() : 整数値を取得
  //Math.floor(Math.random() * (n+1)) : 0からnまでの整数値をランダムで取得
  // const n = Math.floor(Math.random() * results.length); 
  // btn.textContent = results[n];
    const n = Math.random();
    
    if (n < 0.004) {
        btn.textContent = 'Big!';  // 1/250
        totalcounter++;
        bonuscounter++;
        alert(`あなたはBigBonusを引くまでに${bonuscounter}回かかりました`);
        bonuscounter = 0;
        bigcounter++;
        bigbonus.textContent = `bigbonus: ${bigcounter}`;
        mycoin = mycoin + 309;
        mycoins.textContent = `mycoin: ${mycoin}`;
        totalcount.textContent = `counter: ${totalcounter}`;

    } else if (n < 0.00733){
        btn.textContent = 'Reguler!';  // 1/300
        totalcounter++;
        bonuscounter++;
        alert(`あなたはRegulerBonusを引くまでに${bonuscounter}回かかりました`);
        bonuscounter = 0;
        regcounter++;
        regulerbonus.textContent = `bigbonus: ${regcounter}`;
        mycoin = mycoin + 101;
        mycoins.textContent = `mycoin: ${mycoin}`;
        totalcount.textContent = `counter: ${totalcounter}`;

    } else if(n < 0.009286125){
        btn.textContent = 'スイカ';  // 1/512
        totalcounter++;
        bonuscounter++;
        mycoin = mycoin + 7;
        mycoins.textContent = `mycoin: ${mycoin}`;
        totalcount.textContent = `counter: ${totalcounter}`;

    } else if(n < 0.037857125){
        btn.textContent = 'チェリー';  // 1/35
        totalcounter++;
        bonuscounter++;
        mycoin = mycoin + 1;
        mycoins.textContent = `mycoin: ${mycoin}`;
        totalcount.textContent = `counter: ${totalcounter}`;

    } else if(n < 0.17484342){
        btn.textContent = 'リプレイ';  // 1/7.3
        totalcounter++;
        bonuscounter++;
        mycoin = mycoin ;
        mycoins.textContent = `mycoin: ${mycoin}`;
        totalcount.textContent = `counter: ${totalcounter}`;

    } else if(n < 0.341510096){
        btn.textContent = 'ぶどう';  // 1/6
        totalcounter++;
        bonuscounter++;
        mycoin = mycoin + 4;
        mycoins.textContent = `mycoin: ${mycoin}`;
        totalcount.textContent = `counter: ${totalcounter}`;

    } else {
        btn.textContent = '?';  
        totalcounter++;
        bonuscounter++;
        mycoin = mycoin - 3;
        mycoins.textContent = `mycoin: ${mycoin}`;
        totalcount.textContent = `counter: ${totalcounter}`;

    }

    if(bigcounter > 0 || regcounter > 0){
      bonus.textContent = 'bonus: ' + 1 + '/' + Math.round(totalcounter/(bigcounter + regcounter));
    }
    
  
  
  

});