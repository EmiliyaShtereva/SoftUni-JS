window.addEventListener("load", solve);

function solve() {
  let makeElement = document.getElementById('make');
  let modelElement = document.getElementById('model');
  let yearElement = document.getElementById('year');
  let fuelElement = document.getElementById('fuel');
  let originalCostElement = document.getElementById('original-cost');
  let sellingPriceElement = document.getElementById('selling-price');
  let publishBtn = document.getElementById('publish');
  let tableBodyElement = document.getElementById('table-body');
  let carsListElement = document.getElementById('cars-list');
  let profitElement = document.getElementById('profit');

  publishBtn.addEventListener('click', publishHandler);

  function publishHandler(e) {
    e.preventDefault();

    let make = makeElement.value;
    let model = modelElement.value;
    let year = yearElement.value;
    let fuel = fuelElement.value;
    let originalCost = originalCostElement.value;
    let sellingPrice = sellingPriceElement.value;

    if (make === '' ||
        model === '' ||
        year === '' ||
        fuel === '' ||
        originalCost === '' ||
        sellingPrice === '' ||
        (originalCost >= sellingPrice)) {
          return;
        }

    let offer = createTableBody(make, model, year, fuel, originalCost, sellingPrice);
    tableBodyElement.appendChild(offer);

    makeElement.value = '';
    modelElement.value = '';
    yearElement.value = '';
    fuelElement.value = '';
    originalCostElement.value = '';
    sellingPriceElement.value = '';
  }

  function createTableBody(make, model, year, fuel, originalCost, sellingPrice) {
    let trElement = document.createElement('tr');
    trElement.classList.add('row');

    let makeTd = document.createElement('td');
    makeTd.textContent = make;
    let modelTd = document.createElement('td');
    modelTd.textContent = model; 
    let yearTd = document.createElement('td');
    yearTd.textContent = year; 
    let fuelTd = document.createElement('td');
    fuelTd.textContent = fuel; 
    let originalCostTd = document.createElement('td');
    originalCostTd.textContent = originalCost; 
    let sellingPriceTd = document.createElement('td');
    sellingPriceTd.textContent = sellingPrice; 

    let buttonTd = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('action-btn', 'edit');
    editBtn.addEventListener('click', editHandler);

    let sellBtn = document.createElement('button');
    sellBtn.textContent = 'Sell';
    sellBtn.classList.add('action-btn', 'sell');
    sellBtn.addEventListener('click', sellHandler);

    buttonTd.appendChild(editBtn);
    buttonTd.appendChild(sellBtn);

    trElement.appendChild(makeTd);
    trElement.appendChild(modelTd);
    trElement.appendChild(yearTd);
    trElement.appendChild(fuelTd);
    trElement.appendChild(originalCostTd);
    trElement.appendChild(sellingPriceTd);
    trElement.appendChild(buttonTd);

    return trElement;
  }

  function editHandler(e) {
    e.preventDefault();

    let trElement = e.target.parentElement.parentElement;
    trElement.remove();

    let tdElements = trElement.querySelectorAll('td');
    let makeValue = tdElements[0].textContent;
    let modelValue = tdElements[1].textContent;
    let yearValue = tdElements[2].textContent;
    let fuelValue = tdElements[3].textContent;
    let originalValue = tdElements[4].textContent;
    let sellingValue = tdElements[5].textContent;

    makeElement.value = makeValue;
    modelElement.value = modelValue;
    yearElement.value = yearValue;
    fuelElement.value = fuelValue;
    originalCostElement.value = originalValue;
    sellingPriceElement.value = sellingValue;
  }

  function sellHandler(e) {
    e.preventDefault();

    let trElement = e.target.parentElement.parentElement;
    trElement.remove();

    let tdElements = trElement.querySelectorAll('td');
    let makeValue = tdElements[0].textContent;
    let modelValue = tdElements[1].textContent;
    let yearValue = tdElements[2].textContent;
    let originalValue = Number(tdElements[4].textContent);
    let sellingValue = Number(tdElements[5].textContent);

    let liElement = document.createElement('li');
    liElement.classList.add('each-list');

    let makeAndModelEl = document.createElement('span');
    makeAndModelEl.textContent = `${makeValue} ${modelValue}`;
    let productionYearEl = document.createElement('span');
    productionYearEl.textContent = yearValue
    let profitEl = document.createElement('span');
    profitEl.textContent = Number(sellingValue - originalValue);

    liElement.appendChild(makeAndModelEl);
    liElement.appendChild(productionYearEl);
    liElement.appendChild(profitEl);

    carsListElement.appendChild(liElement);

    profitElement.textContent = (Number(profitElement.textContent) + Number(profitEl.textContent)).toFixed(2);
  }
}
