let a ={
  1:1,
  2:2
}
let b = a
a['1'] = 3
a['2'] = 3
console.log(b);
console.log(a);