import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchBox from "../widgets/SearchBox";
import React from "react";

test("Render SearchBox without props", async () => {
  const callback = vi.fn();
  render(<SearchBox searchText={"test"} searchCallback={callback} />);

  const submitButton = screen.getByText("search");
  submitButton.click();

  expect(submitButton).instanceOf(HTMLButtonElement);
  expect(submitButton).toHaveProperty("type", "submit");
  expect(callback).toBeCalledTimes(1);
});
