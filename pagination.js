function pagination(products, rowsPerPage) {
  const totalPages = Math.round(products.length / rowsPerPage);
  const pageList = [];
  for (let i = 0; i < totalPages; i++) {
    pageList.push(products.splice(0, rowsPerPage));
  }
  console.log(pageList);
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
pagination(arr, 4);
