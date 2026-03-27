'use client';

import { useEffect } from 'react';

import Link from 'next/link';
import { User } from '@/types/user.types';
import { useUserStore } from '@/store/store';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Mail, Building2 } from 'lucide-react';

import SearchInput from './SearchInput';

export default function UserList({ initialUsers }: { initialUsers: User[] }) {
  const { users, setUsers, searchQuery, setSearchQuery, apiIsLoading, setLoading } = useUserStore();

  useEffect(() => {
    setLoading(true);
    setUsers(initialUsers);
    setLoading(false);
  }, [initialUsers, setUsers, setLoading]);

  const filteredUsers = users.filter((user: User) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (apiIsLoading) return <p className="text-center text-muted-foreground py-10">Loading users...</p>;

  return (
    <div className="space-y-12">
      <SearchInput />

      {filteredUsers.length === 0 ? (
        <div className="text-center py-20 bg-accent rounded-lg border border-dashed border-primary flex flex-col items-center gap-4">
          <p className="text-primary text-xl font-medium">No information present</p>
          <Button 
            variant="outline" 
            onClick={() => setSearchQuery('')}
            className="rounded-lg border-primary text-primary hover:bg-primary hover:text-white"
          >
            Clear Search
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user: User) => (
            <Card key={user.id} className="flex flex-col h-full rounded-lg border border-primary bg-card transition-colors hover:bg-none">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl transition-colors duration-300">
                    {user.name.charAt(0)}
                  </div>
                  <span className="line-clamp-1 text-primary">{user.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="grow space-y-4">
                <div className="flex items-center text-muted-foreground transition-colors">
                  <Mail className="w-4 h-4 mr-3 text-primary/70" />
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center text-muted-foreground transition-colors">
                  <Building2 className="w-4 h-4 mr-3 text-primary/70" />
                  <span className="truncate font-medium">{user.company.name}</span>
                </div>
              </CardContent>
              <CardFooter className=" ring-0 border-none ">
                <Link 
                  href={`/users/${user.id}`}
                  className={buttonVariants({ className: "w-full py-6 text-md rounded-lg font-semibold transition-all active:scale-95 hover:bg-accent! hover:text-primary hover:border-primary" })}
                >
                  View Posts
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

