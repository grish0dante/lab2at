export default class Matrix {
  constructor(data) {
    if (!Array.isArray(data) || !Array.isArray(data[0])) {
      throw new Error('Matrix data must be a 2D array');
    }
    this.data = data;
    this.rows = data.length;
    this.cols = data[0].length;
  }

  add(other) {
    if (this.rows !== other.rows || this.cols !== other.cols) {
      throw new Error('Matrix dimensions must match for addition');
    }

    const result = Array.from({ length: this.rows }, (_, i) =>
      Array.from({ length: this.cols }, (_, j) => this.data[i][j] + other.data[i][j])
    );

    return new Matrix(result);
  }

  multiply(other) {
    if (this.cols !== other.rows) {
      throw new Error('Number of columns in A must equal number of rows in B');
    }

    const result = Array.from({ length: this.rows }, () => Array(other.cols).fill(0));
    const bT = other.transpose().data; // транспонуємо B для швидшого доступу до колонок

    for (let i = 0; i < this.rows; i++) {
      const rowA = this.data[i];
      for (let j = 0; j < other.cols; j++) {
        const colB = bT[j];
        let sum = 0;
        for (let k = 0; k < this.cols; k++) {
          sum += rowA[k] * colB[k];
        }
        result[i][j] = sum;
      }
    }

    return new Matrix(result);
  }

  transpose() {
    const result = Array.from({ length: this.cols }, (_, i) =>
      Array.from({ length: this.rows }, (_, j) => this.data[j][i])
    );
    return new Matrix(result);
  }
}
