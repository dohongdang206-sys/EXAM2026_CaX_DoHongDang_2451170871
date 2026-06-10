# EXAM2026_CaX

## Thông tin sinh viên

* Họ và tên: Đỗ Hồng Đăng
* Mã sinh viên: 2451170871

---

## Mô tả dự án

Dự án được thực hiện theo yêu cầu của đề thi môn **Nền tảng Phát triển Web**.

Ứng dụng quản lý sản phẩm gồm:

* Hiển thị danh sách sản phẩm.
* Thêm mới sản phẩm.
* Sử dụng HTML/CSS/Bootstrap ở Câu 1.
* Chuyển đổi sang ReactJS và tách Component ở Câu 2.

---

## Cấu trúc thư mục

```text
EXAM2026_CaX
├── html/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── data/
│       └── data.js
│
├── reactjs/
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── components/
│       │   ├── Header.jsx
│       │   ├── ProductForm.jsx
│       │   ├── ProductTable.jsx
│       │   └── ProductRow.jsx
│       ├── data/
│       │   └── data.js
│       └── styles/
│           └── app.css
│
└── README.md
```

---

## Câu 1: HTML/CSS/Bootstrap

### Công nghệ sử dụng

* HTML5
* CSS3
* Bootstrap 5

### Chức năng

* Xây dựng giao diện theo đề bài.
* Hiển thị dữ liệu sản phẩm từ file `data.js`.
* Giao diện responsive bằng Bootstrap.

---

## Câu 2: ReactJS

### Công nghệ sử dụng

* ReactJS
* Vite
* Bootstrap 5

### Component

#### Header.jsx

Hiển thị tiêu đề ứng dụng.

#### ProductForm.jsx

Form thêm mới sản phẩm.

#### ProductTable.jsx

Hiển thị bảng danh sách sản phẩm.

#### ProductRow.jsx

Hiển thị từng dòng dữ liệu sản phẩm.

### Chức năng

* Hiển thị dữ liệu động.
* Thêm mới sản phẩm.
* Cập nhật giao diện ngay sau khi thêm.

---

## Hướng dẫn chạy project React

### Bước 1: Cài đặt thư viện

```bash
npm install
```

### Bước 2: Chạy ứng dụng

```bash
npm run dev
```

### Bước 3: Mở trình duyệt

```text
http://localhost:5173
```

---

## Dữ liệu mẫu

Mỗi sản phẩm gồm các thuộc tính:

```javascript
{
  id: 1,
  name: "Laptop Dell",
  category: "Laptop",
  price: 15000000,
  quantity: 10
}
```

---



---
