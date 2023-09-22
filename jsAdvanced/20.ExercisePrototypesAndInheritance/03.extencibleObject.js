function extensibleObject() {
    let obj = {
        extend: function (template) {
            for (const parentProp of Object.keys(template)) {
                const templateElement = template[parentProp];

                if (typeof templateElement === 'function') {
                    Object.getPrototypeOf(obj)[parentProp] = templateElement;
                } else {
                    obj[parentProp] = template;
                }
            }
        },
    };

    return obj;
}

const myObj = extensibleObject();
const template = {
  extensionMethod: function () {},
  extensionProperty: "someString",
};
myObj.extend(template);

console.log(myObj.__proto__.extensionMethod);
console.log(myObj.extensionProperty);