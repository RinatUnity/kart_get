let div1 = document.createElement("div");
div1.className = "conteint";
let b = document.querySelector("body");



b.appendChild(div1);

fetch('https://fakerapi.it/api/v1/persons?_quantity=10&_locale=ru_RU')
.then(res => res.json())
.then(data =>{
    if(data.code ==200){
        data.data.forEach(element => {
            creatKart(element.firstname,element.lastname,element.address.city);
            console.log(element.firstname);
        });
    }
})

function creatKart(firstName,lastName,city){
    let div2 = document.createElement('div');
    div2.className = "kart";
    div2.innerHTML = `<h3>${firstName}</h3>`;
    div2.innerHTML+= `<h3>${lastName}</h3>`;
    div2.innerHTML+= `<div>Возраст: ${getRandom(50,10)} </div>`;
    div2.innerHTML+= `<div style="margin:10px 10px 10px 10px;font-size:23px;">г.${city}</div>`;
    div1.appendChild(div2);
}

function getRandom(max = 256,min = 10){
    let i =  Math.round(Math.random()*(max-min)+min);
    return `${i} ${pluraliz(i)}`;

}
function pluraliz(n){
    if(n % 100 < 11 || n % 100 > 14){
        if(n % 10 ===1){
            return "год";
        }else if(n % 10 >= 2 && n % 10 <= 4 ){
            return "года";
        }else{
            return "лет";
        }
    }else{
        return "лет";
    }
}

    