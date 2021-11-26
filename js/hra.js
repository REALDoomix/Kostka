const cube = document.getElementById('cube');
const result = document.getElementById('result');
const play = document.getElementById('play');
const second = document.getElementById('cube2');
const figure = document.getElementById('figure');

let hod;
let hod2 = 0;
let hody = [];
let timer = false;
let cube2 = false;
let pocet = 0;


function animation(){
    hod = Math.ceil(Math.random() * 6);
    cube.src = `img/kostka${hod}.png`;
}

function animation2(){
    var kostka2 = document.getElementById('cube2');
    hod2 = Math.ceil(Math.random() * 6);
    kostka2.src = `img/kostka${hod2}.png`;

}



play.addEventListener('click', () => {
    if(timer == false){
        pocet++;
        timer = setInterval(animation, 200);
        if(cube2 ==  true){
            timer2 = setInterval(animation2, 100);
        }
        play.innerText = 'Stop';
    }else{
        clearInterval(timer);
        if(cube2 == true){
            clearInterval(timer2);
            hody.push(hod2);
        }
        timer = false;
        hody.push(hod);
        result.innerHTML = statistika();
        play.innerText = 'Hrej';
    } 
});

function sumaHodu (){
    let soucet = 0;
    hody.forEach(function(value){
        soucet += value;
    });
    return soucet;
}
function max(){
    let maximum = 1;
    hody.forEach(function(value){
        if(value > maximum) maximum = value;
    });
    return maximum;
}

function min(){
    let minimum = 6;
    hody.forEach(function(value){
        if(value < minimum) minimum = value;
    });
    return minimum;
}


function statistika(){
    let vysledek = `<h3>Aktuální hod: ${hod+hod2}</h3>`;
    vysledek += `<p>Počet hodů: ${pocet}</p>`;
    vysledek += `<p>Součet hodů: ${sumaHodu()}</p>`;
    vysledek += `<p>Průměr hodů: ${(sumaHodu()/hody.length).toFixed(2)}</p>`;
    vysledek += `<p>Maximum z  hodů: ${max()}</p>`;
    vysledek += `<p>Minimum z  hodů: ${min()}</p>`;
    return vysledek;
}

second.addEventListener('click', () => {
    if(timer == false){
        if(cube2 == false){
            var x = document.createElement("IMG");
            x.setAttribute("src", "img/kostka1.png"); 
            x.setAttribute("id", "cube2");
            var src = document.getElementById("figure");
            cube2 = true;
            src.appendChild(x);
        }else if(cube2 == true){
            hod2 = 0;
            document.getElementById('cube2').remove();
            cube2 = false;
        }
        console.log("oopsie");
    }
})