import UserList from "@/components/Dashboard/UserList";
import { User } from "@/types/user.types";


export default async function UsersPage() {

  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/users`, { 
    cache: 'no-store' 
  });
  
  if (!res.ok) {
    return <div className="p-8 text-red-500">Something went wrong</div>;
  }

  const users: User[] = await res.json();

  return (
    <main className="text-foreground pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h1>
            Members Directory
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our network of users and their latest activity.
          </p>
        </div>
        <UserList initialUsers={users} />
      </div>
    </main>
  );
}
