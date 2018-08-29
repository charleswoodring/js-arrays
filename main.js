const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat', cats[0]);

const favoriteAnimals = 'cow,cat,bear,dog';
const favoriteAnimalArray = favoriteAnimals.split() // ['c','o','w']
console.log('favoriteAnimalArray', favoriteAnimalArray);

const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join('cow');
console.log('newNum', newNum);

// mini challenge
const palChecker = (word) => {
    const wordArray = word.split('').join('');
    const reverseArray = word.split('').reverse().join('');
 //   if(wordArray === reverseArray) {
     if(word === reverseArray) {
        console.log(`${word} IS a palindrome`);
    } else {
        console.log(`${word} NOT a palindrome`);
    }
// yes if its a palindrome
// no if its nota palindrome
};
palChecker('mom'); //yes
palChecker('monkeybutt') // no
palChecker('racecar') // yes

let animals = ['roaches', 'spiders', 'wasps', 'bees'];

const lastItem = animals.pop() // bees
const firstItem = animals.shift(); // roaches
animals.push('bat');
animals.unshift('hippos');
console.log(animals, animals);

// for(starting value; stopping value; incrimenting value)
for(let i = 0; i<animals.length; i++){
    //do something here
    console.log(animals[i]);
}