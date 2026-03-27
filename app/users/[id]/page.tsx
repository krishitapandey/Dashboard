import { UserPosts } from '@/components/Dashboard/UserPostsClient';
import { Post } from '@/types/post.types';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function UserPostsPage({ params }: Props) {
  const { id } = await params;
  const userId = parseInt(id, 10);
  const apiUrl = process.env.API_URL ;

  if (isNaN(userId)) return notFound();

  const [postsRes, userRes] = await Promise.all([
    fetch(`${apiUrl}/posts?userId=${userId}`, { next: { revalidate: 60 } }),
    fetch(`${apiUrl}/users/${userId}`, { next: { revalidate: 3600 } })
  ]);

  if (!postsRes.ok || !userRes.ok) {
    return <div className="p-8 text-red-500">Failed to load data for this user.</div>;
  }

  const initialPosts: Post[] = await postsRes.json();
  const userData = await userRes.json();

  return (
    <main className="bg-gray-50 min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg mb-8 border border-primary flex flex-col md:flex-row md:items-center md:justify-between shadow-sm">
          <div>
            <h1 className="text-3xl font-bold mb-2">{userData.name}&apos;s Posts</h1>
            <p className="text-gray-600 flex items-center">
               <span className="font-medium">{userData.email}</span> 
               <span className="mx-2">|</span> 
               User ID: {userId}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">
              Active Member
            </span>
          </div>
        </div>
        
        <UserPosts userId={userId} initialPosts={initialPosts} />
      </div>
    </main>
  );
}