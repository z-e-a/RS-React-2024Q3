import { describe, expect, test, vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import Header from "../widgets/Header";
import styles from "../widgets/Header/ui/Header.module.scss";
import { ThemeContext } from "../app/Contexts";
import { renderWithProviders } from "./test-utils";

describe("Header tests", () => {
  test("Render Header without crash", async () => {
    const mockedCallback = vi.fn();

    let component = renderWithProviders(
      <ThemeContext.Provider value={"light"}>
        <Header toggleThemeCallback={mockedCallback} />
      </ThemeContext.Provider>,
    );

    const article = screen.getByRole("banner");
    expect(article.classList).toContain(styles.light);

    let checkbox = await screen.getByRole("checkbox");
    expect(checkbox).toHaveProperty("checked", true);
    fireEvent.click(checkbox);
    expect(mockedCallback).toHaveBeenCalledOnce();
    component.unmount();

    component = renderWithProviders(
      <ThemeContext.Provider value={"dark"}>
        <Header toggleThemeCallback={mockedCallback} />
      </ThemeContext.Provider>,
    );
    checkbox = await screen.getByRole("checkbox");
    expect(checkbox).toHaveProperty("checked", false);

    const errorBtn = screen.getByText("Invoke error");
    expect(() => {
      fireEvent.click(errorBtn);
    }).toThrow("Forced error");
  });
});
