'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useUserStore } from '@/store/store';

export default function SearchInput() {
  const { searchQuery, setSearchQuery } = useUserStore();

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-muted-foreground" />
      </div>
      <Input
        type="text"
        placeholder="Search users by name or email..."
        className="w-full py-5 sm:py-6 pl-10 sm:pl-12 pr-4 text-base sm:text-lg border-border rounded-lg focus-visible:border-primary transition-all bg-card text-card-foreground outline-none ring-0 placeholder:text-muted-foreground/50"
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
