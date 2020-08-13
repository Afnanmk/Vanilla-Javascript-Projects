const form = document.getElementById('lbsInput');
document.getElementById('output').style.visibility = 'hidden';

form.addEventListener('input', function(e){
   let lbs = e.target.value;
   document.getElementById('output').style.visibility = 'visible';
   //grams
   document.getElementById('gramsOutput').innerHTML = (lbs*453.59237).toFixed(2);
   //kilograms
   document.getElementById('kgOutput').innerHTML = (lbs*0.453592).toFixed(2);
   //ounces
   document.getElementById('ozOutput').innerHTML = (lbs*16).toFixed(2);

});