var AllOne = function () {
    this.allOne = {};
    this.maxCount = 0;
    this.maxKeys = new Set();
    this.minCount = Infinity;
    this.minKeys = new Set();
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
    if (this.allOne[key]) {
        this.allOne[key] = this.allOne[key] + 1;
    } else {
        this.allOne[key] = 1;
    }

    if (this.allOne[key] >= this.maxCount) {
        this.maxCount = this.allOne[key];
        this.maxKeys.add(key);
    }
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
    this.allOne[key] = this.allOne[key] - 1;
    if (this.allOne[key] === 0) {
        delete this.allOne[key];
        this.minKeys.delete(key);
    }

    if (this.allOne[key] && this.allOne[key] <= this.maxCount) {
        this.minCount = this.allOne[key];
        this.minKeys.add(key);
    }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
    if (this.maxKeys.size === 0) {
        return '';
    }
    const [first] = this.maxKeys;
    return first;
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
    if (this.minKeys.size === 0) {
        return '';
    }
    const [first] = this.minKeys;
    return first;
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
