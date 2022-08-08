// program to return a reslved promise after certian delay.
function delay(ms) {
	return new Promise((resolve, reject) => {
  		setTimeout(() => {
     	resolve('I am resolved');
      }, ms);
  });
}

// program to animate or move element to right 
function animateRight(el) {
  id = setInterval(frame, 1);
  function frame() {
      el.style.left = "100px";
  }
}

// programs to remove duplicate elements from array.
function removeDuplicates(xs) {
	return xs.filter((ele, index, arr) => arr.indexOf(ele) === index);
} 

