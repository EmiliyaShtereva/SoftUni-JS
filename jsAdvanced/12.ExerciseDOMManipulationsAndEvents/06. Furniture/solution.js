function solve() {
  const table = document.querySelector('table.table tbody');
  const [input, output] = [...document.querySelectorAll('textarea')];
  const [generateBtn, buyBtn] = [...document.querySelectorAll('button')];

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function p(...content) {
    return createElement('p', {}, ...content);
  }

  function td(...content) {
    return createElement('td', {}, ...content);
  }

  function createElement(type, props, ...content) {
    const element = document.createElement(type);

    for (const prop in props) {
      element[prop] = props[prop];
    }

    for (let entry of content) {
      if (typeof entry === 'string' || typeof entry === 'number') {
        entry = document.createTextNode(entry);
      }

      element.appendChild(entry);
    }

    return element;
  }

  const items =[];
  function generate(e) {
    const data = JSON.parse(input.value);

    for (const item of data) {
      const checkbox = createElement('input', {type: 'checkbox'});

      const {img, name, price, decFactor} = item;
      const row = createElement(
        'tr',
        {},
        td(createElement('img', {src: img})),
        td(p(name)),
        td(p(price)),
        td(p(decFactor)),
        td(checkbox),
      );

      items.push({element: row, isChecked, item});

      function isChecked() {
        return checkbox.checked;
      }

      table.appendChild(row);
    }
  }

  function buy(e) {
    const furniture = items
      .filter((i) => i.isChecked())
      .reduce(
        (acc, {item: c}, i, a) => {
          acc.names.push(c.name);
          acc.total += Number(c.price);
          acc.decFactor += Number(c.decFactor) / a.length;
          return acc;
        },
        {names: [], total: 0, decFactor: 0}
      );
    
    const result = `Bought furniture: ${furniture.names.join(', ')}\nTotal price: ${furniture.total.toFixed(2)}\nAverage decoration factor: ${furniture.decFactor}`;

    output.value = result;
  }
}