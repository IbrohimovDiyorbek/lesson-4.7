const array = ["Mars", "Yupiter", "Saturn", "Venera"];
let long = array.length;
console.log("Arrayning uzunligi 1 =" + long);
alert("Arrayning uzunligi 1" + long);

let result = confirm("Siz jarayon davom etishini hohlaysizmii?");

if (result) {
    array.pop();
    let l = array.length;
    alert("Kesilgan arraynning uzunligi 1 = " + 1);
}else{
    let l = array.length;
    console.log("Siz jarayonni to'xtatganingiz uchun 1 =" + 1);
}