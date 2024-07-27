import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Loader from "../shared/Loader";

test("Render Loader without crash", async () => {
  render(<Loader />);

  const img = screen.getByAltText("load spinner");

  expect(img).instanceOf(HTMLImageElement);
});
