const prayers = ["sachin","dhoni","aditya","virat","ajinkya","akshay","sam","sagar"];
const divRef = document.querySelector("#list")
function prepareList(){
    const playersStr = prayers.map((val)=>{
        return `<li>${val}</li>`
    }).join("")
   
    const list = `<ul>${playersStr}</ul>`

    divRef.innerHTML=list;
}

prepareList();