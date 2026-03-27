
import { UserPosts } from '@/components/Dashboard/UserPostsClient';
import { Post } from '@/types/post.types';

export default async function UserPostsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const userId = parseInt(resolvedParams.id, 10);


  const apiUrl = process.env.API_URL;
  
  const postsRes = await fetch(`${apiUrl}/posts?userId=${userId}`, {
    cache: 'no-store'
  });
  
  const userRes = await fetch(`${apiUrl}/users/${userId}`, {
    cache: 'no-store'
  });

  if (!postsRes.ok || !userRes.ok) {
    return <div className="p-8 text-red-500">Failed to load data for this user.</div>;
  }

  const initialPosts: Post[] = await postsRes.json();
  const userData = await userRes.json();

  return (
    <main className=" bg-gray-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg mb-8 border border-primary flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className=" mb-2">{userData.name}&apos;s Posts</h1>
            <p className="text-black flex items-center">
               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               {userData.email} | ID: {userId}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-block px-4 py-2 bg-accent text-primary rounded-full text-sm font-semibold">
              Member Profile
            </span>
          </div>
        </div>
        
        <UserPosts userId={userId} initialPosts={initialPosts} />
      </div>
    </main>
  );
}
