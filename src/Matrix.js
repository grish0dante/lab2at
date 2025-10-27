export default class Matrix {
  constructor(data) {
    this.data = data;
  }

  add(other) {
    return new Matrix(
      this.data.map((row, i) =>
        row.map((val, j) => val + other.data[i][j])
      )
    );
  }

  multiply(other) {
    const rows = this.data.length;
    const cols = other.data[0].length;
    const result = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        for (let k = 0; k < other.data.length; k++) {
          result[i][j] += this.data[i][k] * other.data[k][j];
        }
      }
    }
    return new Matrix(result);
  }

  transpose() {
    const result = this.data[0].map((_, i) =>
      this.data.map(row => row[i])
    );
    return new Matrix(result);
  }
}
