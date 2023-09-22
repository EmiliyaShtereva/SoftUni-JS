class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    listLength() {
        this.size = this.list.length;
    }

    sortedList() {
        this.list.sort((a, b) => a - b);
    }

    add(element) {
        this.list.push(element);
        this.listLength();
        this.sortedList();
    }

    remove(index) {
        if (this.list[index] === undefined) {
            return;
        }

        this.list.splice(index, 1);
        this.listLength();
        this.sortedList();
    }

    get(index) {
        if (this.list[index] === undefined) {
            return;
        }
        
        return this.list[index];
    }
}