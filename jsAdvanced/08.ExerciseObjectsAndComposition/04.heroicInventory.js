function heroicInventory(arr) {
    let heroes = [];
    for (const el of arr) {
        let [name, level, items] = el.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        heroes.push({name, level, items});
    }
    console.log(JSON.stringify(heroes));
}

// [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},
// {"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
// {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])