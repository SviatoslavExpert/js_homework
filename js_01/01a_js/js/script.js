var num = Number(prompt("Please, enter any number."));
var exp = Number(prompt ("Please, enter any exponent."));

function calculate(nNumber, iExponent){
				var nBasicNumber = nNumber;	
								for (var i = 1; i < iExponent; i++){
								nNumber = nBasicNumber * nNumber;
								}
				return nNumber;
}
console.log('calculation result = ', calculate(num,exp));