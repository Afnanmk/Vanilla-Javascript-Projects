window.onload = function(){
    getInfo();
}
window.onkeyup = function(){
   searchCountry();
}
async function getInfo(){
   const response = await fetch('https://api.covid19api.com/summary');
   const data = await response.json();

   let res = data.Countries;
//    console.log(res);
   let output = '<tr><th>Country</th><th>Total Confirmed</th><th>Active Cases</th><th>Total Deaths</th><th>Total Recovered</th></tr>';

   res.forEach(function(country){
      
       output += 
       `
             <tr>
                <td class="country"><a href="" class="link">${country.Country}</a></td>
                <td>${country.TotalConfirmed.toLocaleString('en')}</td>
                <td>${(country.TotalConfirmed - country.TotalRecovered).toLocaleString('en')}</td>
                <td>${country.TotalDeaths.toLocaleString('en')}</td>
                <td>${country.TotalRecovered.toLocaleString('en')}</td>
              </tr>
              
       `;
       document.querySelector('.tabl').innerHTML = output;
   })
}
setTimeout(getInfo, 5000);

function searchCountry(){
   const input = document.getElementById("myInput");
   const filter = input.value.toUpperCase();
   const table = document.querySelector(".tabl");
   const tr = table.getElementsByTagName('tr');
   
   for(let i=0; i < tr.length; i++){
      const td = tr[i].getElementsByTagName('td')[0];
   
      if(td){
         const txtValue = td.textContent || td.innerHTML;
         if(txtValue.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = "";
         } else {
            tr[i].style.display = "none";
         }
      }
   }
}