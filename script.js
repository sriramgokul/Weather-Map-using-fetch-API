fetch("https://restcountries.com/v3.1/all")
.then((response)=> response.json())
.then((data)=> {(data);
    data.forEach((ele)=>{
        //console.log(ele)
        let countryDetails = {
            // ...ele,
            name : ele.name.common,
            flags : ele.flags.png,
            capital : ele.capital,
            region : ele.region,
            latlng : ele.latlng,
            CountryCode : ele.area,
            
        }
       
    CountryCard(countryDetails);
    })
}
)
.catch((err)=> console.log("It seems There is some Error in your URL :",err))

    function GetWeather(){
        fetch("https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}")
        .then((res)=> res.json())
        .then((data1)=> console.log(data1))
        // "Please note that using One Call 3.0 requires a separate subscription to the One Call by Call plan. Learn more here https://openweathermap.org/price. If you have a valid subscription to the One Call by Call plan, but still receive this error, then please see https://openweathermap.org/faq#error401 for more info."
    }
    
    




function CountryCard(element){
    document.body.innerHTML += `
    <div class="container">
    <div class="row mb-3">
    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
    <div class="card mb-2 h-100">
    <div class="card-header bg-dark text-white">
    <h1 id="title" class="text-center">${element.name}</h1>
    </div>
    <div class="card-body text-center bg-secondary text-white" >
    <p><span>Capital : ${element.capital} </span></p>
    <img id="flag" src="${element.flags}" alt="${element.name}"/>
    <p><span>Region : ${element.region}</span></p>
    <p><span>Latlng : ${element.latlng}</span></p>
    <p><span>Country Code: ${element.CountryCode}</span></p>
    <button class="btn btn-primary mb-2 "onClick="GetWeather()">Click for Weather</button>
    <div>Current Temp :</div>
    
    </div>
    
    </div>
    </div>
    </div>
    </div>`
}




