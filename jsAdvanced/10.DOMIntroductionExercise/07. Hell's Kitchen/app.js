function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea');
   let bestResturantReslt = document.querySelector('#bestRestaurant>p');
   let workersresult = document.querySelector('#workers>p');

   function onClick () {
      let arr = JSON.parse(input.value);

      let resturants = {};

      arr.forEach((element) => {
         let tokens = element.split(' - ');
         let name = tokens[0];
         let workersArr = tokens[1].split(', ');
         let workers = [];

         for (let worker of workersArr) {
            let workerToken = worker.split(' ');
            let salary = Number(workerToken[1]);
            workers.push({name: workerToken[0], salary});
         }

         if (resturants[name]) {
            workers = workers.concat(resturants[name].workers);
         }

         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
         let bestSalary = workers[0].salary;
         let avarageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         resturants[name] = {
            workers,
            avarageSalary,
            bestSalary,
         };
      });
      
      let bestResturantSalary = 0;
      let bestResturant = undefined;

      for (let name in resturants) {
         if (resturants[name].avarageSalary > bestResturantSalary) {
            bestResturant = {
               name, 
               workers: resturants[name].workers,
               bestSalary: resturants[name].bestSalary,
               avarageSalary: resturants[name].avarageSalary,
            };
            bestResturantSalary = resturants[name].avarageSalary;
         }
      }
      bestResturantReslt.textContent = `Name: ${bestResturant.name} Average Salary: ${bestResturant.avarageSalary.toFixed(2)} Best Salary: ${bestResturant.bestSalary.toFixed(2)}`;

      let result = [];

      bestResturant.workers.forEach((worker) => {result.push(`Name: ${worker.name} With Salary: ${worker.salary}`);});

      workersresult.textContent = result.join(' ');
   }
}