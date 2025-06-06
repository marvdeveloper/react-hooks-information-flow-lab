import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";
import React from "react";
import { useState } from "react";

const testData = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Cookies", category: "Dessert" },
];

// Helper wrapper component to simulate the parent (App)
function TestWrapper({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <ShoppingList
      items={items}
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
    />
  );
}

test("displays all items when initially rendered", () => {
  const { container } = render(<TestWrapper items={testData} />);
  expect(container.querySelector(".Items").children).toHaveLength(testData.length);
});

test("displays only items that match the selected category", () => {
  const { container } = render(<TestWrapper items={testData} />);

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dairy" },
  });
  expect(container.querySelector(".Items").children).toHaveLength(2);

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dessert" },
  });
  expect(container.querySelector(".Items").children).toHaveLength(1);
});
