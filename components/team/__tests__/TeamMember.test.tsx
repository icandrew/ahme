import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TeamMember } from "../TeamMember";

describe("TeamMember", () => {
  const mockProps = {
    name: "Test Name",
    role: "Test Role",
    description: "Line 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6",
    imageSrc: "test-image.jpg",
  };

  it("renders member information correctly", () => {
    render(<TeamMember {...mockProps} />);
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.role)).toBeInTheDocument();
    expect(
      screen.getByAlt(`${mockProps.name} - ${mockProps.role}`)
    ).toBeInTheDocument();
  });

  it("handles description expansion correctly", () => {
    render(<TeamMember {...mockProps} />);
    const button = screen.getByRole("button");

    expect(screen.getByText(/Line 1/)).toBeInTheDocument();
    expect(screen.queryByText(/Line 6/)).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText(/Line 6/)).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.queryByText(/Line 6/)).not.toBeInTheDocument();
  });
});
