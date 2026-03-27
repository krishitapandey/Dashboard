export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: (prev: number) => number) => void;
}