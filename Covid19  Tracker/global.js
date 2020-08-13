window.onload = function(){
    getData();
}
function getData(){
    
fetch ('https://api.covid19api.com/summary')
    .then((res) => res.json())
    .then((data) => {
       let res = data;
       const output = document.querySelector('.output');
       output.innerHTML = `
         <h3>Confirmed Cases</h3>
         <h4 class="case">${res.Global.TotalConfirmed.toLocaleString('en')}</h4>
         <h3>Deaths</h3>
         <h4 class="death">${res.Global.TotalDeaths.toLocaleString('en')}</h4>
         <h3>Recovered</h3>
         <h4 class="recovery">${res.Global.TotalRecovered.toLocaleString('en')}</h4>
         `;
        
       
       console.log(data);
       
        });
        
       
}


         