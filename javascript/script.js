const time = 100000000; // ms
const step = 1; 

function outNum(num, elem) {
   let l = document.querySelector('#' + elem);
   n = 157;
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

outNum(198, 'out-1');
