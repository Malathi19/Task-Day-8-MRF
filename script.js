var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all",true)

request.send ();

request.onload = function (){
    var result = JSON.parse (request.response)
   

    // a)Get all the countries from the Asia continent /region using the Filter function
       //let data = result.filter((value)=>{
        //return value.region === "Asia"
       //}) console.log(data)}

    // b) Get all the countries with a population of less than 2 lakhs using Filter function
    //let data = result.filter((value)=>{
       // return value.population < 200000
       //})console.log(data)}

    //c) Print the following details name, capital, flag using forEach function
        //result.forEach((input)=>{
        //console.log(input.name, input.capital, input.flags)})}
                     

   // d)Print the total population of countries using reduce function
         //let population = result.reduce((acc,ele)=> {return acc+ele.population},0)
         //console.log(population)}

    // e) Print the country which uses US Dollars as currency.

    let data = result.filter((value)=>{
        return value.currencies !== undefined && 'USD' in value.currencies
       }) 
       console.log(data)
       }


  
