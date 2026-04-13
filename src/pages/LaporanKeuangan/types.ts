interface SummaryItem {
  label: string;
  value: string;
}
export interface ContentProps {
  data: SummaryItem[];
}

export interface FooterProps {
  title: string;
  total: string;
  totalColor: string;
}
