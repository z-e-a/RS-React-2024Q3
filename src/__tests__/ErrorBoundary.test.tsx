import { expect, test } from "vitest";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "../app/ErrorBoundary";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import Header from "../widgets/Header";

const preloadedState = {
  peopleView: {
    currentPage: 1,
    totalItemsCount: 1,
    selectedPeople: [],
    searchText: "test",
  },
};

test("Render ErrorBoundary component without crashing", async () => {
  const div = document.createElement("div");
  const root = createRoot(div);

  renderWithProviders(
    <ErrorBoundary>
      <Header toggleThemeCallback={() => {}} />
    </ErrorBoundary>,
    { preloadedState },
  );

  const errorBtn = screen.getByText("Invoke error");

  await fireEvent.click(errorBtn);

  const refreshBtn = screen.getByText("refresh page");
  expect(refreshBtn).toBeInstanceOf(HTMLButtonElement);

  await fireEvent.click(refreshBtn);
  root.unmount();
});
