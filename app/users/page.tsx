import UserList from "@/components/Dashboard/UserList";
import { User } from "@/types/user.types";

export default async function UsersPage() {
  const apiUrl = process.env.API_URL ;

  try {
  
    const res = await fetch(`${apiUrl}/users`, { 
      next: { revalidate: 3600 } 
    });
    
    if (!res.ok) throw new Error('Failed to fetch users');
    const users: User[] = await res.json();

    return (
      <main className="text-foreground pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold">Members Directory</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our network of users and their latest activity.
            </p>
          </div>
          <UserList initialUsers={users} />
        </div>
      </main>
    );
  } catch (error) {
    return <div className="p-8 text-red-500 text-center">Unable to load users. Please check your API_URL.</div>;
  }
}