export function validateMatrix(stringMatrix: string) {
  const ERROR_MESSAGE = "Error parsing matrix";
  let parsedMat;
  try {
    parsedMat = JSON.parse(stringMatrix);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
  const rows = parsedMat.length;
  if (typeof rows !== "number") throw new Error(ERROR_MESSAGE);
  const matrix: number[][] = new Array(rows).fill(0).map(() => []);
  for (let iRow = 0; iRow < rows; iRow++) {
    const col = parsedMat[iRow];
    const cols = col.length;
    if (cols !== rows) throw new Error(ERROR_MESSAGE);
    for (let iCol = 0; iCol < cols; iCol++) {
      const value = col[iCol];
      matrix[iRow][iCol] = value;
    }
  }
  return matrix;
}
