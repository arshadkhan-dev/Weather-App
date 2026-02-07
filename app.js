


    let input = document.querySelector("input");
    let button = document.querySelector("button");

    let tempField = document.querySelector(".temperature p");
    let cityField = document.querySelector(".location p");
    let dateTime = document.querySelector(".dateTime p");
    let conditionField = document.querySelector(".condition img");
    let para = document.querySelector(".condition p");

    async function getData(city) {
            let url = `http://api.weatherapi.com/v1/current.json?key=98a90c642318447f84a105658260702&q= ${city}&aqi=no`;

            let res = await fetch(url);
            let data = await res.json();
console.log(data);
            let temp = data.current.temp_c;
            let place = data.location.name;
            let time = data.location.localtime;
            para.innerText = data.current.condition.text;
            
            let icon = data.current.condition.icon;
            conditionField.src= icon;
        
            
            tempField.innerText = temp + "C";
            cityField.innerText = place;
            dateTime.innerText = time;
            
    }


    function getLocation(){
        button.addEventListener("click",()=>{
            input.value = " Enter City Name ";
                   getData(input.value);
        });
    }

 
    getLocation();