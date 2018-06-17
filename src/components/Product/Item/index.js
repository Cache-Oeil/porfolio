import React, { Component } from 'react';
import './style.scss';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="product-item-container">
        <div className="product-item">
          <div className="img-thumbnail shadow-box">
            <img src="https://i.imgur.com/wttqL6u.png" alt="Blog CiOne" />
          </div>
          <div className="content">
            <h3>Blog CiOne</h3>
            <p>Giao diện được thực hiện dựa trên hình ảnh Web có sẵn</p>
            <p>Kỹ thuật sử dụng: <i className="fa fa-html5" aria-hidden="true"></i>, <i className="fa fa-css3" aria-hidden="true"></i></p>
            <p>Mã nguồn: <a href="#" target="_blank"><span className="black"><i className="fa fa-cloud-download" aria-hidden="true"></i></span></a></p>
            <h3>Đánh giá/ Nhận xét</h3>
            <p>Mentor:</p>
            <ul className="rate">
              <li>
                <h4><span className="lightblue"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></span>Ưu điểm</h4>
                <ul className="rate">
                  <li>
                      <span className="lightblue"><i className="fa fa-check-square" aria-hidden="true"></i></span> Nhìn chung, mã nguồn đồ án đã đạt chuẩn W3C cũng như có giao diện rất bắt mắt, chứng tỏ bạn đã áp dụng được các kiến thức trong khóa học để áp dụng vào đồ án này cũng như tinh thần sáng tạo.
                  </li>
                </ul>
              </li>
              <li>
                <h4><span className="red"><i className="fa fa-thumbs-o-down" aria-hidden="true"></i></span>Lưu ý</h4>
                <ul className="rate">
                  <li>
                      <span className="red"><i className="fa fa-exclamation-circle" aria-hidden="true"></i></span> Không nên sử dụng inline style vì nó sẽ gây khó khăn khi chỉnh sửa và nâng cấp cũng như không thể hiện được tính tách biệt của mã nguồn.
                  </li>
                  <li>
                      <span className="red"><i className="fa fa-exclamation-circle" aria-hidden="true"></i></span> Nên sử dụng văn bản mô tả cho thuộc tính alt của thẻ img thay vì như hiện tại. Vấn đề này cũng có nói khá chi tiết trong khóa HTML.
                  </li>
                  <li>
                      <span className="red"><i className="fa fa-exclamation-circle" aria-hidden="true"></i></span> Nên sử dụng thẻ strong, em thay cho b, i vì tính ngữ nghĩa.
                  </li>
                  <li>
                      <span className="red"><i className="fa fa-exclamation-circle" aria-hidden="true"></i></span> Khi sử dụng selector, lưu ý tên của nó phải rõ ràng, dễ hiểu, hạn chế sử dụng số thứ tự nếu không phải trường hợp quá đặc biệt.
                  </li>
                </ul>
              </li>
              <li>
                <h4><span className="green"><i className="fa fa-hand-o-right" aria-hidden="true"></i></span>Gợi ý</h4>
                <ul className="rate">
                  <li>
                      <span className="green"><i className="fa fa-comment" aria-hidden="true"></i></span> Khuyến khích bạn hạn chế sử dụng element selector để trang trí, ví dụ mặc đinh thẻ h2 trong article sẽ không được hiển thị, điều này sẽ gây ảnh hưởng nên như ta thêm nội dung có sử dụng h2 và muốn nó hiển thị. Vì thế nên lựa chọn sử dụng class cho các trường hợp trang trí đặc thù tránh gây ảnh hưởng đến các thành phần mặc định.
                  </li>
                  <li>
                      <span className="green"><i className="fa fa-comment" aria-hidden="true"></i></span> Ngoài ra, trong một số trường hợp không nhất thiết phải thiết lập width height là 100%, đặc biệt là thẻ body. Vì các giá trị này có hay không nó cũng không ảnh hưởng đến bố cục hiện tại. Thường thì ta chỉ thiết lập width height cho các phần tử bên trong body mà thôi.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;