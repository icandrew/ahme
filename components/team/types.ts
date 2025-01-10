export interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

export interface TeamMemberState {
  isExpanded: boolean;
}

export interface TeamGridProps {
  members: TeamMemberProps[];
}
