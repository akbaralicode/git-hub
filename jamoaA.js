// if1;
// let a = 10;
// if (a > 0) {
//   console.log(a + 1);
// } else {
//   console.log(a);
// }
// if2
// let a = -10;
// if (a > 0) {
//   console.log(a + 1);
// } else {
//   console.log(a - 2);
// }
//if3
// let a = 0;
// if (a > 0) {
//   console.log(a + 1);
// } else if (a < 0) console.log(a - 2);
// else if (a == 0) console.log(a + 10);
// if4
// let a = 8;
// let b = -9;
// let c = -1;
// if (a > 0 && b > 0 && c > 0) {
//   console.log("uchtasi mubat son");
// } else if (a > 0 && b > 0 && c < 0) {
//   console.log("ikkitasi musbat son");
// } else if (a > 0 && b < 0 && c < 0) {
//   console.log("bittasi musbat son");
// }
//if5
// let a = 9;
// let b = -3;
// let c = -7;
// if (a > 0 && b < 0 && c < 0) {
//   console.log("1ta son musbat " + "2 ta son manfiy");
// } else if (a < 0 && b > 0 && c < 0) {
//   console.log("1 ta son musbat " + "2 ta son manfiy");
// } else if (a < 0 && b < 0 && c > 0) {
//   console.log("1 ta son musbat " + "2 ta son manfiy");
// } else if (a > 0 && b > 0 && c < 0) {
//   console.log("2ta son musbat " + "1 ta son manfiy");
// } else if (a < 0 && b > 0 && c > 0) {
//   console.log("2ta son musbat " + "1 ta son manfiy");
// } else if (a > 0 && b < 0 && c > 0) {
//   console.log("2ta son musbat " + "1 ta son manfiy");
// } else if (a < 0 && b < 0 && c < 0) {
//   console.log("3ta son manfiy");
// } els  e if (a > 0 && b > 0 && c > 0) {
//   console.log("3ta son musbat");
// }
//if6
// let a = 15;
// let b = 10;
// if (a > b) {
//   console.log("a katta b dan");
// } else if (b > a) {
//   console.log("b katta a dan");
// }
//if7
// let a = 10;
// let b = 6;
// if (a < b) {
//   console.log("kichik sonning tartibraqami 1");
// } else if (b < a) {
//   console.log("kichik sonning tartibraqami 2");
// } else {
//   console.log("ikkita son ham teng");
// }
//if8
// let son1 = 7;
// let son2 = 5;
// if (son1 > son2) {
//   console.log(son1, son2);
// } else if (son2 > son1) {
//   console.log(son2, son1);
// }
// if9
// let A = 100;
// let B = 900;
// if (A > B) {
//   console.log("kichik = " + A);
//   console.log("katta = " + B);
// } else {
//   A = A + B;
//   B = A - B;
//   A = A - B;
//   console.log("kichik = " + B, "katta = " + A);
// }
//if10
// let A = 5;
// let B = 7;
// if (A !== B) {
//   let almashtirish = A + B;
//   A = almashtirish;
//   B = almashtirish;
// } else {
//   A = 0;
//   B = 0;
// }
// console.log("A =", A, "B =", B);
//if11
// let A = 9;
// let B = 3;
// if (A !== B) {
//   let almashtirish = A > B ? A : B;
//   A = almashtirish;
//   B = almashtirish;
// } else {
//   A = 0;
//   B = 0;
// }
// console.log("A =", A, "B =", B);
//if12
// let x = 3;
// let y = 5;
// let z = 1;
// let son = x;
// if (y < son) {
//   son = y;
// }
// if (z < son) {
//   son = z;
// }
// console.log("Eng kichik son:", son);
//if13
// let x = 3;
// let y = 5;
// let z = 1;
// let orta;
// if ((x > y && x < z) || (x < y && x > z)) {
//   orta = x;
// } else if ((y > x && y < z) || (y < x && y > z)) {
//   orta = y;
// } else {
//   orta = z;
// }
// console.log("o'rta son",orta);
//if14
// let a = 134;
// let b = 8;
// let c = 20;
// if (a < b && a < c) {
//   console.log("a eng kichik son");
// }else if(z)
//if15
// let x = 3;
// let y = 5;
// let z = 4;
// if (x + y >= x + z && x + y >= y + z) {
//   console.log(x, y);
// } else if (x + z >= x + y && x + z >= y + z) {
//   console.log(x, z);
// } else if (x + z >= x + y && x + z >= y + z) {
//   console.log(y, z);
// }
//if16
// let A = 3;
// let B = 5;
// let C = 10;
// if (A < B && B < C) {
//   A *= 2;
//   B *= 2;
//   C *= 2;
// } else {
//   A = -A;
//   B = -B;
//   C = -C;
// }
// console.log("A =", A, "B =", B, "C =", C);
//if17
// let A = 2;
// let B = 4;
// let C = 8;
// if ((A < B && B < C) || (A > B && B > C)) {
//   A *= 2;
//   B *= 2;
//   C *= 2;
// } else {
//   A = -A;
//   B = -B;
//   C = -C;
// }
// console.log("A =", A, "B =", B, "C =", C);
//if18
// let x = 1;
// let y = 7;
// let z = 7;
// if (x === y) {
//     console.log("Z tartib raqami: 3");
// } else if (x === z) {
//     console.log("Y tartib raqami: 2");
// } else if (y === z) {
//     console.log("X tartib raqami: 1");
// }
//if19
// let a = 7;
// let b = 7;
// let c = 7;
// let d = 5;
// if (a === b && b === c) {
//   console.log("D tartib raqami: 4");
// } else if (a === b && b === d) {
//   console.log("C tartib raqami: 3");
// } else if (a === c && c === d) {
//   console.log("B tartib raqami: 2");
// } else if (b === c && c === d) {
//   console.log("A tartib raqami: 1");
// }
//if20
// let A = 5;
// let B = 8;
// let C = 20;
// let yaqinMasofa = B - A;
// let uzoqMasofa = C - A;
// if (yaqinMasofa < uzoqMasofa || yaqinMasofa > uzoqMasofa) {
//   console.log("B nuqtasi yaqin, masofa:", yaqinMasofa);
// } else {
//   console.log("C nuqtasi yaqin, masofa:", uzoqMasofa);
// }
//if21
// let x = 1;
// let y = 3;
// if (x === 0 && y === 0) {
//   console.log(0);
// } else if (y === 0) {
//   console.log(1);
// } else if (x === 0) {
//   console.log(2);
// } else {
//   console.log(3);
// }
//if22
// let x = 3;
// let y = -4;
// if (x > 0 && y > 0) {
//   console.log("1-chorak");
// } else if (x < 0 && y > 0) {
//   console.log("2-chorak");
// } else if (x < 0 && y < 0) {
//   console.log("3-chorak");
// } else if (x > 0 && y < 0) {
//   console.log("4-chorak");
// }
//if23
//if24
// let x = 3;
// let fx;
// if (x > 0) {
//   fx = 2 * Math.sin(x);
// } else {
//   fx = x - 6;
// }
// console.log("f(x) =", fx);
//if25
// let x = 3;
// let fx;
// if (x < -2 || x > 2) {
//   fx = 2 * x;
// } else {
//   fx = -3 * x;
// }
//console.log("f(x) =", fx);
//if26
// let x = -3;
// let fx;
// if (x <= 0) {
//   fx = x;
// } else if (x > 0 && x < 2) {
//   fx = x * x;
// } else if (x >= 2) {
//   fx =  4;
// }
// console.log("f(x) = " + fx);
//if27
//if28
//if29
// let a = -8;
// if (a > 0) {
//   if (a % 2 === 0) {
//     console.log("musbat juft son");
//   } else if (a % 2 === 1) {
//     console.log("musbat toq son");
//   }
// } else if (a < 0) {
//   if (a % 2 === 0) {
//     console.log("mafiy juft son");
//   } else if (a % 2 === 1) {
//     console.log("manfiy toq son");
//   }
// } else {
//   console.log(" son nolga teng");
// }
//if30
// let a = 93;
// if (a >= 10 && a < 100) {
//   if (a % 2 === 0) {
//     console.log("ikki xonali juft son");
//   } else if (a % 2 === 1) {
//     console.log("ikki xonali toq son");
//   }
// } else if (a >= 100 && a < 1000) {
//   if (a % 2 === 0) {
//     console.log("uch xonali juft son");
//   } else if (a % 2 === 1) {
//     console.log("uch xonali toq son");
//   }
// } else {
//   console.log(" son nolga teng");
// }
// let asadbek = 180;
// let asadbekVazn = 68;
// let umidjon = 170;
// let umidjonVazn = 60;
// let BMI = asadbekVazn / Math.pow(asadbek, 2);
// let BMI2 = umidjonVazn / Math.pow(umidjon, 2);
// if (BMI > BMI2) {
//   console.log("asadbek akani BMI si katta");
// } else if (BMI2 > BMI) {
//   console.log("umidjon akani BMI si katta");
// }
// let a = 10;
// let son;
// if (a === 1) {
//   son = "bir";
// } else if (a === 2) {
//   son = "ikki";
// } else if (a === 3) {
//   son = "uch";
// } else if (a === 4) {
//   son = "to'rt";
// } else if (a === 5) {
//   son = "besh";
// } else if (a === 6) {
//   son = "olti";
// } else if (a === 7) {
//   son = "yetti";
// } else if (a === 8) {
//   son = "sakkiz";
// } else if (a === 9) {
//   son = "to'qqiz";
// } else if (a === 10) {
//   son = "o'n";
// } else {
//   console.log("berilgan son xotirada mavjud emas");
// }
// console.log("son =", son);
//switch masalar
//switch 1
// let hafta = "4";
// switch (hafta) {
//   case "1":
//     console.log(hafta + " kun dushanba");
//     break;
//   case "2":
//     console.log(hafta + " kun seshanba");
//     break;
//   case "3":
//     console.log(hafta + " kun chorshanba");
//     break;
//   case "4":
//     console.log(hafta + " kun payshanba");
//     break;
//   case "5":
//     console.log(hafta + " kun juma");
//     break;
//   case "6":
//     console.log(hafta + " kun shanba");
//     break;
//   case "7":
//     console.log(hafta + " kun yakshanba");
//     break;
//   default:
//     console.log("beilgan kun yo'q");
//     break;
// }
//switch2
// let baho = "5";
// switch (baho) {
//   case "1":
//     console.log(baho + "-yomon");
//     break;
//   case "2":
//     console.log(baho + "-qoniqarsiz");
//     break;
//   case "3":
//     console.log(baho + "-qoniqarli");
//     break;
//   case "4":
//     console.log(baho + "-yaxshi");
// .    break;
//   case "5":
//     console.log(baho + "-a'lo");
//     break;
//   default:
//     console.log("beilgan baho yo'q");
//     break;
// }
//swtich3
// let oy = "1";
// switch (oy) {
//   case "1":
//     console.log(oy + " chi oy yanvar");
//     break;
//   case "2":
//     console.log(oy + " chi oy fevral");
//     break;
//   case "3":
//     console.log(oy + " chi oy mart");
//     break;
//   case "4":
//     console.log(oy + " chi oy aprel");
//     break;
//   case "5":
//     console.log(oy + " chi oy may");
//     break;
//   case "6":
//     console.log(oy + " chi oy iyun");
//     break;
//   case "7":
//     console.log(oy + " chi oy iyul");
//     break;
//   case "8":
//     console.log(oy + " chi oy avgust");
//     break;
//   case "9":
//     console.log(oy + " chi oy sentyabr");
//     break;
//   case "10":
//     console.log(oy + " chi oy okyabr");
//     break;
//   case "11":
//     console.log(oy + " chi oy noyabr");
//     break;
//   case "12":
//     console.log(oy + " chi oy dekabr");
//     break;
//   default:
//     console.log("beilgan oy yo'q");
//     break;
// }
//switch4
// let oy = "yanvar";
// switch (oy) {
//   case "yanvar":
//     console.log(oy + " 31 kun bor");
//     break;
//   case "fevral":
//     console.log(oy + " 28 yoki 29 kun bor");
//     break;
//   case "mart":
//     console.log(oy + " 31 kun bor");
//     break;
//   case "aprel":
//     console.log(oy + " 30 kun bor");
//     break;
//   case "may":
//     console.log(oy + " 31 kun bor");
//     break;
//   case "iyun":
//     console.log(oy + " 30 kun bor");
//     break;
//   case "iyul":
//     console.log(oy + " 31 kun bor");
//     break;
//   case "avgust":
//     console.log(oy + " 31 kun bor");
//     break;
//   case "sentyabr":
//     console.log(oy + " 30 kun bor");
//     break;
//   case "okyabr":
//     console.log(oy + " 31 kun bor");
//     break;
//   case "noyabr":
//     console.log(oy + " 31 kun bor");
//     break;
//   case "dekabr":
//     console.log(oy + " 31 kun bor");
//     break;
//   default:
//     console.log("beilgan oy kuni yo'q");
//     break;
// }
//switch5
// let amal = "1";
// switch (amal) {
//   case "1":
//     console.log(amal + " qo'shish");
//     break;
//   case "2":
//     console.log(amal + " qo'shish");
//     break;
//   case "3":
//     console.log(amal + " qo'shish");
//     break;
//   case "4":
//     console.log(amal + " qo'shish");
//     break;
//   default:
//     console.log("berilgan amal yo'q");
//     break;
// }
//switch6
// let metr = 150;
// let kilogramm = "1";
// switch (kilogramm) {
//   case "1":
//     console.log(metr / 10 + " detsimetr");
//     break;
//   case "2":
//     console.log(metr / 1000 + " kilometr");
//     break;
//   case "3":
//     console.log(metr + "metr");
//     break;
//   case "4":
//     console.log(metr / 1000000 + " millimetr");
//     break;
//   case "5":
//     console.log(metr / 100 + " santimetr");
//     break;
//   default:
//     console.log("berilgan metr  yo'q");
//     break;
// }
//switch7
// let kilo = 1500;
// let kilogramm = "4";
// switch (kilogramm) {
//   case "1":
//     console.log(kilo / 1000 + " kilogram");
//     break;
//   case "2":
//     console.log(kilo / 1000000 + " milligramm");
//     break;
//   case "3":
//     console.log(kilo/1000 + " gramm");
//     break;
//   case "4":
//     console.log(kilo / 1000000 + " tonna");
//     break;
//   case "5":
//     console.log(kilo / 100 + " sentner");
//     break;
//   default:
//     console.log("berilgan kilo  yo'q");
//     break;
// }
//switch8
// let oy = 2;
// let kun = 6;
// switch (oy) {
//   case 1:
//     if (0 < kun <= 31) {
//       console.log(`${kun} chi -yanvar`);
//     } else {
//       console.log("berilgan kun mavjud emas");
//     }
//     break;
//   case 2:
//     if (0 < kun <= 31) {
//       console.log(`${kun} chi -fevral`);
//     } else {
//       console.log("berilgan yil kabisa  mavjud emas");
//     }
//     break;
//   case 3:
//     if (0 < kun <= 31) {
//       console.log(`${kun} chi -mart`);
//     } else {
//       console.log("berilgan kun mavjud emas");
//     }
//     break;
//   case 4:
//     if (0 < kun <= 31) {
//       console.log(`${kun} chi -aprel`);
//     } else {
//       console.log("berilgan kun mavjud emas");
//     }
//     break;
//   case 5:
//     if (0 < kun <= 31) {
//       console.log(`${kun} chi -may`);
//     } else {
//       console.log("berilgan kun mavjud emas");
//     }
//     break;
//   case 6:
//     if (0 < kun <= 31) {
//       console.log(`${kun} chi -iyun`);
//     } else {
//       console.log("berilgan kun mavjud emas");
//     }
//     break;
//   case 1:
//     if (0 < kun <= 31) {
//       console.log(`${kun} chi -yanvar`);
//     } else {
//       console.log("berilgan kun mavjud emas");
//     }
//     break;
//   case 1:
//     if (0 < kun <= 31) {
//       console.log(`${kun} chi -yanvar`);
//     } else {
//       console.log("berilgan kun mavjud emas");
//     }
//     break;
//   case 1:
//     if (0 < kun <= 31) {
//       console.log(`${kun} chi -yanvar`);
//     } else {
//       console.log("berilgan kun mavjud emas");
//     }
//     break;
//   case 1:
//     if (0 < kun <= 31) {
//       console.log(`${kun} chi -yanvar`);
//     } else {
//       console.log("berilgan kun mavjud emas");
//     }
//     break;
//   case 1:
//     if (0 < kun <= 31) {
//       console.log(`${kun} chi -yanvar`);
//     } else {
//       console.log("berilgan kun mavjud emas");
//     }
//     break;
//   case 1:
//     if (0 < kun <= 31) {
//       console.log(`${kun} chi -yanvar`);
//     } else {
//       console.log("berilgan kun mavjud emas");
//     }
//     break;
//   default:
//     console.log("berilgan oy da kun mavjud emas");
//     break;
// }
//switch9 ***********************************************************************************************************************************************
//switch10
// let yonalish = "sh";
// let kamanda = "0";
// switch (yonalish) {
//   case "0":
//     console.log("to'g'riga yur");
//     break;
//   case "1":
//     console.log("sharqqa buril");
//     break;
//   case "2":
//     console.log("g'arbga buril");
//     break;
// }
//switch11
//switch12
// let S = 10;
// let element = 1;
// let pi = 3.14;
// let radius, diameter, uzunlik, yuza;
// switch (element) {
//   case 1:
//     radius = S;
//     diameter = 2 * radius;
//     uzunlik = 2 * pi * radius;
//     yuza = pi * radius * radius;
//     console.log(
//       "Radius: " + radius,
//       "Diameter: " + diameter,
//       "uzunlik: " + uzunlik,
//       "yuza: " + yuza
//     );
//     break;
//   case 2:
//     diameter = S;
//     radius = diameter / 2;
//     uzunlik = 2 * pi * radius;
//     yuza = pi * radius * radius;
//     console.log(
//       "Radius: " + radius,
//       "Diameter: " + diameter,
//       "uzunlik: " + uzunlik,
//       "yuza: " + yuza
//     );
//     break;
//   case 3:
//     uzunlik = S;
//     radius = uzunlik / (2 * pi);
//     diameter = 2 * radius;
//     yuza = pi * radius * radius;
//     console.log(
//       "Radius: " + radius,
//       "Diameter: " + diameter,
//       "uzunlik: " + uzunlik,
//       "yuza: " + yuza
//     );
//     break;
//   case 4:
//     yuza = S;
//     radius = Math.sqrt(yuza / pi);
//     diameter = 2 * radius;
//     uzunlik = 2 * pi * radius;
//     console.log(
//       "Radius: " + radius,
//       "Diameter: " + diameter,
//       "uzunlik: " + uzunlik,
//       "yuza: " + yuza
//     );
//     break;
//   default:
//     console.log("berilgan ozgaruvchi mavjud emas");
// }
//switch13
// x = 5;
// element = 1;
// a, c, h, S;
// switch (element) {
//   case 1:
//     a = x;
//     c = a * Math.sqrt(2);
//     h = c / 2;
//     S = (c * h) / 2;
//     console.log(
//       "Katet: " + a,
//       "Gipotenusa: " + c,
//       "Balandlik: " + h,
//       "Yuzasi: " + S
//     );
//     break;
//   case 2:
//     c = x;
//     a = c / Math.sqrt(2);
//     h = c / 2;
//     S = (c * h) / 2;
//     console.log(
//       "Katet: " + a,
//       "Gipotenusa: " + c,
//       "Balandlik: " + h,
//       "Yuzasi: " + S
//     );
//     break;
//   case 3:
//     S = x;
//     console.log("Yuza: " + S);
//     break;
// default:
//     console.log("berilga son mavjud emas");
// }
//switch14
// value = 6;
// element = 1;
// a1, R1, R2, S1
// switch (element) {
//     case 1:
//         a1 = value;
//         R1 = (a1 * Math.sqrt(3)) / 6;
//         R2 = (a1 * Math.sqrt(3)) / 3;
//         S1 = (a1 * a1 * Math.sqrt(3)) / 4;
//         console.log("Tomoni: " + a1, "Ichki radius: " + R1, "Tashqi radius: " + R2, "Yuzasi: " + S1);
//         break;
//     case 2:
//         R1 = value;
//         a1 = (R1 * 6) / Math.sqrt(3);
//         R2 = (a1 * Math.sqrt(3)) / 3;
//         S1 = (a1 * a1 * Math.sqrt(3)) / 4;
//         console.log("Tomoni: " + a1, "Ichki radius: " + R1, "Tashqi radius: " + R2, "Yuzasi: " + S1);
//         break;
//     case 3:
//         R2 = value;
//         a1 = (R2 * 3) / Math.sqrt(3);
//         R1 = (a1 * Math.sqrt(3)) / 6;
//         S1 = (a1 * a1 * Math.sqrt(3)) / 4;
//         console.log("Tomoni: " + a1, "Ichki radius: " + R1, "Tashqi radius: " + R2, "Yuzasi: " + S1);
//         break;
//     case 4:
//         S1 = value;
//         a1 = Math.sqrt((S1 * 4) / Math.sqrt(3));
//         R1 = (a1 * Math.sqrt(3)) / 6;
//         R2 = (a1 * Math.sqrt(3)) / 3;
//         console.log("Tomoni: " + a1, "Ichki radius: " + R1, "Tashqi radius: " + R2, "Yuzasi: " + S1);
//         break;
// default:
//     console.log("berilga son mavjud emas");
// }
//switch15 *********************************************************************************************************************************************
//switch16
// let ab = 55;
// message = "";
// switch (Math.floor(ab / 10) % 10) {
//   case 1:
//     console.log((message = "o'n"));
//     break;
//   case 2:
//     console.log((message = "yigirma"));
//     break;
//   case 3:
//     console.log((message = "o'ttiz"));
//     break;
//   case 4:
//     console.log((message = "qirq"));
//     break;
//   default:
//     console.log((message = "berilgan son mavjud emas"));
//     break;
// }
// switch (ab % 10) {
//   case 0:
//     console.log((message = message + " ta masala"));
//     break;
//   case 1:
//     console.log((message = message + " bir masala"));
//     break;
//   case 2:
//     console.log((message = message + " ikki masala"));
//     break;
//   case 3:
//     console.log((message = message + " uch masala"));
//     break;
//   case 4:
//     console.log((message = message + " to'rt masala"));
//     break;
//   case 5:
//     console.log((message = message + " besh masala"));
//     break;
//   case 6:
//     console.log((message = message + " olti masala"));
//     break;
//   case 7:
//     console.log((message = message + " yetti masala"));
//     break;
//   case 8:
//     console.log((message = message + " sakkiz masala"));
//     break;
//   case 9:
//     console.log((message = message + " to'qqiz yosh"));
//     break;
//   default:
//     console.log("berilgan son mavjud emas");
//     break;
// }
//switch17
// let ab = 38;
// message = "";
// switch (Math.floor(ab / 10) % 10) {
//   case 1:
//     console.log((message = "o'n"));
//     break;
//   case 2:
//     console.log((message = "yigirma"));
//     break;
//   case 3:
//     console.log((message = "o'ttiz"));
//     break;
//   case 4:
//     console.log((message = "qirq"));
//     break;
//   default:
//     console.log((message = "berilgan son mavjud emas"));
//     break;
// }
// switch (ab % 10) {
//   case 0:
//     console.log((message = message + " ta masala"));
//     break;
//   case 1:
//     console.log((message = message + " bir ta masala"));
//     break;
//   case 2:
//     console.log((message = message + " ikki ta masala"));
//     break;
//   case 3:
//     console.log((message = message + " uch ta masala"));
//     break;
//   case 4:
//     console.log((message = message + " to'rt ta masala"));
//     break;
//   case 5:
//     console.log((message = message + " besh ta masala"));
//     break;
//   case 6:
//     console.log((message = message + " olti ta masala"));
//     break;
//   case 7:
//     console.log((message = message + " yetti ta masala"));
//     break;
//   case 8:
//     console.log((message = message + " sakkiz ta masala"));
//     break;
//   case 9:
//     console.log((message = message + " to'qqiz ta masala"));
//     break;
//   default:
//     console.log("berilgan son mavjud emas");
//     break;
// }
//switch18
// let ab = 338;
// message = "";
// switch (Math.floor(ab / 100)) {
//   case 1:
//     console.log((message = "bir yuz"));
//     break;
//   case 2:
//     console.log((message = "ikki yuz"));
//     break;
//   case 3:
//     console.log((message = "uch yuz"));
//     break;
//   case 4:
//     console.log((message = "to'rt yuz"));
//     break;
//   case 5:
//     console.log((message = "besh yuz"));
//     break;
//   case 6:
//     console.log((message = "olti yuz"));
//     break;
//   case 7:
//     console.log((message = "yetti yuz"));
//     break;
//   case 8:
//     console.log((message = "sakkiz yuz"));
//     break;
//   case 9:
//     console.log((message = "to'qqiz yuz"));
//     break;
//   default:
//     console.log((message = "berilgan son mavjud emas"));
//     break;
// }
// switch (Math.floor(ab / 10) % 10) {
//   case 0:
//     console.log((message = message + ""));
//     break;
//   case 1:
//     console.log((message = message + " o'n"));
//     break;
//   case 2:
//     console.log((message = message + " yigima"));
//     break;
//   case 3:
//     console.log((message = message + " o'ttiz"));
//     break;
//   case 4:
//     console.log((message = message + " qirq"));
//     break;
//   case 5:
//     console.log((message = message + " ellik"));
//     break;
//   case 6:
//     console.log((message = message + " otmish"));
//     break;
//   case 7:
//     console.log((message = message + " yetmish"));
//     break;
//   case 8:
//     console.log((message = message + " sakson"));
//     break;
//   case 9:
//     console.log((message = message + " to'qson"));
//     break;
//   default:
//     console.log("berilgan son mavjud emas");
//     break;
// }
// switch (ab % 10) {
//   case 0:
//     console.log((message = message + message + ""));
//     break;
//   case 1:
//     console.log((message = message + message + " bir"));
//     break;
//   case 2:
//     console.log((message = message + message + " ikki"));
//     break;
//   case 3:
//     console.log((message = message + message + " uch"));
//     break;
//   case 4:
//     console.log((message = message + message + " to'rt"));
//     break;
//   case 5:
//     console.log((message = message + message + " besh"));
//     break;
//   case 6:
//     console.log((message = message + message + " olti"));
//     break;
//   case 7:
//     console.log((message = message + message + " yetti"));
//     break;
//   case 8:
//     console.log((message = message + message + " sakkiz"));
//     break;
//   case 9:
//     console.log((message = message + message + " to'qqiz"));
//     break;
//   default:
//     console.log("berilgan son mavjud emas");
//     break;
// }

//Function********************************* dars
// 1. mashq - array ichidagi birinchi va oxirgi element bir xil ekanligini toping.
// const numbers = [1, 2, 3, 1];

// function findFirstLast(number) {
//   return number[0] === number[number.length - 1];
// }

// const result = findFirstLast(numbers);
// console.log(result);

// 2. mashq - berilgan array ichida faqat raqamlarni qaytaradigan dastur yozing.
// const numbers2 = [1, 4, 53, "101", "102", 323];

// function findNumber(...number) {
//   return number.filter((item) => typeof item === "number");
// }

// const result2 = findNumber(1, 4, 53, "101", "102", 323);
// console.log(result2);

//1 -mashq
// function countOddEven(numbers) {
//   const result = { toq: 0, jub: 0 };
//    numbers.forEach((num) => {
//     if (num % 2 === 0) {
//       result.jub += 1;
//     } else {
//       result.toq += 1;
//     }
//   });
//   return result;
// }

// console.log(countOddEven([1, 2, 3, 4, 5, 6, 4]));

// 2. mashq - array ichidagi faqatgina jub sonlarni umumiy sonini toping

// function sumEvenNumbers(number) {
//   let sum = 0;
//   number.forEach((num) => {
//     if (num % 2 === 0) {
//       sum += num;
//     }
//   });
//   return sum;
// }

// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 4]));
