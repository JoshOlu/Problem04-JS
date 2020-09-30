class DogWalker {
    numberOfWalksCalculator(dogSizes){
    	let temp = [];
	 	let walks = 0;
	  	let searcher = 0;
	 	temp.push(dogSizes.shift());
	  	while (dogSizes.length != 0) {
		    if (searcher > dogSizes.length - 1) {
		        walks += 1;
		        searcher = 0;
		        temp.pop();
		        temp.push(dogSizes.shift());
	      } else if (dogSizes[searcher] != temp[0]) {
	          searcher += 1;
	      } else if (dogSizes[searcher] == temp[0]) {
	          walks += 1;
	          dogSizes.splice(dogSizes.indexOf(dogSizes[searcher]), 1)
	          searcher = 0;
	          temp.pop();
	          temp.push(dogSizes.shift());
	        }
	    }
    return walks + temp.length;
    }
}

module.exports = DogWalker;