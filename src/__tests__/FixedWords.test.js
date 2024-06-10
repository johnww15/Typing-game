import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import FixedWords from "../components/FixedWords";

describe("FixedWords Component", () => {
  beforeEach(() => {
    render(<FixedWords />);
  });

  afterEach(() => {
    cleanup();
  });

  const TESTDATA = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "zero",
  ];
  const TESTCOUNT = 5;

  test("renders the correct random words", () => {
    // Get the rendered text
    const fixedWordsElement = screen.getByTestId("fixedwords");

    // Split the rendered text into an array of words
    const renderedFixedWords = fixedWordsElement.textContent.split(" ");

    // Check if the length of rendered words is correct
    expect(renderedFixedWords.length).toBe(TESTCOUNT);
  });
});
