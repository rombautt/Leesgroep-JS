var ZEEF = ( function() {

	var primes = [];
	var time = -1;

	function setUp(max) {
		for(var i = 0; i <= max; i++) {
			primes.push(1);
		}
	};

	function filter() {
		for(var i = 2; i <= Math.sqrt(primes.length) ; i++) {
			if(primes[i] === 1) {
				for(var j = i * i; j < primes.length; j += i) {
					primes[j] = 0;
				}
			}
		}
	};

	function cleanUp(){
		var temp =[];
		for(var i = 2; i < primes.length; i++) {
			if(primes[i] === 1){
				temp.push(i);
			}
		}
		primes = temp.slice(0);
	}

	return {
		filter : function(max) {
			var startTime = new Date().getTime();
			setUp(max);
			filter();
			cleanUp();
			time = new Date().getTime() - startTime;
			return primes;
		},
		getTime: function(){
			return time === -1? null : time;
		}
	};
}());
