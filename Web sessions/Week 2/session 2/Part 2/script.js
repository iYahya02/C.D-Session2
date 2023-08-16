// let btn = document.getElementById("btn");
//  btn.addEventListener('click', () => {
    
//  let num1 = document.getElementById("num1")
//  let num2 = document.getElementById("num2")

//  let res = +num1.value + +num2.value; 
//     // or 
//     // parseInt(num1.value) + parseInt(num2.value)
//  document.getElementById('he').innerHTML = "Answer = " + res;
//  });


// let mgc = document.getElementById("mgc")

// mgc.addEventListener('click', () => {
//     let obj = document.getElementsByClassName("obj")[0];

//     obj.classList.toggle("obj1")
// })


window.addEventListener('keyup', (x) => {
    
    if (x.code === "ArrowRight")
    {
        let ok = document.getElementsByClassName('ok')[0];
        ok.classList.toggle("after")
        
    }
    console.log(x.code)
})
// window.addEventListener('keydown', () => {

// })

// let a2 = document.getElementById("a2").textContent("Hello World")