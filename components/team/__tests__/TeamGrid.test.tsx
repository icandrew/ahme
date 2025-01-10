import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TeamGrid } from "../TeamGrid";

describe("TeamGrid", () => {
  const mockMembers = [
    {
      name: "Test Name 1",
      role: "Test Role 1",
      description: "Description 1",
      imageSrc: "image1.jpg",
    },
    {
      name: "Test Name 2",
      role: "Test Role 2",
      description: "Description 2",
      imageSrc: "image2.jpg",
    },
  ];

  it("renders correct number of team members", () => {
    render(<TeamGrid members={mockMembers} />);
    expect(screen.getAllByRole("img")).toHaveLength(2);
    expect(screen.getByText("Test Name 1")).toBeInTheDocument();
    expect(screen.getByText("Test Name 2")).toBeInTheDocument();
  });

  it("maintains grid layout structure", () => {
    const { container } = render(<TeamGrid members={mockMembers} />);
    expect(container.firstChild).toHaveClass("flex", "flex-wrap");
  });
});
