export interface EventItem {
  id: string;
  title: string;
  startsAt: string;
  location?: string;
  organizer?: string;
  thumbnail?: string;
  goingCount?: number;
  description?: string;
  icon?: string;
  goingLabel?: string;
  buttonColor?: string;
}
