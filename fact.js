let form = document.querySelector("form");
let app =document.querySelector("#app");



async function getFact(year="random"){
    year = year ? year : "random";
    let respnse = await fetch(`http://numbersapi.com/${year}/year`);
    // let data  = await respnse.json() dont work becous api say me text 
    let data  = await respnse.text()
    app.textContent = data;
    app.className = "alert alert-success"

}
form.addEventListener("submit",e=>{
    e.preventDefault();
    getFact(e.target.number.value)
})