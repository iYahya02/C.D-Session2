// let el = document.createElement('div');

// document.body.appendChild(el)

// el.setAttribute('class', 'box');
// el.setAttribute('id', 'x');
// document.getElementById('x').innerHTML = ('test1')


let pname = document.getElementById('productname')
let pprice= document.getElementById('productprice')
let pcategory = document.getElementById('productcategory')
let pdescription = document.getElementById('productdescription')
let submit = document.getElementById('submit')
let dataarr = []

if (localStorage.getItem('product') !== null)
{
    dataarr = JSON.parse(localStorage.getItem('product'))
    Dataloop() 
}

submit.addEventListener('click', () => {
    dataObj = {
        pname : pname.value,
        pprice : pprice.value,
        pcategory : pcategory.value,
        pdescription : pdescription.value
    }

    dataarr.push(dataObj);
    Dataloop()
    clear()
    // localStorage.setItem('product', JSON.stringify(dataarr))

})

function Dataloop(){
    let tableData = ""
    let x = 0

    for (let i = 0 ; i < dataarr.length ; i++){
        tableData += `
            <tr>
                <td>${++x}</td>
                <td>${dataarr[i].pname}</td>
                <td>${dataarr[i].pprice}</td>
                <td>${dataarr[i].pcategory}</td>
                <td>${dataarr[i].pdescription}</td>
                <td><button id="UpBtn"> Update </button></td>
                <td><button id="DelBtn" onclick="deleteData(${i})"> Delete </button></td>
            </tr>
        `;
    }
    document.getElementById('ret').innerHTML = tableData
}

function deleteData(el){
    dataarr.splice(el, 1)
    localStorage.setItem('product', JSON.stringify(dataarr))
    Dataloop()
}

const clear = () => {
    productname.value = ' '
    productprice.value = ' '
    productcategory.value = ' '
    productdescription.value = ' '
}

