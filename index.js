function scuberGreetingForFeet(ride){
  // Write your code here!
if (ride <= 400) {
  return 'This one is on me!';
}
else if (ride <= 2499) {
  return 'I will gladly take your thirty bucks.';
}
else {return 'No can do.'}
}

function ternaryCheckCity(location){
  // Write your code here!
return ternaryCheckCity = location === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(amount){
  // Write your code here!
  switch (amount) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return 'Bye.';

}
}