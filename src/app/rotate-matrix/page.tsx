"use client";

import MatrixForm from "./_components/MatrixForm";
import MatrixView from "./_components/MatrixView";
import useRotateMatrix from "./_hooks/useRotateMatrix";

const RotateMatrixPage = () => {
  const { error, handleChangeMatrix, matrix, rotateLeft } = useRotateMatrix();
  return (
    <div className="flex justify-center p-4 min-h-screen w-full">
      <main className="flex flex-col w-full max-w-[500px] gap-4">
        <MatrixForm handleChangeMatrix={handleChangeMatrix} />
        {error && (
          <div className="text-sm text-red-600 dark:text-red-500">{error}</div>
        )}
        <MatrixView matrix={matrix} rotateLeft={rotateLeft} />
      </main>
    </div>
  );
};

export default RotateMatrixPage;
