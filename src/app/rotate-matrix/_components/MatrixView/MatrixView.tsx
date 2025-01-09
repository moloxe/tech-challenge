import { FC } from "react";
import Image from "next/image";
import RotateLeft from "@/assets/icons/RotateLeft.svg";

type Props = {
  matrix: null | number[][];
  rotateLeft: () => void;
};

const MatrixView: FC<Props> = ({ matrix, rotateLeft }) => {
  if (!matrix) return null;
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <table className="rounded-lg overflow-hidden bg-blue-500">
        <tbody>
          {matrix.map((row, i) => (
            <tr key={`matrix-${i}`}>
              {row.map((cell, j) => (
                <td
                  key={`matrix-${i}-${j}`}
                  className="w-10 h-10 text-center border border-blue-400"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={rotateLeft}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        aria-label="rotate-matrix-left"
      >
        <Image
          src={RotateLeft}
          alt="Rotate Left"
          width={16}
          height={16}
          className="inline-block mr-2"
        />
        Rotate Left
      </button>
      <div className="inline-block">
        Output Matrix:
        <pre aria-label="matrix-output-message">{JSON.stringify(matrix)}</pre>
      </div>
    </div>
  );
};

export default MatrixView;
