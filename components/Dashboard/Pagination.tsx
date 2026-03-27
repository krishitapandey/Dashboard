'use client';

import { Button } from '@/components/ui/button';
import { PaginationProps } from '@/types/pagination.types';



export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mt-4  mb-8">
      <Button 
        variant="outline"
        onClick={() => onPageChange(p => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className="w-24 sm:w-28 rounded-lg border-primary text-primary hover:bg-accent hover:text-primary"
      >
        Previous
      </Button>
      <span className="text-primary font-medium min-w-[100px] text-center text-sm sm:text-base">
        Page {currentPage} of {totalPages}
      </span>
      <Button 
        variant="outline"
        onClick={() => onPageChange(p => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className="w-24 sm:w-28 rounded-lg border-primary text-primary hover:bg-accent hover:text-primary"
      >
        Next
      </Button>
    </div>
  );
}
