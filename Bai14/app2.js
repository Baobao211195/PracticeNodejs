// libuv, event loop and non-blocking

// libuv sử lý sự kiện ở tầng thấp hơn
// các sự kiện ở hệ điều hành
// dùng call back queue và eventloop

//+ Eventloop là tiến trình để xử lý các lời gọi ở bên ngoài 
/// thành các call back
// và luôn kiểm tra call stack của v8 có rống không
/// nếu rống kiểm tra callback queue (event loop luôn chạy để kiểm trac
 // call queue)
 // khi ở callback queue có thì event loop sẽ chuyển đổi thành call back
 // và thực thi tại v8 engine
