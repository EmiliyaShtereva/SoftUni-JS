function search() {
   let towns = document.getElementById('towns').children;
   let searchText = document.getElementById('searchText').value;
   let result = document.getElementById('result');

   let elements = Array.from(towns).map(x => x.textContent);
   let counter = 0;
   
   for (let i = 0; i < elements.length; i++) {
      if (elements[i].includes(searchText)) {
         counter++;
         towns[i].style.fontWeight = 'bolder';
         towns[i].style.textDecoration = 'underline';
      }
   }
   result.textContent = `${counter} matches found`

}
