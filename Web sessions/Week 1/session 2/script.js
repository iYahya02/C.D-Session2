// alert('Welcome buddy!!');

// var Ops = '/';

// var n1 = 4;
// var n2 = 2;

// switch (Ops)
//     {
//         case '+':
//             console.log(n1 + n2);
//         break;
//         case '-':
//             console.log(n1 - n2);
//         break;
//         case '%':
//             console.log(n1 % n2);
//         break;
//         case '/':
//             console.log(n1 / n2);
//         break;
//         case '*':
//             console.log(n1 * n2);
//         break;
//         default:
//             console.log("There is an error, try again!!");
        
//     }

// var count = 1;

// while (count <= 30){
//     count++
//     console.log(count);
// }

// var numbers = [1,2,3,4,5,6,7,8,9,10];
// count = 1;
// while (count < 11){
//     console.log(numbers);
//     numbers++
// }

// var numbers = [1,2,3,4,5,6,7,8,9,10];
// for (var i = 1; i <= numbers.length; i++){
//     console.log(i);
// } 

// var names = ['Numan','Al Waleed','Kareem Basha','Wail','Muhaned','Mutasim'];

// for (var i = 7; i > names.length; i--){
//     console.log(names[i])
// }

// function calcMult()
// {

// }

// function mathOps(n1,ch,n2){
//     switch (ch)
//     {
//         case '+':
//             console.log(n1 + n2);
//         break;
//         case '-':
//             console.log(n1 - n2);
//         break;
//         case '%':
//             console.log(n1 % n2);
//         break;
//         case '/':
//             console.log(n1 / n2);
//         break;
//         case '*':
//             console.log(n1 * n2);
//         break;
//         default:
//             console.log("There is an error, try again!!");
    
//     }
    
// }
// mathOps(4,'*',5);

// function moduDiv(num)
// {
//     if (num % 3 == 0 && num % 4 == 0)
//     {
//         console.log('Yes');
//     }
//     else
//     {
//         console.log('No');
//     }
// }
// moduDiv(8);

// function printLarge(n1,n2)
// {
//     la = Math.max(n1,n2);
//     console.log(la);
// }
// printLarge(7,5);


// function numNaturlity(num)
// {
//     if (num > 0)
//     {
//         console.log("The number is positive " + num);
//     }
//     else if (num < 0)
//     {
//         console.log("The number is negative " + num);
//     }
//     else
//     {
//         console.log("The number is zero " + num);
//     }
    
// }
// numNaturlity(6);

// function getMaxNumber(n1,n2,n3)
// {
//     if (n1 > n2 && n1 > n3 && n2 > n3)
//     {
//         console.log('Max Number is ' + n1 + ' Min Number is ' + n3);
//     }
//     else if (n2 > n3 && n2 > n1 && n1 > n3)
//     {
//         console.log('Max Number is ' + n2 + ' Min Number is ' + n3);
//     }
//     else if (n3 > n1 && n3 > n2 && n2 > n1)
//     {
//         console.log('Max Number is ' + n3 + ' Min Number is ' + n1);
//     }
//     else if (n3 > n1 && n3 > n2 && n1 > n2)
//     {
//         console.log('Max Number is ' + n3 + ' Min Number is ' + n2);
//     }
//     else ("I'm tired and hungry :(")
// }

// getMaxNumber(7,2,5);


// function oddEven (num)
// {
//     if (num % 2 === 0)
//     {
//         console.log("Number is Even");
//     }
//     else
//     {
//         console.log("Number is Odd");
//     }
// }

// oddEven(101);

// function getVowels(x){
//     switch (x)
//     {
//         case 'A':
//             console.log('Vowel');
//         case 'a':
//             console.log('Vowel');
//         case 'E':
//             console.log('Vowel');
//         case 'e':
//             console.log('Vowel');
//         case 'L':
//             console.log('Vowel');
//         case 'l':
//             console.log('Vowel');
//         case 'O':
//             console.log('Vowel');
//         case 'o':
//             console.log('Vowel');
//         case 'U':
//             console.log('Vowel');
//         case 'u':
//             console.log('Vowel');
//         case default:
//              console.log('Constant');

//     }


// }


// function countNum(num)
// {
//     for (var i = 1; i <= num; i++)
//     {
//         console.log(i);
//     }
// }

// countNum(20);


// function multiTable(num)
// {
//     for (var i = 1; i <= 12; i++)
//     {
//         console.log(num * i);
//     }
// }

// multiTable(3);

function printEven(num)
{
    for (var i = 1; i <= num; i++)
    {
        if (i % 2 === 0)
        {
            console.log(i);
        }
    }
}

printEven(30);


// 2nd attempt solving 3 min max question
// function findLarSm(n1,n2,n3)
// {
//     if (n1 > n2 && n1 > n3 && n2 > n3)
//     {
//         console.log("Largest Number is " + n1 + " And smallest number is " + n3)
//     }
//     else if (n2 > n1 && n2 > n3 && n1 > n3)
//     {
//         console.log("Largest Number is " + n2 + " And smallest number is " + n3)
//     }
//     else if (n3 > n1 && n3 > n2 && n2 > n1)
//     {
//         console.log("Largest Number is " + n3 + " And smallest number is " + n1)
//     }
//     else
//     {
//         console.log("Largest Number is " + n3 + " And smallest number is " + n2)
//     }
// }

// findLarSm(); // if middle num is the smallest it glitches 

// function findMaxMin(n1,n2,n3)
// {
//     if (n1 > n2 && n1 > n3)
//     {
//         if (n2 > n3)
//         {
//             console.log(n1 + " is the Largest and " + n3 + " is the Smallest")
//         }
//         else
//         {
//             console.log(n1 + " is the Largest and " + n2 + " is the Smallest")
//         }
//     }
//     else if (n2 > n1 && n2 > n3)
//     {
//         if (n1 > n3)
//         {
//             console.log(n2 + " is the Largest and " + n3 + " is the Smallest")
//         }
//         else
//         {
//             console.log(n2 + " is the Largest and " + n1 + " is the Smallest")
//         }
//     }
//     else
//     {
//         if (n1 > n2)
//         {
//             console.log(n3 + " is the Largest and " + n2 + " is the Smallest")
//         }
//         else
//         {
//             console.log(n3 + " is the Largest and " + n1 + " is the Smallest")
//         }
//     }
// }


// findMaxMin(4,6,2); 