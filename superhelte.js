//fetch
fetch("https://kea-alt-del.dk/t7/superheroes/")
.then((res) => res.json())
.then(showSuperheroes);

function showSuperheroes(superheroes) {
//loope
superheroes.forEach(showSuperhero);
}
/*
<p class="alias">Godcille</p>
<p class="realName">Ceva</p>
<p class="birthday"> Birthday: day: 22, month: 6, year: 1994</p>
<p class="origin">Origin: Nødebo</p>
<p class="powers">Powers: Design, Gaming</p>
<p class="weaknesses">Weaknesses: Code, Alcohol</p>
<p class="isHero">Is a superhero </p>
<p class="notHero">Is a villain </p>
<p class="height"> Height: 168</p>
<img src="https://images.pexels.com/photos/6499009/pexels-photo-6499009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/" alt="">
*/
function showSuperhero(superhero) {
    console.log(superhero)
//clone, ændre, appende

const template = document.querySelector("template").content;
const copy = template.cloneNode(true);

copy.querySelector("p.alias").textContent = superhero.alias;
copy.querySelector("p.realName").textContent = superhero.realName;
copy.querySelector("p.birthday").textContent = superhero.birthday;
copy.querySelector("p.origin").textContent = superhero.origin;
copy.querySelector("p.powers").textContent = superhero.powers;
copy.querySelector("p.weaknesses").textContent = superhero.weaknesses;
copy.querySelector("p.isHero").textContent = superhero.isHero;
copy.querySelector("p.notHero").textContent = superhero.notHero;
copy.querySelector("p.height").textContent = superhero.height;
copy.querySelector("img").src = superhero.image;

if(superhero.height < 162) {
    copy.querySelector(".Superheroes").classList.add("tall");
}
else{
    copy.querySelector(".Superheroes").classList.add("small");
}



copy.querySelector(".birthday").textContent = 
superhero.birthday.day + 
"/" + 
superhero.birthday.month +
"/" +
superhero.birthday.year; 

if(superhero.birthday.year < 2000) {
    copy.querySelector(".Superheroes").classList.add("old");
}
else{
    copy.querySelector(".Superheroes").classList.add("young");
}

if(superhero.isHero == "Invisiblity" && superhero.powers == "Invisible" ){
    copy.querySelector(".Superheroes").classList.add("invisible");
}
else{
    copy.querySelector(".Superheroes").classList.add("notInvisible");
}

const parent = document.querySelector(".grid");
parent.appendChild(copy);




}


