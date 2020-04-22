let liste = [8, 17, 4, 2];
let k = 14;

let listeB = [3, 4, 8, 17];
let l = 12;

let immeubleA = [3, 7, 8, 3, 6, 1];
let immeubleB = [1, 4, 5, 8];

const exo1 = (liste, k) => {
  let result = false;
  for (let i = 0; i < liste.length; i++) {
    for (let j = 0; j < liste.length; j++) {
      if (liste[i] + liste[j] == k) {
        result = true;
        console.log(result);
        return result;
      }
    }
  }
  console.log(result);
  return result;
};

const exo2 = (liste) => {
  count = 0;
  for (let i = 0; i < liste.length; i++) {
    let view = true;
    for (let j = i + 1; j < liste.length; j++) {
      if (liste[i] < liste[j]) {
        view = false;
        break;
      } else {
        view = true;
      }
    }
    if (view == true) {
      count++;
    }
  }
  console.log(count);
  return count;
};

const exo3 = (liste, l) => {
  let result = false;
  for (let i = 0; i < liste.length; i++) {
    let value = liste[i];
    liste.splice(i, 1);
    if (liste.includes(l - value)) {
      result = true;
      console.log(result);
      return result;
    }
  }
  console.log(result);
  return result;
};

const exo4 = (immeubles) => {
  let count = 1;
  let f = immeubles.length - 1;
  for (let i = immeubles.length - 2; i >= 0; i--) {
    if (immeubles[i] > immeubles[f]) {
      count++;
      f = i;
    }
  }
  console.log(count);
  return count;
};

exo1(liste, k);
exo1(listeB, l);

exo2(immeubleA);
exo2(immeubleB);

exo3(liste, k);
exo3(listeB, l);

exo4(immeubleA);
exo4(immeubleB);