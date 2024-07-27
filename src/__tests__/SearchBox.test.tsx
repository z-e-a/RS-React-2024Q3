import { describe, expect, test, vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import SearchBox from "../widgets/SearchBox";
import { renderWithProviders } from "./test-utils";
import { ThemeContext } from "../app/Contexts";
import * as actions from "../entities/people/model/peopleViewSlice";

const preloadedState = {
  peopleView: {
    currentPage: 1,
    totalItemsCount: 1,
    selectedPeople: [],
    searchText: "test",
  },
};

describe("SearchBox tests", () => {
  test("Render SearchBox without crash", async () => {
    renderWithProviders(
      <ThemeContext.Provider value={"light"}>
        <SearchBox />
      </ThemeContext.Provider>,
      { preloadedState },
    );

    const input = await screen.findByRole("searchbox");
    expect((input as HTMLInputElement).value).toMatch("test");

    const searchBnt = screen.getByRole("button");
    expect(searchBnt.textContent).toMatch("search");
    expect(searchBnt).toHaveProperty("type", "submit");

    const mockedSetSearchText = vi.spyOn(actions, "setSearchText");

    await fireEvent.click(searchBnt);

    expect(mockedSetSearchText).toHaveBeenCalledWith({ searchText: "test" });
  });
});
