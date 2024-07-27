import { expect, test } from "vitest";
import { createRoot } from "react-dom/client";
import App from "../app/App";
import { renderWithProviders } from "./test-utils";
import { ThemeContext } from "../app/Contexts";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const preloadedState = {
  peopleView: {
    currentPage: 1,
    totalItemsCount: 1,
    selectedPeople: [],
    searchText: "test",
  },
};

test("Render App component without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  const component = renderWithProviders(
    <ThemeContext.Provider value={"dark"}>
      <MemoryRouter
        initialEntries={["/search/detail?name=Luke+Skywalker&id=1&text=lu"]}
      >
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </MemoryRouter>
    </ThemeContext.Provider>,
    { preloadedState },
  );

  expect(component).toMatchSnapshot();
  root.unmount();
});
