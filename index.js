let person = {
  name: 'Bob'
}

function justInvoke(fn) {

};

function setThisWithCall(fn, thisValue) {

};

function setThisWithApply(fn, thisValue) {
  return fn.apply(person, thisValue);
};

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}


let Bank = {
	balance: 100
}

function spendMoney(a, b) {
	console.log('Your new blance is: ', this.balance - a - b);
}



let arguments = [30, 20];

// spendMoney.call(Bank, 10, 20);
// spendMoney.apply(Bank, arguments);

let example = spendMoney.bind(Bank);
