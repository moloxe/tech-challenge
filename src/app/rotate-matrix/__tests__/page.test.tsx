import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Page from "../page";

test("rotate the matrix to the left", async () => {
  render(<Page />);
  const matrixInput = screen.getByRole("textbox", {
    name: "matrix-string-input",
  }) as HTMLInputElement;

  fireEvent.change(matrixInput, {
    target: { value: "[[1,2,3],[4,5,6],[7,8,9]]" },
  });

  expect(matrixInput.value).toBe("[[1,2,3],[4,5,6],[7,8,9]]");

  const submitButton = screen.getByRole("button", {
    name: "submit-matrix-button",
  }) as HTMLButtonElement;

  fireEvent.click(submitButton);

  const rotateLeftButton = screen.getByRole("button", {
    name: "rotate-matrix-left",
  }) as HTMLButtonElement;

  fireEvent.click(rotateLeftButton);

  const outputMessage = screen.getByLabelText("matrix-output-message");
  expect(outputMessage.innerHTML).toBe("[[3,6,9],[2,5,8],[1,4,7]]");
});
