let person = {
  name: 'Bob'
}

function invokeFunction(fn) {
  let justInvoke = (fn(this.name));
};

function setThisWithCall(fn, thisValue) {
  let
};

function setThisWithApply(fn, thisValue) {

};


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
example(10, 45);
console.log(example);
