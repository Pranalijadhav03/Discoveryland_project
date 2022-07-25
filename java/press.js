window.addEventListener('DOMContentLoaded', function(){
    console.log("hello js js linked ===============");

    let detailsArray = [{title:"Mākena", desc:" Maui, Hawaii",lattitude:"22.193420° N / -159.361620° W"},
    {title:"North Shore Preserve", desc:" Kaua'i, Hawaii", lattitude:"20.193420° N / -159.361620° W"},{title:"Estancia", desc:" Scottsdale, Arizona",lattitude:"21.193420° N / -159.361620° W"} ]


    let count=0;
    let prev= document.getElementById('previous');
    let nxt= document.getElementById('next');
let _title= document.querySelector('.title');
let _desc= document.querySelector('.desc');
let _lattitude= document.querySelector('.lattitude');
_title.innerHTML = detailsArray[count].title;
 _desc.innerHTML = detailsArray[count].desc;
 _lattitude.innerHTML = detailsArray[count].lattitude;
console.log(count);


nxt.addEventListener('click', function(){
console.log("nxt",count);
if(count >=0){
    count++
}
console.log("count",count, detailsArray[count].title);
 _title.innerHTML = detailsArray[count].title;
 _desc.innerHTML = detailsArray[count].desc;
 _lattitude.innerHTML = detailsArray[count].lattitude;
})

prev.addEventListener('click', function(){
console.log("prev",count);
if(count>=3){
    count--
}
console.log("count",count, detailsArray[count--].title);
_title.innerHTML = detailsArray[count].title;
_desc.innerHTML = detailsArray[count].desc;
_lattitude.innerHTML = detailsArray[count].lattitude;
})

})