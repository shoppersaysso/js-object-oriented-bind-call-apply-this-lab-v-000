let person = {
  name: 'bob'
}

function justInvoke(fn) {
  return fn(this.name);
};

function setThisWithCall(fn, thisValue) {
  return fn.call(thisValue);
};

function setThisWithApply(fn, thisValue) {
  return fn.apply(thisValue);
};

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}
