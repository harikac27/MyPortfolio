export interface CareerProps {
  position: string;
  company: string;
  logo: string | null;
  location: string;
  type: string;
  start_date: string;
  end_date: string | null;
  industry: string;
  link: string | null;
  responsibilities?: string[];
}
