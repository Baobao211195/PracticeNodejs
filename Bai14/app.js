// thực thi code ko đồng bộ

// hàm call back
// 1 function truyền vào 1 hàm khác
// được thực thi vào một thời điểm nào đó , hơac
// sau 1 tiến trình nào đó
var firstFunc = function () {
    console.log('this is the first function');
}

var secondFunc = function () {
    setTimeout(firstFunc, 5000);  // sau 5s mới gọi firstFunc
    console.log('this is the seconde function');
}

secondFunc();
