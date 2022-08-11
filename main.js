//vaqtga qarab salom berish
let hour =prompt("Vaqtni kiritng")
if (hour<12){
    console.log("Good morning");
} else if(hour<18){
    console.log("Good afternoon");
}else{
    console.log("Good night")
}
//yoshingizga qarab saytga kiritish
let yosh = prompt("Yoshingizni kiriting");
let hisobla = yosh<18 ? "Sizga kirish mumkin emas":"Welcome to my site";
confirm(hisobla);
// string metodlari
let a = "text       ";
let b = "Again text";
console.log(a.concat(b));
console.log(a.length);
console.log(b.length);
console.log(a.slice(3));
console.log(a.slice(2));
console.log(a.slice(1));
console.log(a);
console.log(a.repeat(2));
console.log(a.repeat(2).length);
console.log(b.slice(5).concat(a));
console.log(a.replace("text", "changed text"));
console.log(a.padStart(20, "stupid"))
console.log(a.concat("is").padEnd(20, "stupid"));
console.log(a.substring(0, 2).concat(b.slice(8)));
console.log(a.includes("t"));
console.log(a.endsWith("ghdcfoubgvoykgu8'uyhgfhgdtfkyig,h   "));
console.log(a.concat(b).trim());
console.log(a.substring(0, 2).repeat(10));
let number =1234567;
console.log(number.toString())
let textNumber ="1234567";
console.log(Number(textNumber))
console.log(parseInt(textNumber))
let son = "buson";
let sonu= son.substring(0, 3)
let uch = 3
let uzunligi= sonu.length
let ahmoq = uzunligi=== uch ? "to'g'ri":"noto'ri";
console.log(ahmoq)
let number1 = "123"
let number2 = "456"
let r_number1 = parseInt(number1)
let r_number2 = parseInt(number2)
let add = r_number1+r_number2
let tekshirish= add===parseInt("579") ? "To'g'ri":"Noto'g'ri"
console.log(tekshirish)
let nom = "Archimond"
let nom_ch= nom.replace("Archimond", "Sargares")
let nom_k = nom_ch.toLocaleUpperCase()
let nom_ke = nom_k.slice(4)
console.log(nom_ke)
let aniqlash = nom_ke === nom_k.slice(4) ? "T":"N"
console.log(aniqlash)         
