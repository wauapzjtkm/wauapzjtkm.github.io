const time = 100000000; // ms
const step = 1; 

function outNum(num, elem) {
   let l = document.querySelector('#' + elem);
   n = 57;
   let t = Math.round(time/(num/step));
   let interval = setInterval(() => {
      n = n + step;
      if (n == num) {
         clearInterval(interval);
      }
      l.innerHTML = n;
   },
      t);
}

outNum(89, 'out-1');
