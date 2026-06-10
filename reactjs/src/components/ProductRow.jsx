function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>

      <td>
        <span
          className="badge rounded-pill"
          style={{
            color:
              product.status === "Còn hàng"
                ? "green"
                : "red",

            backgroundColor:
              product.status === "Còn hàng"
                ? "rgb(237,247,228)"
                : "rgb(248,215,218)",
          }}
        >
          {product.status}
        </span>
      </td>
    </tr>
  );
}

export default ProductRow;