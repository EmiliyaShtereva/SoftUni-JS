function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const rows = document.querySelectorAll('tbody tr');

   function onClick() {
      const inputValue = document.getElementById('searchField').value.toLowerCase();

      for (let row of rows) {
         const rowText = row.textContent.toLowerCase();

         if (rowText.includes(inputValue)) {
            row.setAttribute('class', 'select');
         } else {
            row.removeAttribute('class');
         }
      }
   }
}