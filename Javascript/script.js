function isPremier(n) {
    if (n < 2){
        return false;
    }
    for (let i = n - 1 ; i > 1; i--) {
        if (n % i === 0){
            return false
        }
    }
    return true;
    };

    console.log('0', isPremier(0));
    console.log('1', isPremier(1));
    console.log('2', isPremier(2));
    console.log('3', isPremier(3));
    console.log('11', isPremier(11));
    console.log('12', isPremier(12));
/* function randomInt(max) {
  return Math.floor(Math.random() * max);
}

const solution = randomInt(20);

function isRight(n) {
  return solution === n;
}

function guess() {
  const number = prompt("Entrez un chiffre") * 1;
  if (number < solution){
    console.log("Plus");
  } else if ( number > solution){
    console.log("Moins");
  }
  return isRight(number);
}

for (i = 0; i < 3; i++) {
  if (guess()) {
    console.log("Bravo");
    break;
  } else if (i === 2) {
    console.log("Perdu");
  }
}
 */