// Event và Event Emitter trong node js
function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function (type, listener) { // tên sự kiên, và listener gọi khi sự kiện được kích hoạt
    this.events[type] = this.events[type] || [];   // check sự kiện tồn tại chưa
    this.events[type].push(listener);              // push vào object (key là sự kiện, value là list function thực hiện sự kiện)
}

Emitter.prototype.emit = function(type) {          // phát sự kiện
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener()    // duyệt mảng sự kiện và gọi hàm
        });
    }
}

module.exports = Emitter; 