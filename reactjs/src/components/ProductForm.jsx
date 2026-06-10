import { useState } from "react";

function ProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Còn hàng");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      category,
      price,
      status,
    };

    onAdd(newProduct);

    setName("");
    setCategory("");
    setPrice("");
    setStatus("Còn hàng");
  };

  return (
    <div className="card h-100 shadow-sm rounded-4">
      <div className="card-header">
        <h5>Thêm sản phẩm mới</h5>
        <small>
          Nhập đầy đủ thông tin để thêm sản phẩm vào danh sách.
        </small>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Tên sản phẩm</label>

            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên sản phẩm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Danh mục</label>

            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">-- Chọn danh mục --</option>
              <option>Điện thoại</option>
              <option>Laptop</option>
              <option>Máy tính bảng</option>
              <option>Phụ kiện</option>
              <option>Tai nghe</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Giá</label>

            <input
              type="text"
              className="form-control"
              placeholder="Nhập giá"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Trạng thái còn hàng</label>

            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Còn hàng</option>
              <option>Hết hàng</option>
            </select>
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-primary col-7">
              Thêm sản phẩm
            </button>

            <button
              type="reset"
              className="btn btn-secondary col-5"
            >
              Làm mới form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;