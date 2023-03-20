- _global scope_: code nằm bên ngoài hàm(function)
- _block scope_: code nằm trong dấu {...}: `let` `const`
- _local scope_: code nằm bên trong `function`
- _initializes_: khởi tạo giá trị cho biến
- _block_: 1 vùng code nằm trong dấu {...}
- _temporal dead zone_: khu vực nơi mà biến chưa thể truy cập vào được tới khi chương trình khởi tạo giá trị cho nó
- _hoisting_: đề cập đến việc chương trình ưu tiên việc xử lý khai báo
- _var_: bị hoisting, JS gán cho nó giá trị mặc định là `undefined`
- _let_ _const_: không bị hoisting, JS không gán giá trị mặc định

# Primitive data types

- _string_: chuỗi, thường nằm trong dấu nháy đơn, đôi, backticks
- Có nhiều phương thức để xử lý chuỗi(tham khảo **MDN**), các phương thức có thể nối nhau để xử lý 1 tác vụ gì đó.
- _typeof_: dùng để kiểm tra kiểu dữ liệu của biến hoặc của giá trị
- Khi khai báo biến với `let` hoặc `var` mà không gán giá trị gì cho nó thì mặc định sẽ là `undefined`
- falsy values: false, 0, "", NaN, null, undefined
- truthy values: không phải những giá trị truthy

# Operators

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
- Arithmetic Operators: + - \* / () % ++ --
- Comparison Operators: > < >= <= ==(loose equality: doesn’t compare the data types) vs ===(strict equality) -> Boolean
- Logical Operators: && || !
- Assignment Operators: = += -= \*= /=
- count++: nó sẽ gán trước và tăng giá trị sau
- ++count: nó sẽ tăng trước và gán sau

# Type coercion

- Sử dụng `Boolean(value)` hoặc `!!value` để convert value sang kiểu dữ liệu là boolean(true hoặc false)
- Khi so sánh chuỗi với số sử dụng 2 dấu =(==) thì chuỗi(string) sẽ được convert sang number(số), nếu chuỗi rỗng thì nó sẽ là 0
- đúng(truthy values) và(&&) đúng -> đúng, đúng và sai(falsy values) -> sai, sai và sai -> sai
- đúng hoặc đúng -> đúng, sai hoặc sai -> sai, đúng hoặc sai -> đúng
- Khi so sánh với NaN luôn trả ra `false`, thậm chí NaN cũng không bằng chính nó
- +"333" nó sẽ convert sang number(333)
- `_type coercion_` là tiến trình chuyển đổi giá trị từ kiểu này sang kiểu khác
- explicit: Number, Boolean, String conversion
- string(+), boolean(|| && !), number conversion(+ - \* / % > < <= >= | & ^ ~ ==)
- Khi thực hiện việc chuyển đổi (type coercion) nếu có toán tử dấu cộng(+) với vế có chuỗi(string) thì nó sẽ convert sang **string**
- Nếu có toán tử dấu(+ - \* / % > < <= >= | & ^ ~ ==) thì nó sẽ convert sang **number**
- Nếu có toán tử logical(|| && !) thì nó sẽ convert sang **boolean**
- null chỉ bằng null hoặc undefined khi sử dụng 2 dấu bằng(==)
- `NaN` thực hiện toán tử với số thì trả ra kết quả là `NaN`
- Nếu so sánh chuỗi với chuỗi thì không convert sang gì cả

# Function

- Khi gọi function(), nếu function không có `return` thì nó sẽ trả về là `undefined`
- Tên function nên có ý nghĩa, dễ hiểu, việc đặt tên nên chuẩn như biến
- `parameters` truyền vào function khi khai báo, không bắt buộc, tùy thuộc vào yêu cầu bài toán
- `arguments` truyền vào function khi được gọi(invoke)
- function được truyền vào function khác dưới dạng parameter gọi là `callback`
- Khi gọi function(invoke) thì sẽ tạo ra `execution context`
- Khi gọi function và đã return thì `local execution context` sẽ bị xóa, nghĩa là toàn bộ local variables không còn truy cập được nữa, ngoài trừ return value
- Giá trị mặc định cho parameter trong function

# Array

- Mảng được đánh số từ 0(index)
- Độ dài của mảng dùng .length, chạy từ 1
- _map_ là phương thức duyệt qua các phần tử trong mảng và nó sẽ tạo ra mảng mới dựa vào điều kiện ở callback và không ảnh hưởng tới mảng gốc
- _forEach_ cũng duyệt qua các phần tử trong mảng, forEach không có return
- _sort_ dùng để sắp xếp các phần tử trong mảng theo chuẩn UTF-16, nó sẽ thay đổi luôn mảng gốc(cẩn thận khi sử dụng)
- a > b ? `1` : -1 -> 1(con số lớn hơn 0): sắp xếp tăng dần, -> -1(con số nhỏ hơn 0): sắp xếp giảm dần, 0 nó sẽ giữ nguyên
- `a - b`: sắp xếp tăng dần, `b - a` : sắp xếp giảm dần
- _push_ là phương thức dùng để thêm phần tử vào cuối mảng
- _unshift_ là phương thức dùng để thêm phần tử vào đầu mảng
- _pop_ dùng để xóa phần tử cuối, khi dùng nó mình có thể lưu giá trị bị xóa vào biến
- _shift_ dùng để xóa phần tử đầu, khi dùng nó mình có thể lưu giá trị bị xóa vào biến
- _some_ nó sẽ trả về true nếu có ít nhất 1 điều kiện đúng, ngược lại trả về false
- _every_ nó sẽ trả về true nếu tất điều kiện đều đúng, ngược lại là false
- _find_ nó sẽ trả ra phần tử thỏa mãn điều kiện nào đó, nếu không thỏa mãn nó sẽ trả ra `undefined`
- _findIndex_ nó sẽ trả ra index của phần tử nếu thỏa mãn điều kiện, ngược lại là -1
- _reverse_ đảo ngược mảng, nó ảnh hưởng tới mảng gốc
- _filter_ tạo ra mảng mới, duyệt qua các phần tử trong mảng và lọc ra những phần tử thỏa mãn điều kiện nào đó
- _includes_ kiểm tra phần tử có tồn tại trong mảng hay không ?
- _concat_ dùng để gộp mảng
- _join_ dùng để nối các phần tử trong mảng lại với nhau thông qua prefix(nếu có)
- _Array.isArray(value)_ kiểm tra value có phải là mảng hay không?
- _slice_ dùng để sao chép các phần tử trong mảng ra mảng mới mà ko thay đổi mảng gốc
- _splice_ dùng để thêm hoặc xóa phần tử trong mảng, nó thay đổi mảng gốc, nếu gán nó vào biến và thực hiện chức năng xóa thì nó sẽ trả ra mảng chứa phần tử bị xóa
- _at_ trả ra giá trị ở vị trí index trong mảng, -1 là phần tử cuối cùng
- _toString()_ convert mảng thành chuỗi
- _reduce_ gom các phần tử trong mảng lại làm 1, thường gặp khi làm tính tổng các số trong mảng, hoặc nối chuỗi
- _JSON.parse(JSON.stringify(originalList))_ dùng để sao chép một mảng phức tạp, có nhiều mảng lồng nhau
- Sao chép mảng 1 cấp thì dùng Array.from, slice() hoặc spread operator

# Loop
