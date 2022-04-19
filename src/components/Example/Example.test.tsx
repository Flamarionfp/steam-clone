import { render } from "@testing-library/react";
import { Example } from './Example'

describe("Example component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Example />);

    expect(getByText("Example Component")).toBeTruthy();
  })
})