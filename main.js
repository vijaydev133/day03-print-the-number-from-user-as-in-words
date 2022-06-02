let input = document.getElementById("inp");

let btn1 = document.getElementById("btn-1");

let output = document.getElementById("out");

btn1.addEventListener("click", function () {
  let num = input.value;
  console.log(num);
  let lastDigit;

  while (num > 0) {
    let para = document.createElement("p");
    lastDigit = num % 10;

    switch (lastDigit) {
      case 1:
        para.innerText = "one";
        output.appendChild(para);
        break;

      case 2:
        para.innerText = "Two";
        output.appendChild(para);
        break;

      case 3:
        para.innerText = "Three";
        output.appendChild(para);
        break;

      case 4:
        para.innerText = "Four";
        output.appendChild(para);
        break;

      case 5:
        para.innerText = "Five";
        output.appendChild(para);
        break;

      case 6:
        para.innerText = "Six";
        output.appendChild(para);
        break;

      case 7:
        para.innerText = "Seven";
        output.appendChild(para);
        break;

      case 8:
        para.innerText = "Eight";
        output.appendChild(para);
        break;

      case 9:
        para.innerText = "Nine";
        output.appendChild(para);
        break;

      default:
        para.innerText = "Zero";
        output.appendChild(para);
        break;
    }
    num = Math.floor(num / 10);
  }
});

// let num = 245;
//  let lastDigit;

// while (num > 0) {
//   lastDigit = num % 10;

//   switch (lastDigit) {
//     case 1:
//       console.log("one");
//       break;

//     case 2:
//       console.log("Two");
//       break;

//     case 3:
//       console.log("Three");
//       break;

//     case 4:
//       console.log("Four");
//       break;

//     case 5:
//       console.log("Five");
//       break;

//     case 6:
//       console.log("Six");
//       break;

//     case 7:
//       console.log("Seven");
//       break;

//     case 8:
//       console.log("Eight");
//       break;

//     case 9:
//       console.log("Nine");
//       break;

//     default:
//         console.log("Zero");
//       break;
//   }
//    num = Math.floor(num / 10)
// }
