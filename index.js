let person = {
  name: 'bob'
}

function justInvoke(fn) {
  return fn(this.name);
};

function setThisWithCall(fn, thisValue) {
  return fn.call(this.name, thisValue);
};

function setThisWithApply(fn, thisValue) {
  return fn.apply(this.name, thisValue);
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
