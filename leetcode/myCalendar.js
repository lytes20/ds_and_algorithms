var MyCalendarTwo = function () {};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
    for (let i = 0; i < this.calendar.length; i++) {
        const current = this.calendar[i];
        const [currentStart, currentEnd] = current;
        if (currentStart < end && start < currentEnd) {
            return false;
        }
    }
    this.calendar.push(start, end);
    return true;
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
