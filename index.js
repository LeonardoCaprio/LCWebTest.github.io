// alert("Hello World!");
// id itu biasa dipakai untuk hal yang unik saja atau hanya 1 
// class itu biasa dipakai untuk hal yang lebih dari 1 
document.getElementById("pertama").innerHTML="Pertama";
document.getElementsByClassName("hello")[0].style.color="red";
document.getElementsByClassName("hello")[1].style.color="green";
document.getElementsByTagName("h2")[0].innerHTML="Saya sudah ditimpa";


//----Variabel------
//cara deklarasi variabel di js ada 3 cara  : 
// var
// -Scope global
// -Bisa diupdate dan di-redeclare
// -Terinisialisasi undefined secara default
// let
// -Scope block
// -Bisa diupdate tapi tidak bisa di-redeclare
// -Terinisialisasi undefined secara default
// const
// -Scope block
// -Tidak bisa diupdate dan tidak bisa di-redeclare
// -Tidak ada inisialisasi default & wajib dinisialisasi
// valuenya saat di-declare
// {
//   var a=10;
//   var a="Jadi String";
//   let b=5;
// document.getElementById("a").
//   // let b = 2,5; tidak bsa 
//   b=2.5;
//   const c=1;
//   var test;
//   let halo;
//   console.log(halo);
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// a=10;
// console.log(a);
// console.log(b);
// console.log(c);

//--ARRAY--

var array=["1", 2,2.5,"hello"];
console.log(array);
var hasilloop="<ul>"
for(i=0;i<array.length;i++){
  hasilloop+="<li>"+array[i]+"</li>";
  //ekuivalen dengan hasilloop = hasilloop+array[i]
}
hasilloop+="</ul>"
document.getElementById("loop").innerHTML=hasilloop;

//--SELECTION--
var a=1;
var b="1";
// if(a===b){
//   alert(true);
// }
// else{
//   alert(false);
// }

//Date function
console.log(new Date(2010,0,20,).getDate());
console.log(Math.floor(Math.random()*10)+1);


//--FUNCTION---
function myFunction(value){
  alert("Hello World "+value);
}