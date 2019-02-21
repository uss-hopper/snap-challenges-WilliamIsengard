//**** snap-reverse ****//

//** Reverse Via Reduce Method **//
var arr = "I'll alert the crew. We finished our first sensor sweep of the neutral zone. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.";

var split = arr.split(" ");
split.reduce((a, b) => [b].concat(a), []);

//** Alternative Formatting **//
let string = "I'll alert the crew. We finished our first sensor sweep of the neutral zone. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.";

let newString = string.split(""); //No Space Between Quotes Reverses Letters Within Words
let finalString = newString.reduce((accumulator, current) => current + accumulator);
console.log(finalString);

//** Reverse Via Reverse Method **//
var arr = "I'll alert the crew. We finished our first sensor sweep of the neutral zone. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.";

var split = arr.split(" ");
split.reverse();