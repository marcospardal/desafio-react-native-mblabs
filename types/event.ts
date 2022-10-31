export default interface Event {
  name: string;
  img?: string;
  description?: string;
  organizer: string;
  organizerType: 'Company' | 'College';
  socialMedia?: string;
  date: string;
  time: string;
  ticketValue: number;
  id: number;
  local?: string;
  street: string;
  neighborhood: string;
  city: string;
}