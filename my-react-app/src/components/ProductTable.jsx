import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <div className="card shadow-sm rounded-4 h-100">
      <div className="card-header">
        <h5>Danh sách sản phẩm</h5>

        <small>
          Danh sách sản phẩm mẫu được hiển thị từ dữ liệu hệ thống.
        </small>
      </div>

      <div className="card-body">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>STT</th>
              <th>TÊN SẢN PHẨM</th>
              <th>DANH MỤC</th>
              <th>GIÁ</th>
              <th>TRẠNG THÁI</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;