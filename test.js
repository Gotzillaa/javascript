//======================================================================================Day1
// var n = 2;
// for (var i = 1; i <= 12; i++) {
//   console.log(`${n} x ${i} = ${n * i}`);
// }

//========================================

// var n = 6;
// for (var i = 1; i <= n; i++) {
//   var result = "";
//   for (var j = 1; j <= i; j++) {
//     result += `${j}`;
//   }
//   console.log(result);
// }

//========================================

// var word = 'abcba'
// var len = word.length
// var isPalindrom = true
// for (var i = 0; i < len / 2; i++) {
//   if (word[i] !== word[len - 1 - i]) {
//     isPalindrom = false
//     break
//   }
//   console.log(isPalindrom)
// }
//========================================
// var num = 2176194
// var count =0
// while(num%10!==0){
// var i = num%10
// if(i%2===0){
// count++
// }
// }

// var fac =n =>n<=1?1: n*fac(n-1)

//functions ex2-------------------------
// var calculateFare = a => {
//   var station_rate = 18
//   return 18 + 3 * (a - 1)
// }
// console.log(calculateFare(3))

//========================================
// function revers(word) {
//   if (word.length === 0) return "";
//   return revers(word.slice(1)) + word[0];
// }
// var result = revers("hello");
// console.log(result);

//========================================
// function fib(n) {}

// function fib() {
//   for (var i = 1; i; i++) {}
// }

// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// const person = {
//   name: "awirut",
//   age: 24,
//   print: () => {
//     console.log(`Name:${this.name},Age: ${thisage}`);
//   }
// };
// person.print();

//========================================Arrow Function ex2
// const foo = (a,b)=>c=>d=>d(a,b,c)
// const min
//========================================Arrow Function ex2
// function foo(a) {
//   return function(b) {
//     return function(c) {
//       return a + b + c
//     }
//   }
// }
// console.log(foo(10)(5)(2))

//========================================Arrow Function ex3
// var a = 1,
//   b = 2,
//   c = 3
// var foo = () => {
//   return a + b + c
// }
// console.log(foo())

//========================================Arrow Function ex4
// const preson = {
//   name: 'Sonchai',
//   pingName: () => {
//     setIntrval(function() {
//       console.log(this.name)
//     }, 1000)
//   }
// }
// person.pingName()

//======================================================================================Day2
//========================================Conditional Statement and loop Ex5
//วิธีที่1
// let money = 12587
// const banknotes = [1, 5, 10, 20, 50, 100, 500, 1000]

// while (banknotes.length !== 0) {
// const banknote = banknotes.pop()

// console.log(`${banknote} => ${Math.floor(money / banknote)}`)

// money %= banknote
// money = money % banknote
// }
//วิธีที่2
// let money = 12587
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 1]

// for (let banknote of banknotes) {
//   console.log(`${banknote} => ${Math.floor(money / banknote)}`)
//   money %= banknote
// }
//========================================สลับตำแหน่งตัวแปร
// let x = 10
// let y = 20
// ;[x, y] = [y, x]
// console.log(x, y)
//========================================function + array
// function sum(...nums) {
//   let acc = 0

//   for (let num of nums) {
//     acc += num
//   }

//   return acc
// }

// const result = sum(1, 2, 3, 4, 5) // 15
// console.log(result)
//========================================Onject and array Ex2
// function getGrades(scores) {
//   const result = []

//   for (let score of scores) {
//     const grade = getGrade(score)

//     result.push(grade)
//   }

//   return result
// }

// function getGrade(score) {
//   if (score >= 80) return 'A'
//   else if (score >= 70) return 'B'
//   else if (score >= 60) return 'C'
//   else if (score >= 50) return 'D'
//   else return 'F'
// }

// console.log(getGrades([50, 69, 80]))
//========================================Onject and array Ex3
// function countOccurenceOfNumbers(words) {
//   const result = {}

//   for (let word of words) {
//     if (word in result) result[word]++ //in วนลูปเอา key
//     else result[word] = 1
//   }

//   printOccurenceOfNumbers(result)
// }

// function printOccurenceOfNumbers(occurrence) {
//   for (let word in occurrence) {
//     console.log(`${word} occurs ${occurrence[word]} times`)
//   }
// }

// countOccurenceOfNumbers(['Hello', 'Somchai', 555, 'Hello'])

//========================================Destructuring Ex1
// const person = {
//   name: 'somchai',
//   age: 24,
//   address: {
//     road: 'Petchaburi',
//     lat: 112,
//     lng: 151
//   }
// }
// const { name, age } = person
// console.log(name)

//========================================Destructuring Ex2
// const person = {
//   name: 'somchai',
//   age: 24,
//   address: {
//     road: 'Petchaburi',
//     lat: 112,
//     lng: 151
//   }
// }
// const {
//   address: { road, lat, lng }
// } = person
// console.log(lat, lng)

//========================================Destructuring Ex3
// const person = {
//   name: 'somchai',
//   age: 24,
//   address: {
//     road: 'Petchaburi',
//     lat: 112,
//     lng: 151
//   }
// }

// function getName({ name }) {
//   return name
// }
//========================================Onject and array Ex4
// const person = {
//   name: 'somchai',
//   age: 24,
//   address: {
//     road: 'Petchaburi',
//     lat: 112,
//     lng: 151
//   }
// }
// function getGeo({ address: { lat, lng } }) {
//   return `${lat} / ${lng}`
// }
// //หรือ
// const getGeo = ({ address: { lat, lng } }) => `${lat} / ${lng}`
//========================================Onject and array Ex5
// erq = {
//   params: {
//     id: 1,
//     slug: 'test'
//   }
// }
// function handleRoute({params:{id}}) {

// }
//========================================Map,Filter and Find Ex1
// const articles = [
//   {
//     userId: 1,
//     id: 1,
//     title: 'sunt aut facere',
//     body: 'quia et '
//   },
//   {
//     userId: 2,
//     id: 2,
//     title: 'qui est esse',
//     body: 'est rerum '
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
//     body: 'et iusto sed '
//   }
// ]

// const users = [
//   {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: {
//         lat: '-37.3159',
//         lng: '81.1496'
//       }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets'
//     }
//   },
//   {
//     id: 2,
//     name: 'Ervin Howell',
//     username: 'Antonette',
//     email: 'Shanna@melissa.tv',
//     address: {
//       street: 'Victor Plains',
//       suite: 'Suite 879',
//       city: 'Wisokyburgh',
//       zipcode: '90566-7771',
//       geo: {
//         lat: '-43.9509',
//         lng: '-34.4618'
//       }
//     },
//     phone: '010-692-6593 x09125',
//     website: 'anastasia.net',
//     company: {
//       name: 'Deckow-Crist',
//       catchPhrase: 'Proactive didactic contingency',
//       bs: 'synergize scalable supply-chains'
//     }
//   }
// ]
// const name = users.map(user => user)
// console.log(name)

//========================================Map,Filter and Find Ex2
// const result = users.map(
//   ({
//     address: {
//       geo: { lat, lng }
//     }
//   }) => `${lat}/${lng}`
// )
// console.log(result)

//========================================Map,Filter and Find Ex3
// const result = articles
//   .filter(article => article.userId === 1)
//   .map(article => article.title)

// console.log(result)
//========================================Map,Filter and Find Ex4
// const { userId } = articles.find(article => article.id === 1)
// const { email } = users.find(user => user.id === userId)

// console.log(email.toLowerCase())
//========================================Map,Filter and Find Ex5
// const result = articles.map(article => {
//   const { userId, ...rest } = article
//   const user = users.find(user => user.id === userId)

//   return { ...rest, user }
// })

// console.log(result)

//========================================Classes Ex3
// class SavingAccount {
//   constructor(balance) {
//     this.balance = balance;
//   }

//   deposit(amount) {
//     if (amount > 0) this.balance += amount;
//   }

//   withdraw(amount) {
//     if (this.balance >= amount) this.balance -= amount;
//   }
// }

// const account = new SavingAccount(500);

// account.deposit(300);
// account.withdraw(500);

// console.log(account.balance);
//========================================axios

// const axios = require('axios')

// axios
// .get('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.data)
// .then(posts => posts.map(post => post.title))
// .then(titles => console.log(titles))
//========================================loop
// function uniq(items) {
//   const result = []

//   for (let item of items) {
//     if (!result.includes(item)) result.push(item)
//   }

//   return result
// }

// console.log(uniq([1, 1, 1, 1, 2]))
//========================================Recursive Funtion
// function uniq(items, result = []) {
//   if (items.length === 0) return result

//   const item = items[0]

//   return uniq(
//     items.slice(1),
//     result.includes(item) ? result : [...result, item]
//   )
// }

// console.log(uniq([1, 1, 1, 1, 2]))

//========================================Fetching Ex1
// const axios = require('axios')

// axios
//   .get('https://jsonplaceholder.typicode.com/photos')
//   .then(res => res.data)
//   .then(photos => photos.filter(photo => photo.albumId === 1))
//   .then(photos => photos.map(photo => photo.url))
//   .then(photos => console.log(photos))
//========================================Fetching Ex2
// const axios = require('axios')
// axios
//   .get('https://jsonplaceholder.typicode.com/photos')
//   .then(res => res.data)
//   .then(photos => photos.map(photo => photo.url))
//   .then(photos => console.log(photos))

// const axios = require('axios')
// axios
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.data)
//   .then(users => users.map(user => user.address.street))
//   .then(users => console.log(users))

//========================================Fetching Ex3
// const axios = require("axios");

// function findNamesByUserIds(userIds) {
//   return axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.data)
//     .then(users => users.filter(user => userIds.includes(user.id)))
//     .then(users => users.map(user => user.name));
// }

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then(res => res.data)
//   .then(posts => posts.filter(post => post.id < 10))
//   .then(posts => posts.map(post => post.userId))
//   .then(userIds => [...new Set(userIds)])
//   .then(userIds => findNamesByUserIds(userIds))
//   .then(names => console.log(names));
console.log();
