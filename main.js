// //salom berish
// let hour = prompt("Vaqtni kiriting");
// if (hour<12){
//     console.log("Good morning Marjona")
// }else if(hour<18){
//     console.log("Good afternoon Marjona")
// }else{
//     console.log("Good evening Marjona")
// }

//juft yoki toq ekanligini aniqlash
// let son = prompt("Soni kiriting");
// let hisoblash =son%2 ===0? "Bu son juft":"Bu son toq";
// confirm(hisoblash)

// //string metodlari
// let a = "bu   satr";
// let b = "bu ikkinchi satr";
// console.log(a.concat(b));
// console.log(a.slice(3));
// console.log(a.toLocaleUpperCase());
// console.log(a.toLocaleLowerCase());
// console.log(a.endsWith("tr"));
// console.log(a.padEnd(20, "davomi"));
// console.log(a.padStart(40, "yana davomi"));
// console.log(a.trim());
// console.log(a.length);
// console.log(a.replace("bu  satr", b));
// console.log(a.repeat(10));

// let son = parseInt(prompt("99 dan katta 1000 dan kichik soni kiriting:"));
// let bul = son/100;
// let yaxlitla = parseInt(bul);
// console.log(yaxlitla);

// let n = parseInt(prompt("9 dan katta 100 dan kichik soni kiriting:"));
// let n1 = n%10;
// let n2 = parseInt(n/10);
// let yigindi =n1+n2;
// console.log(n1, n2, yigindi);

// let a = parseInt(prompt("Luboy soni kirit:"));
// let b = parseInt(prompt("Luboy  2-soni kirit:"));
// let c =  parseInt(prompt("Luboy 3-soni kirit:"));

// let P = (a+b+c)/2;
// let S = Math.sqrt(P*(P-a)*(P-b)*(P-c));

// console.log(P+"="+a+"+"+b+"+"+c);
// console.log(parseInt(S*100));

// let a=12;
// let c=21;
// let b=Math.sqrt((c**2)-(a**2));
// let r=(a+b+c)/(a*b);
// console.log(b, r);

// let a=12;
// let d=141;
// let n=123;
// let S=((2*a+d*(n-1))/2)*n;
// console.log(S);

// let x1=12;
// let x2=34;
// let y1=67;
// let y2=19;
// let d=Math.sqrt(((x1-x2)**2)+((y1-y2)**2));
// console.log(d);

// let A=104;
// let B=76;
// let bul=A/B;
// let turtxona=bul.toFixed(4)
// console.log(parseInt(bul));
// console.log(turtxona)

// let a=true;
// let b=false;
// let c=true;
// let d=false;
// let javob=((a&&b)||(c&&d)&&(a||b));
// console.log(javob);

// let son1=12;
// let son2=-12;
// let javob=(son1>0)||(son2>0);
// console.log(javob);

// let n=12;
// let bul=n%2;
// let tekshir=bul === 0;
// console.log(tekshir);

// let n=13;
// let bul=n%2;
// let tekshir=bul != 0;
// console.log(tekshir);

// let n1=12;
// let n2=13;
// let bul=(n1%2 === 0)|| (n2%2 != 0);
// console.log(bul)

// let a=2;
// let b=2;
// let c=2.35;
// let yigindi=(a**2)+(b**2);
// let tekshir=yigindi==(c**2);
// console.log(tekshir);

// let hour =prompt("Vaqtni kiritng")
// if (hour<12){
//     console.log("Good morning");
// } else if(hour<18){
//     console.log("Good afternoon");
// }else{
//     console.log("Good night")
// }
// let a = "text     ";
// let b = "Again text";
// console.log(a.concat(b));
// console.log(a.length);
// console.log(b.length);
// console.log(a.slice(3));
// console.log(a.slice(2));
// console.log(a.slice(1));
// console.log(a);
// console.log(a.repeat(2));
// console.log(a.repeat(2).length);
// console.log(b.slice(5).concat(a));
// console.log(a.replace("text", "changed text"));
// console.log(a.padStart(20, "stupid"))
// console.log(a.concat("is").padEnd(20, "stupid"));
// console.log(a.substring(0, 2).concat(b.slice(8)));
// console.log(a.includes("t"));
// console.log(a.endsWith("ghdcfoubgvoykgu8'uyhgfhgdtfkyig,h   "));
// console.log(a.concat(b).trim());
// console.log(a.substring(0, 2).repeat(10));
// let number =1234567;
// console.log(number.toString())
// let textNumber ="1234567";
// console.log(Number(textNumber))
// console.log(parseInt(textNumber))
// let son = "buson";
// let sonu= son.substring(0, 3)
// let uch = 3
// let uzunligi= sonu.length
// let ahmoq = uzunligi=== uch ? "to'g'ri":"noto'ri";
// console.log(ahmoq)
// let number1 = "123"
// let number2 = "456"
// let r_number1 = parseInt(number1)
// let r_number2 = parseInt(number2)
// let add = r_number1+r_number2
// let tekshirish= add===parseInt("579") ? "To'g'ri":"Noto'g'ri"
// console.log(tekshirish)
// let nom = "Archimond"
// let nom_ch= nom.replace("Archimond", "Sargares")
// let nom_k = nom_ch.toLocaleUpperCase()
// let nom_ke = nom_k.slice(4)
// console.log(nom_ke)
// let aniqlash = nom_ke === nom_k.slice(4) ? "T":"N"
// console.log(aniqlash)
// // let nomi = qiymat;
// let fAge= parseInt(prompt("Yoshni kiriting"));
// let sAge= 9;
// let qoshish= Math.abs(fAge)+sAge
// console.log(qoshish)
// let son2 = 24.2;
// console.log(Math.round(son2)) // round yaqin songa yaxlitlaydi
// console.log(Math.ceil(son2))  // keyingi songa otib yuborish
// console.log(Math.floor(son2)) // asos ko'rsatish
// console.log(Math.pow(son2, 5)) // tanlangani darajaga ko'paytirish
// console.log(Math.sqrt(son2))   // ildiz
// console.log(parseInt(Math.random()* 10/1)) // rendom
// let uch_x_s = prompt("3 xonali son kiriting     ");
// let kesamiz = uch_x_s.slice(2);
// let kesamiz2 = uch_x_s.substring(0, 1);
// let kesamiz3 = uch_x_s.substring(0, 2);
// let kesamiz4 = kesamiz3.slice(1)
// console.log(kesamiz.concat(kesamiz2, kesamiz4))
// let uch_x_s = prompt("3 xonali son kiriting     ");
// let kesamiz = uch_x_s.slice(2);
// let kesamiz2 = uch_x_s.substring(0, 1);
// let kesamiz3 = uch_x_s.substring(0, 2);
// let kesamiz4 = kesamiz3.slice(1)
// console.log(kesamiz2.concat(kesamiz, kesamiz4))
// let son=4;
// let a= 25;
// let b=10;
// let P=son*a;
// let S=a**2;
// let S1=a*b;
// let P1=2*(a+b);
// console.log(P);
// console.log(S);
// console.log(S1);
// console.log(P1);
// let pi=Math.PI;
// let d=100;
// let L=pi*d;
// console.log(L);
// let V=a**3;
// console.log(V);
// let S2=6*a**2;
// console.log(S2);
// let c=23;
// let V1=a*b*c;
// console.log(V1);
// let S3=2*(a*b+b*c+a*c);
// console.log(S3);
// let R=35;
// let L1=2*pi*R;
// console.log(L1);
// let S4=pi*R**2;
// console.log(S4);
// let midA=(a+b)/2;
// console.log(midA);
// let ildiz=Math.sqrt(a*b);
// let c1=Math.sqrt(a**2+b**2);
// console.log(c1)
// let P2=a+b+c;
// console.log(P2)
// let R1=12;
// let R2=9;
// let S5=pi*R1;
// let S6=pi*R2;
// let S7=pi*(R1-R2);
// console.log(S7);
// let R3=d/2;
// console.log(R3);
// let S8=pi*R3**2;
// console.log(S8);
// let x1=4324;
// let x2=67327;
// let modul=Math.abs(x1-x2);
// console.log(modul);
// let AB=a+b;
// let BC=b+c;
// let ABC=AB+BC;
// let ABCkop=AB*BC;
// console.log(ABC);
// console.log(ABCkop);
// let y1=342125;
// let y2=21454;
// let masofa=Math.sqrt((x2-x1)**2+(y2-y1)**2);
// console.log(masofa);
// a=2;
// b=3;
// console.log(a, b);
// a=b;
// b=c;
// c=a;
// console.log(a, b, c);
// a=c;
// c=b;
// b=b;
// console.log(a, b, c);
// let x=21;
// let y=3*x**6-6*x**2-7;
// console.log(y);
// let y3=4*(x-3)**6-7*(x-3)**3+2;
// console.log(y3);
// let daraja=a**2;
// let daraja2=a**4;
// let daraja3=a**6;
// console.log(daraja, daraja2, daraja3);
// let darajalar=a**3;
// let darajalar2=    a**5;
// let darajalar3=  a**10;
// let darajalar4=  a**15;
// console.log(darajalar, darajalar2, darajalar3, darajalar4);
// let Tf=142;
// let Tc=(Tf-32)*5/9;
// console.log(Tc);
// let yKg=2;
// let xKg=1;
// let A=1000;
// let summa1=xKg*A;
// let summa2=yKg*A;
// console.log(summa1, summa2);
// let shokoladSoni=12;
// let shokoladsummasi=1200;
// let konfetSoni=12;
// let konfetSummasi=500;
// let yigindi1=shokoladSoni*shokoladsummasi;
// let yigindi2=konfetSoni*konfetSummasi;
// let ayiramiz=yigindi1-yigindi2;
// console.log(ayiramiz);
// let Vf=30;
// let U=10;
// let T1=4;
// let T2=3;
// let vaqt=Vf-U;
// let tezlik=T1-T2;
// let Rmasofa=vaqt*tezlik;
// console.log(Rmasofa);
// let car1V=30;
// let car2V=40;
// let uT=2;
// let s=200;
// let car1S=car1V*uT;
// let car2S=car2V*uT;
// let Us=s-(car1S+car2S);
// console.log(Us);
// let L=parseInt(prompt("100 dan kichik 1 teng yoki katta son kiriting"));
// let sM=L/100;
// console.log(sM);
// let M=parseInt(prompt("1000 dan kichik 1 teng yoki katta son kiriting"));
// let tM=M/1000;
// console.log(tM);
// let bayt=parseInt(prompt());
// let kilobayt=bayt/1024;
// let butun=parseInt(kilobayt);
// console.log(butun);\

// let a=32;
// let b=43;
// let c=12;
// let kupaytir=a*b*c;
// let bul=kupaytir/2;
// let yigindi=a+b+c;
// let teng=a>=b>=c;

// if (kupaytir>yigindi){
//     console.log("kupaytir katta")
// }else{
//     console.log("yigindi katta")
// }

// if(bul<kupaytir){
//     console.log((bul**2)+1+"bul");
// }else{
//     console.log((kupaytir**2)+1+"kup");
// }

// if(a>b>c){
//     console.log("true");
// }else{
//     console.log("false");
// }

// if(teng){
//     console.log(teng*2);
// }else{
//     console.log("absoluyt");
// }

// if(a>b){
//     let ayir=a-b;
//     console.log(ayir);
// }else{
//     let qosh=b-a+1;
//     console.log(qosh)
// }

// if(a>b){
//     console.log(a);
// }else{
//     console.log(a, b);
// }

// if(a<b){
//     console.log(a*0);
// }else{
//     console.log(a);
// }

// let son1=1.5;
// let son2=4;
// let son3=3;
// let bir=1;
// let uch=3;

// if(bir<son1&&son1<uch){
//     console.log(son1);
// }else if(bir<son2&&son2<uch){
//     console.log(son2);
// }else{
//     console.log(son3);
// }

// let ox=1;
// let oy=7;

// if((ox===0)&&(oy===0)){
//     console.log(0);
// }else if((ox>0)&&(oy===0)){
//     console.log(1);
// }else if((oy>0)&&(ox===0)){
//     console.log(1);
// }else{
//     console.log(3);
// }

// let kabisa="366 kun";
// let boshqa="365 kun";
// let yil=prompt("Soni kiriting");
// if((yil/100)%4 === 0){
//     console.log(kabisa);
// }else{
//     if(yil<100){
//         if(yil%4 ===0){
//             console.log(kabisa);
//         }
//     }else{
//         console.log(boshqa)
//     }
// }

// let d = parseInt(prompt("4-soni kiriting"));
// let a = parseInt(prompt("1-soni kiriting"));
// let b = parseInt(prompt("2-soni kiriting"));
// let c = parseInt(prompt("3-soni kiriting"));
// let at = 0;
// let bt = 0;
// let ct = 0;
// if(a>0){
//     a=a+1;
//     console.log(a);
// }else if(a<0){
//     a=a-2;
//     console.log(a);
// }else{
//     a=10;
//     console.log(a);
// }

// if (a > 0) {
//     console.log("a musbat son: " + a);
//     at = 1;
// } else if (a < 0) {
//     console.log("a manfiy son: " + a);
//     at = 0;
// } else {
//     console.log("bu son 0");
//     at = 0;
// }

// if (b > 0) {
//     console.log("b musbat son: " + b);
//     bt = 1;
// } else if (b < 0) {
//     console.log("b manfiy son: " + b);
//     bt = 0;
// } else {
//     console.log("bu son 0");
//     bt = 0;
// }

// if (c > 0) {
//     console.log("c musbat son: " + c);
//     ct = 1;
// } else if (c < 0) {
//     console.log("c manfiy son: " + c);
//     ct = 0;
// } else {
//     console.log("bu son 0");
//     ct = 0;
// }

// let tugri = at + bt + ct;
// console.log("musbat sonlar: " + tugri + " manfiy sonlar: " + (3 - tugri));

// if (a > b) {
//     console.log("a b dan katta: " + a);
// } else {
//     console.log("b a dan katta:" + b);
// }

// if (a < b) {
//     console.log("a b dan kichik: " + a);
// } else {
//     console.log("b a dan kichik: " + b);
// }

// if(a>b){
//     a=a*0;
//     console.log("a: "+a+" b "+b);
// }else{
//     console.log("a: "+a+" b "+b);
// }

// if(a!=b){
//     let yigindi=a+b;
//     console.log(yigindi);
// }else if(a===b){
//     a=0;
//     console.log(a);
// }else{
//     console.log("Sen ahmoqsan...")
// }

// if (a != b) {
//     if (a > b) {
//         b = a;
//     } else {
//         a = b;
//     }
// } else if (a === b) {
//     a = 0;
//     b = 0;
//     console.log(a, b);
// } else {
//     console.log("Sen ahmoqsan...")
// }
// console.log(a, b);

// if(a<b&&a<c){
//     console.log("a kichkina: "+a);
// }else if(b<c&&b<a){
//     console.log("b kichkina: "+b);
// }else{
//     console.log("c kichkina: "+c);
// }

// if(a>b&&a<c){
//     console.log("a o'rtacha son ekan: "+a);
// }else if(b>a&&b<c){
//     console.log("b o'rtacha son ekan: "+b);
// }else{
//     console.log("c o'rtacha son ekan: "+c);
// }

// if(a<b&&a<c){
//     console.log("a kichkina: "+a);
// }else if(b<c&&b<a){
//     console.log("b kichkina: "+b);
// }else{
//     console.log("c kichkina: "+c);
// }

// if(a>b&&a>c){
//     console.log("a katta: "+a);
// }else if(b>c&&b>a){
//     console.log("b katta: "+b);
// }else{
//     console.log("c katta: "+c);
// }

// let yigindi1=a+b;
// let yigindi2=b+c;
// let yigindi3=a+c;

// if(yigindi1>yigindi2&&yigindi1>yigindi3){
//     console.log(yigindi1);
// }else if(yigindi2>yigindi1&&yigindi2>yigindi3){
//     console.log(yigindi2);
// }else{
//     console.log(yigindi3);
// }

// if(a<b<c){
//     a=a**2;
//     b=b**2;
//     c=c**2;
//     console.log(a, b, c);
// }else{
//     a=a*-1;
//     b=b*-1;
//     c=c*-1;
//     console.log(a, b, c);
// }

// if(a<b<c||a>b>c){
//     a=a**2;
//     b=b**2;
//     c=c**2;
//     console.log(a, b, c);
// }else{
//     a=a*-1;
//     b=b*-1;
//     c=c*-1;
//     console.log(a, b, c);
// }

// if(a===b){
//     console.log("c teng emas: "+c);
// }else if(a===c){
//     console.log("b teng emas: "+b);
// }else{
//     console.log("a teng emas: "+a);
// }

// if(a===b&&a===c&&b===c){
//     console.log("d teng emas: "+d);
// }else if(b===d&&b===c&d===c){
//     console.log("a teng emas: "+a);
// }else if(a===b&&a===d&&b===d){
//     console.log("c teng emas: "+c);
// }else{
//     console.log("b teng emas: "+b)
// }

// let ayir=b-a;
// let ayir2=c-a;

// if(ayir<ayir2){
//     console.log("a ga b yaqin ekan: "+ayir);
// }else{
//     console.log("a ga c yaqin ekan: "+ayir2);
// }

// if(a>0){
//     let func=2*Math.sin(a);
//     console.log(func);
// }else if(x<=0){
//     let func=x-6;
//     console.log(func);
// }else{
//     console.log("xato")
// }

// if(a<=0){
//     a=a*-1;
//     console.log(a);
// }else if(0<a&&a<2){
//     a=a**2;
//     console.log(a);
// }else if(a>=2){
//     a=4;
//     console.log(a);
// }

// if(a<-2||a>2){
//     let func=2*a;
//     console.log(func);
// }else{
//     let func=-3*a;
//     console.log(func)
// }

// if(a>0){
//     if(a%2 ===0){
//         console.log("a musbat juft son: "+a);
//     }else{
//         console.log("a musbat toq son: "+a);
//     }
// }else{
//     if(a%2 ===0){
//         console.log("a manfiy juft son: "+a);
//     }else{
//         console.log("a manfiy toq son: "+a);
//     }
// }

// if(a<100){
//     if(a%2 ===0){
//         console.log("a 2 xonali juft son: "+a);
//     }else{
//         console.log("a 2 xonali toq son: "+a);
//     }
// }else if(a<1000){
//     if(a%2 ===0){
//         console.log("a 3 xonali juft son: "+a);
//     }else{
//         console.log("a 3 xonali toq son: "+a);
//     }
// }

// let x=parseInt(prompt("x ni kiritingt:"));
// let y=parseInt(prompt("y ni kiritingt:"));

// if(x<0&&y>0){
//     console.log("2-chorakda yotibdi:"+"x = "+x+" y = "+y);
// }else if(x>0&&y>0){
//     console.log("1-chorakda yotibdi:"+"x = "+x+" y = "+y);
// }else if(x<0&&y<0){
//     console.log("3-chorakda yotibdi:"+"x = "+x+" y = "+y);
// }else if(x>0&&y<0){
//     console.log("4-chorakda yotibdi:"+"x = "+x+" y = "+y);
// }
// if(a>0){
//     a=a+1;
//     console.log(a);
// }else{
//     console.log(a);
// }
// if(a>0){
//     a=a+1;
//     console.log(a);
// }else{
//     a=a-2;
//     console.log(a);
// }

// let oy=parseInt(prompt("Oy raqamini kiriting:"));

// switch (oy){
//     case 1:
//         alert("Yanvar "+" Febral "+" Dekabr");
//     break;
//     case 2:
//         alert("Mart "+" Aprel "+" May");
//     break;
//     case 3:
//         alert("Iyun "+" Iyul "+" Avgust");
//     break;
//     case 4:
//         alert("Sentyabr "+" Oktyabr "+" Noyabr");
//     break;
// }

// let son =parseInt(prompt("1 dan 100 gacha son kiriting:"));

// switch (son){
//     case 1:
//         alert("Bir");
//     break;
//     case 2:
//         alert("Ikki");
//     break;
//     case 3:
//         alert("Uch");
//     break;
//     case 4:
//         alert("To'rt");
//     break;
//     case 5:
//         alert("Besh");
//     break;
//     case 6:
//         alert("Olti");
//     break;
//     case 7:
//         alert("Yetti");
//     break;
//     case 8:
//         alert("Sakkiz");
//     break;
//     case 9:
//         alert("To'qqiz");
//     break;
//     case 10:
//         alert("O'n");
//     break;
//     case 11:
//         alert("O'n bir");
//     break;
//     case 12:
//         alert("O'n ikki");
//     break;
//     case 13:
//         alert("O'n uch");
//     break;
//     case 14:
//         alert("O'n to'rt");
//     break;
//     case 15:
//         alert("O'n besh");
//     break;
//     case 16:
//         alert("O'n olti");
//     break;
//     case 17:
//         alert("O'n yetti");
//     break;
//     case 18:
//         alert("O'n sakkiz");
//     break;
//     case 19:
//         alert("O'n to'qqiz");
//     break;
//     case 20:
//         alert("Yigirma");
//     break;
//     case 21:
//         alert("Yigirma bir");
//     break;
//     case 22:
//         alert("Yigirma ikki");
//     break;
//     case 23:
//         alert("Yigirma uch");
//     break;
//     case 24:
//         alert("Yigirma to'rt");
//     break;
//     case 25:
//         alert("Yigirma besh");
//     break;
//     case 26:
//         alert("Yigirma olti");
//     break;
//     case 27:
//         alert("Yigirma yetti");
//     break;
//     case 28:
//         alert("Yigirma sakkiz");
//     break;
//     case 29:
//         alert("Yigirma to'qqiz");
//     break;
//     case 30:
//         alert("O'ttiz");
//     break;
//     case 31:
//         alert("O'ttiz Bir");
//     break;
//     case 32:
//         alert("O'ttiz Ikki");
//     break;
//     case 33:
//         alert("O'ttiz Uch");
//     break;
//     case 34:
//         alert("O'ttiz To'rt");
//     break;
//     case 35:
//         alert("O'ttiz Besh");
//     break;
//     case 36:
//         alert("O'ttiz Olti");
//     break;
//     case 37:
//         alert("O'ttiz Yetti");
//     break;
//     case 38:
//         alert("O'ttiz Sakkiz");
//     break;
//     case 39:
//         alert("O'ttiz To'qqiz");
//     break;
//     case 40:
//         alert("Qirq");
//     break;
//     case 41:
//         alert("Qirq Bir");
//     break;
//     case 42:
//         alert("Qirq Ikki");
//     break;
//     case 43:
//         alert("Qirq Uch");
//     break;
//     case 44:
//         alert("Qirq To'rt");
//     break;
//     case 45:
//         alert("Qirq Besh");
//     break;
//     case 46:
//         alert("Qirq Olti");
//     break;
//     case 47:
//         alert("Qirq Yetti");
//     break;
//     case 48:
//         alert("Qirq Sakkiz");
//     break;
//     case 49:
//         alert("Qirq To'qqiz");
//     break;
//     case 50:
//         alert("Elik");
//     break;
//     case 51:
//         alert("Elik Bir");
//     break;
//     case 52:
//         alert("Elik Ikki");
//     break;
//     case 53:
//         alert("Elik Uch");
//     break;
//     case 54:
//         alert("Elik To'rt");
//     break;
//     case 55:
//         alert("Elik Besh");
//     break;
//     case 56:
//         alert("Elik Olti");
//     break;
//     case 57:
//         alert("Elik Yetti");
//     break;
//     case 58:
//         alert("Elik Sakkiz");
//     break;
//     case 59:
//         alert("Elik To'qqiz");
//     break;
//     case 60:
//         alert("Oltmish");
//     break;
//     case 61:
//         alert("Oltmish Bir");
//     break;
//     case 62:
//         alert("Oltmish Ikki");
//     break;
//     case 63:
//         alert("Oltmish Uch");
//     break;
//     case 64:
//         alert("Oltmish To'rt");
//     break;
//     case 65:
//         alert("Oltmish Besh");
//     break;
//     case 66:
//         alert("Oltmish Olti");
//     break;
//     case 67:
//         alert("Oltmish Yetti");
//     break;
//     case 68:
//         alert("Oltmish Sakkiz");
//     break;
//     case 69:
//         alert("Oltmish To'qqiz");
//     break;
//     case 70:
//         alert("Yetmish");
//     break;
//     case 71:
//         alert("Yetmish Bir");
//     break;
//     case 72:
//         alert("Yetmish Ikki");
//     break;
//     case 73:
//         alert("Yetmish Uch");
//     break;
//     case 74:
//         alert("Yetmish To'rt");
//     break;
//     case 75:
//         alert("Yetmish Besh");
//     break;
//     case 76:
//         alert("Yetmish Olti");
//     break;
//     case 77:
//         alert("Yetmish Yetti");
//     break;
//     case 78:
//         alert("Yetmish Sakkiz");
//     break;
//     case 79:
//         alert("Yetmish To'qqiz");
//     break;
//     case 80:
//         alert("Sakson");
//     break;
//     case 81:
//         alert("Sakson Bir");
//     break;
//     case 82:
//         alert("Sakson Ikki");
//     break;
//     case 83:
//         alert("Sakson Uch");
//     break;
//     case 84:
//         alert("Sakson To'rt");
//     break;
//     case 85:
//         alert("Sakson Besh");
//     break;
//     case 86:
//         alert("Sakson Olti");
//     break;
//     case 87:
//         alert("Sakson Yetti");
//     break;
//     case 88:
//         alert("Sakson Sakkiz");
//     break;
//     case 89:
//         alert("Sakson To'qqiz");
//     break;
//     case 90:
//         alert("To'qson");
//     break;
//     case 91:
//         alert("To'qson Bir");
//     break;
//     case 92:
//         alert("To'qson Ikki");
//     break;
//     case 93:
//         alert("To'qson Uch");
//     break;
//     case 94:
//         alert("To'qson To'rt");
//     break;
//     case 95:
//         alert("To'qson Besh");
//     break;
//     case 96:
//         alert("To'qson Olti");
//     break;
//     case 97:
//         alert("To'qson Yetti");
//     break;
//     case 98:
//         alert("To'qson Sakkiz");
//     break;
//     case 99:
//         alert("To'qson To'qqiz");
//     break;
//     case 100:
//         alert("Yuz");
//     break;
//     default:
//         alert("Son kiriting:")
// }

// let kun =parseInt(prompt("1 dan 7 gacha son kiriting:"));

// switch (kun){
//     case 1:
//         alert("Dushanba");
//     break;
//     case 2:
//         alert("Seshanba");
//     break;
//     case 3:
//         alert("Chorshanba");
//     break;
//     case 4:
//         alert("Payshanba");
//     break;
//     case 5:
//         alert("Juma");
//     break;
//     case 6:
//         alert("Shanba");
//     break;
//     case 7:
//         alert("Yakshanba");
//     break;
// }

// let baho =parseInt(prompt("1 dan 5 gacha son kiriting:"));

// switch (baho){
//     case 1:
//         alert("yomon");
//     break;
//     case 2:
//         alert("qoniqarsiz");
//     break;
//     case 3:
//         alert("qoniqarli");
//     break;
//     case 4:
//         alert("yaxshi");
//     break;
//     case 5:
//         alert("a'lo");
//     break;
//     default:
//         alert("xato")
// }

// let kunlar;

// switch (oy){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 12:
//        kunlar=31;
//     break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         kunlar=30;
//     break;
//     case 2:
//         kunlar=28;
//     break;
//     default:
//         alert("Ahmoq...")
//     break;
// }
// alert(kunlar)

// let a=parseInt(prompt("1-soni kiriting:"))
// let b=parseInt(prompt("2-soni kiriting:"))
// let misol = parseInt(prompt("soni kiriting:"));

// switch (misol){
//     case 1:
//         misol=a+b;
//         alert(misol);
//     break;
//     case 2:
//         misol=a-b;
//         alert(misol);
//     break;
//     case 3:
//         misol=a/b;
//         alert(misol);
//     break;
//     case 4:
//         misol=a*b;
//         alert(misol);
//     break;
// }

// let uzunlig=parseInt(prompt("Soni kiriting:"))
// let son=parseInt(prompt("1 dan 5 gacha son kiriting:"))
// let mAylantir;

// switch (son){
//     case 1:
//         mAylantir=uzunlig/10;
//     break;
//     case 2:
//         mAylantir=uzunlig*1000;
//     break;
//     case 3:
//         mAylantir=uzunlig;
//     break;
//     case 4:
//         mAylantir=uzunlig/1000;
//     break;
//     case 5:
//         mAylantir=uzunlig/100;
//     break;
// }
// alert("Uzunlig: "+mAylantir+" m ga teng");

// let ogirlig=parseInt(prompt("Soni kiriting:"))
// let son=parseInt(prompt("1 dan 5 gacha son kiriting:"))
// let kgAylantir;

// switch (son){
//     case 1:
//         kgAylantir=ogirlig;
//     break;
//     case 2:
//         kgAylantir=ogirlig/1000;
//     break;
//     case 3:
//         kgAylantir=ogirlig/100;
//     break;
//     case 4:
//         kgAylantir=ogirlig*1000;
//     break;
//     case 5:
//         kgAylantir=ogirlig*100;
//     break;
// }
// alert("Og'irligi: "+kgAylantir+" kg ga teng");

// let kunlar=parseInt(prompt("Sanani kiriting kiriting:"));
// let oy=parseInt(prompt("Oy raqamini kiriting:"));
// let oy_n;
// let h_kun=parseInt(prompt("Haftfa kunini raqamini kiriting:"));
// let h_kun_n;
// switch (oy){
//     case 1:
//         oy_n="Yanvar";
//     break;
//     case 2:
//         oy_n="Fevral";
//     break;
//     case 3:
//         oy_n="Mart";
//     break;
//     case 4:
//         oy_n="Aprel";
//     break;
//     case 5:
//         oy_n="May";
//     break;
//     case 6:
//         oy_n="Iyun";
//     break;
//     case 7:
//         oy_n="Iyul";
//     break;
//     case 8:
//         oy_n="Avgust";
//     break;
//     case 9:
//         oy_n="Sentyabr";
//     break;
//     case 10:
//         oy_n="Oktyabr";
//     break;
//     case 11:
//         oy_n="Noyabr";
//     break;
//     case 12:
//         oy_n="Dekabr";
//     break;
// }

// switch (h_kun){
//     case 1:
//         h_kun_n="Dushanba";
//     break;
//     case 2:
//         h_kun_n="Seshanba";
//     break;
//     case 3:
//         h_kun_n="Chorshanba";
//     break;
//     case 4:
//         h_kun_n="Payshanba";
//     break;
//     case 5:
//         h_kun_n="Juma";
//     break;
//     case 6:
//         h_kun_n="Shanba";
//     break;
//     case 7:
//         h_kun_n="Yakshanba";
//     break;
// }

// alert("Hozir "+oy_n+" oyinig "+h_kun_n+" kuni "+kunlar)

// let kunlar=parseInt(prompt("Sanani kiriting kiriting:"));
// let oy=parseInt(prompt("Oy raqamini kiriting:"));
// let oy_n;
// let h_kun=parseInt(prompt("Haftfa kunini raqamini kiriting:"));
// let h_kun_n;
// switch (oy){
//     case 1:
//         oy_n="Yanvar";
//     break;
//     case 2:
//         oy_n="Fevral";
//     break;
//     case 3:
//         oy_n="Mart";
//     break;
//     case 4:
//         oy_n="Aprel";
//     break;
//     case 5:
//         oy_n="May";
//     break;
//     case 6:
//         oy_n="Iyun";
//     break;
//     case 7:
//         oy_n="Iyul";
//     break;
//     case 8:
//         oy_n="Avgust";
//     break;
//     case 9:
//         oy_n="Sentyabr";
//     break;
//     case 10:
//         oy_n="Oktyabr";
//     break;
//     case 11:
//         oy_n="Noyabr";
//     break;
//     case 12:
//         oy_n="Dekabr";
//     break;
// }

// switch (h_kun){
//     case 0:
//         h_kun_n="Dushanba";
//     break;
//     case 1:
//         h_kun_n="Seshanba";
//     break;
//     case 2:
//         h_kun_n="Chorshanba";
//     break;
//     case 3:
//         h_kun_n="Payshanba";
//     break;
//     case 4:
//         h_kun_n="Juma";
//     break;
//     case 5:
//         h_kun_n="Shanba";
//     break;
//     case 6:
//         h_kun_n="Yakshanba";
//     break;
// }
// kunlar=kunlar+1;
// alert("Hozir "+oy_n+" oyinig "+h_kun_n+" kuni "+kunlar)

// let K=parseInt(prompt("Komanda ber. 1.2.3"));
// let Y;

// switch (K){
//     case 1:
//         Y=" oldinga yurdi";
//         alert("Yo'nalishi " + Y, K)
//     break;
//     case 2:
//         Y="G'arbga yurdi";
//         alert("Yo'nalishi " + Y, K)
//     break;
//     case 3:
//         Y="Sharqqa yurdi";
//         alert("Yo'nalishi " + Y, K)
//     break;
// }

// let R=50;
// let pi=3.14;
// let formula=parseInt(prompt("1 dan 4 gacha son kiriting:"))
// let formulalar;

// switch (formula){
//     case 1:
//         formulalar=R;
//     break;
//     case 2:
//         formulalar=2*R;
//     break;
//     case 3:
//         formulalar=2*pi*R;
//     break;
//     case 4:
//         formulalar=pi*(R**2);
//     break;
// }
// alert(formulalar)
