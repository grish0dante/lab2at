import { expect } from 'chai';
import Matrix from '../src/Matrix.js';

describe('Matrix operations (TDD)', function () {
  let A, B;

  beforeEach(() => {
    A = new Matrix([[1, 2], [3, 4]]);
    B = new Matrix([[2, 0], [1, 2]]);
  });

  it('should add two matrices correctly', () => {
    const result = A.add(B);
    expect(result.data).to.deep.equal([[3, 2], [4, 6]]);
  });

  it('should multiply two matrices correctly', () => {
    const result = A.multiply(B);
    expect(result.data).to.deep.equal([[4, 4], [10, 8]]);
  });

  it('should transpose a matrix', () => {
    const result = A.transpose();
    expect(result.data).to.deep.equal([[1, 3], [2, 4]]);
  });
});
