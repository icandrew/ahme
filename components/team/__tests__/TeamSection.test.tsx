import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TeamSection } from "../TeamSection";

describe("TeamSection", () => {
  it("renders all team members", () => {
    render(<TeamSection />);
    expect(screen.getByText("John Jones")).toBeInTheDocument();
    expect(screen.getByText("Robert Carson")).toBeInTheDocument();
    expect(screen.getByText("Dean Rullo")).toBeInTheDocument();
    expect(screen.getByText("Marc Licha")).toBeInTheDocument();
  });

  it("has proper accessibility attributes", () => {
    render(<TeamSection />);
    expect(
      screen.getByRole("region", { name: /team members/i })
    ).toBeInTheDocument();
  });
});
