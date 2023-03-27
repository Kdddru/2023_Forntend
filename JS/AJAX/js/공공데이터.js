//fetch async/ await

let count = 0;

async function getPublicData(){
    const promise = await fetch('https://busan-food.openapi.redtable.global/api/menu-dscrn/korean?serviceKey=VrMOw6fNP8sEGumzshLBd0UyCSKsFQ8Q2kw2DZUmnrtIdUpKQdm9FYdsWpmewWXe&pageNo=2');
    const response = await promise.json();
    console.log(response);
    console.log(response.body[0]);
    console.log(response.body[0].MENU_NM);
    const h3 = document.createElement('h3');
    h3.innerHTML = response.body[0].RSTR_NM;
    const p = document.createElement(`p`);
    p.innerHTML = response.body[0].MENU_NM;

    const body = document.querySelector(`body`);
    body.appendChild(h3);
    body.appendChild(p);

    const list = document.querySelector(`#data-list`);


    for(let i= 10*count; i<10+10*count; i++){
        const creLi = document.createElement(`li`);
        list.append(creLi);
        const text = document.createTextNode = `${response.body[i].RSTR_NM} , ${response.body[i].MENU_NM}`;
        creLi.innerHTML = text;
    }
    count++;
}

const dataBtn = document.querySelector(`#data`);

dataBtn.addEventListener(`click`,getPublicData);

//getPublicData();
