const btn = document.querySelector("#btn")
const input = document.querySelector("#inp")
const list = document.querySelector("#list");
let arr = [];
let arr2 = [];
let i = 0;
let arr3 = [];
btn.addEventListener("click", function () {
    let num = input.value;
    arr = [];
for(num; num>1 ; num=(num-1)) {
    arr.push(num)
}

arr2=arr.filter(function(num){
arr3 = []
    for(i =1; i<=num ;i++){
    if(num%i==0){
        arr3.push(i)
    }

    }
    if(arr3.length==2){
        return num;
    }
    
   
    
 })
 console.log(arr);
 console.log(arr2);
 console.log(arr3);


 let content = "";
arr2.forEach(function(i) {
    console.log(i);
    content += `<li>${i+","}</li>`
})
console.log(content);
console.log(list)
if(list!=null){
list.innerHTML = content;
}
input.value = null;
});


// let arr2=arr.filter(function(i){
    
//     return i%2 == 0;
//  })


// let arr2 = [];
// for(let i = 10; 1 <= 200; i+=10) {
//     arr.push(i)
// }

// console.log(arr);

// let content = "";
// arr.forEach(function(i) {
//     content += '<li>${i}</li>'
// })

// list.innerHTML = content;