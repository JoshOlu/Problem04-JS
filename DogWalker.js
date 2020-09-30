class DogWalker {
    numberOfWalksCalculator(dogSizes){
    	let walks = 0;
  		let dogSort = dogSizes.sort();
  		while (dogSort.length != 0) {
    		if (dogSort[0] == dogSort[1]) {
    			walks += 1;
	      		dogSort.splice(0, 2);
	      } else {
	          	walks += 1;
	          	dogSort.splice(0, 1);
	        }
    	}
    	return walks
    }
}

module.exports = DogWalker;