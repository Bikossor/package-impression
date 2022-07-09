import { render } from "@testing-library/react";
import { App } from "./App";

test("renders the app without crashing", () => {
  render(<App />);
});
