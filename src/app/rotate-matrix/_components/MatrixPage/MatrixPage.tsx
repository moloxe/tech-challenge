"use client";

import useRotateMatrix from "../../_hooks/useRotateMatrix";
import MatrixForm from "../MatrixForm";
import MatrixView from "../MatrixView";

const MatrixPage = () => {
  const { error, handleChangeMatrix, matrix, rotateLeft } = useRotateMatrix();
  return (
    <div className="flex justify-center p-4 min-h-screen w-full">
      <main className="flex flex-col w-full max-w-[500px] gap-4">
        <MatrixForm
          matrixIsLoaded={Boolean(matrix)}
          handleChangeMatrix={handleChangeMatrix}
        />
        {error && (
          <div
            className="text-sm text-red-600 dark:text-red-500"
            aria-label="error-message"
          >
            {error}
          </div>
        )}
        <MatrixView matrix={matrix} rotateLeft={rotateLeft} />
      </main>
    </div>
  );
};

export default MatrixPage;
