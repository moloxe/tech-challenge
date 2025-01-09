import { useState } from "react";
import { validateMatrix } from "../_utils/validateMatrix";

const useRotateMatrix = () => {
  const [matrix, setMatrix] = useState<null | number[][]>(null);
  const [error, setError] = useState<null | string>(null);

  function handleChangeMatrix(stringMatrix: string) {
    try {
      const newMatrix = validateMatrix(stringMatrix);
      setMatrix(newMatrix);
      setError(null);
    } catch (error) {
      setMatrix(null);
      setError(String(error));
    }
  }

  function rotateLeft() {
    if (!matrix) {
      setError("Matrix is not valid");
      return;
    }

    const newMatrix = matrix.map((row, i) =>
      row.map((_, j) => matrix[j][matrix.length - i - 1])
    );

    setMatrix(newMatrix);
  }

  return { matrix, handleChangeMatrix, error, rotateLeft };
};

export default useRotateMatrix;
