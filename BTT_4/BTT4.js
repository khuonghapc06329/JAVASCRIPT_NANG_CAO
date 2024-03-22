class Infomation {
    // Biến public
    id;   // có thể truy xuất bất cứ nơi nào
  
    // Biến protected
    _email; // là một biến nội bộ nhưng cũng có thể truy xuất và thay đổi giá trị từ bên ngoài (nhưng không nên)
  
    // Biến private
    #class; // Chỉ truy xuất ở bên trong class và không thể truy xuất ở bên ngoài class
  
    constructor() {
      // Khởi tạo giá trị cho các biến
      this.id = 'PC06329';
      this._email = 'khuonghapc06329@fpt.edu.vn';
      this.#class = 'WD18301';
    }
  
    getInfomation() {
      // Hiển thị giá trị -> Nhưng vẫn còn trong class nên biến #class vẫn truy xuất được và không bị lỗi
      console.log(
        `
            Public: ${this.id},
            Protected: ${this._email},
            Private: ${this.#class}
        `
      );
    }
  }
  
  class Score extends Infomation {
    // Lớp con kế thừa từ lớp cha Infomation
    // Bạn có thể sử dụng các biến public, protected và private của lớp cha trong lớp con
  
    // Thêm các biến hoặc phương thức riêng của lớp con nếu cần thiết
  }
  //Tạo đối tượng getIN
  var getIN = new Infomation();

// Hiển thị thông tin từ lớp Infomation
getIN.getInfomation();

// Có thể truy xuất và thay đổi giá trị biến id
getIN.id = "pc06329";
console.log(getIN.id);
console.log("Biến đã được thay đổi");
getIN.getInfomation();
// Không thể truy xuất biến private (#class) từ bên ngoài class
// getIN.getInfomation(getIN.#class);
  console.log('Hiển thị thông tin của lớp cha từ lớp con');
  let score = new Score();
  score.getInfomation(); // Kế thừa và hiển thị thông tin từ lớp cha Infomation
  