class DogWalker {
    numberOfWalksCalculator(dogSizes){
    	let dict = {};
		let walks = 0
	  	for (let key = 0; key < dogSizes.length; key++) {
	  		if (dict.hasOwnProperty(dogSizes[key]) && dict[dogSizes[key]] != 0) {
		        dict[dogSizes[key]] = 0;
		        walks += 1
	      	} else {
		        dict[dogSizes[key]] = 1;
		    }
		}
		for (let key in dict) {
			walks += dict[Number(key)]
		}
	return walks;
	}
}

module.exports = DogWalker;