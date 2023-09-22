(function() {
    String.prototype.ensureStart = function(str) {
        let actualStr = this.toString();
        if (!actualStr.startsWith(str)) {
            return `${str}${actualStr}`;
        }
        return actualStr;
    }

    String.prototype.ensureEnd = function(str) {
        let actualStr = this.toString();
        if (!actualStr.endsWith(str)) {
            return `${actualStr}${str}`;
        }
        return actualStr;
    }

    String.prototype.isEmpty = function() {
        let actualStr = this.toString();
        return actualStr.length === 0;
    }

    String.prototype.truncate = function(n) {
        let ellipses = '...';
        let singlePoint = '.';
        let actualStr = this.toString();

        if (n <= 3) {
            return singlePoint.repeat(n);
        }

        if (actualStr.length <= n) {
            return actualStr;
        }

        let truncVallue = actualStr.substr(0, n - 2);
        let lastIndex = truncVallue.lastIndexOf(' ');
        if (lastIndex !== -1) {
            return `${actualStr.substr(0, lastIndex)}${ellipses}`;
        }
        
        return `${actualStr.substr(0, n - 3)}${ellipses}`;
    }

    String.format = function(string, ...params) {
        let str = string;

        for (let i = 0; i < params.length; i++) {
            let index = str.indexOf(`{${i}}`);

            while (index !== -1) {
                str = str.replace(`{${i}}`, params[i]);
                index = str.indexOf(`{${i}}`);
            }
        }

        return str;
    }
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
'quick', 'brown');
str = String.format('jumps {0} {1}',
'dog');