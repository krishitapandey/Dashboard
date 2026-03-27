'use client';

import { useEffect, useState } from 'react';
import { Post } from '@/types/post.types';
import { usePostStore } from '@/store/store';
import { toast } from 'sonner';
import PostForm from '@/components/Dashboard/PostForm';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import Pagination from './Pagination';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function UserPosts({ userId, initialPosts }: { userId: number, initialPosts: Post[] }) {
  const { posts, setPosts, addPost, updatePost, deletePost } = usePostStore();
  const userPosts = posts[userId] || [];

  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [deletingPostId, setDeletingPostId] = useState<number | null>(null);
  const postsPerPage = 5;

  useEffect(() => {

    const localPostsStr = localStorage.getItem(`posts_${userId}`);
    const localPosts: Post[] = localPostsStr ? JSON.parse(localPostsStr) : [];
    

    const combined = [...localPosts, ...initialPosts];
    const uniquePosts = Array.from(new Map(combined.map(p => [p.id, p])).values());
    
    uniquePosts.sort((a, b) => b.id - a.id);

    setPosts(userId, uniquePosts);
  }, [userId, initialPosts, setPosts]);

  const handleAddPost = (post: Omit<Post, 'id'>) => {
    addPost(userId, post);
    setCurrentPage(1);
    setIsDialogOpen(false);
    toast.success('Post published successfully!');
  };
 
  const handleEditPost = (post: Post | Omit<Post, 'id'>) => {
    if ('id' in post) {
      updatePost(userId, post);
    }
    setEditingPost(null);
    toast.success('Post updated successfully!');
  };
 
  const handleDeletePost = () => {
    if (deletingPostId) {
      deletePost(userId, deletingPostId);
      setDeletingPostId(null);
      toast.success('Post deleted successfully!');
    }
  };

 
  const totalPages = Math.ceil(userPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = userPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="w-full ">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-6 border-b border-border gap-4">
        <div>
          <h2 className="flex items-center gap-3">
            Posts 
            <span className="text-primary text-lg font-medium px-2 border border-primary bg-accent rounded-full">
              {userPosts.length}
            </span>
          </h2>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger className={buttonVariants({ size: "lg", className: "gap-2 transition-all rounded-lg h-12 px-6" })}>
            <Plus className="w-5 h-5" />
            Create Post
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] border-border rounded-lg p-8 bg-card">
            <DialogHeader className="mb-2">
              <DialogTitle className="text-3xl font-bold">Write a Post</DialogTitle>
              <DialogDescription className="text-base ">
                Share your thoughts with the community. Hit publish when you are ready.
              </DialogDescription>
            </DialogHeader>
            <PostForm userId={userId} onSubmit={handleAddPost} />
          </DialogContent>
        </Dialog>
      </div>

      {currentPosts.length === 0 ? (
        <p className="text-muted-foreground text-center py-16 bg-accent/50 rounded-lg border-2 border-dashed border-border text-lg">
          No information present
        </p>
      ) : (
        <div className="space-y-6">
          {currentPosts.map(post => (
            <Card key={post.id} className="rounded-lg border-border bg-card shadow-none group transition-all hover:border-primary/30">
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <CardTitle className="text-xl font-semibold capitalize text-primary leading-tight pr-8">
                  {post.title}
                </CardTitle>
                <div className="flex items-center gap-1 opacity-10 group-hover:opacity-100 transition-opacity">
                  <Dialog open={editingPost?.id === post.id} onOpenChange={(open) => !open && setEditingPost(null)}>
                    <DialogTrigger 
                      onClick={() => setEditingPost(post)}
                      className="h-8 w-8 inline-flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                    >
                      <Pencil className="w-4 h-4" />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] border-border rounded-lg p-8 bg-card">
                      <DialogHeader className="mb-2">
                        <DialogTitle className="text-3xl font-bold">Edit Post</DialogTitle>
                        <DialogDescription className="text-base ">
                          Update your thoughts and hit save.
                        </DialogDescription>
                      </DialogHeader>
                      <PostForm 
                        userId={userId} 
                        initialData={post} 
                        onSubmit={handleEditPost} 
                      />
                    </DialogContent>
                  </Dialog>
 
                  <Dialog open={deletingPostId === post.id} onOpenChange={(open) => !open && setDeletingPostId(null)}>
                    <DialogTrigger 
                      onClick={() => setDeletingPostId(post.id)}
                      className="h-8 w-8 inline-flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] border-border rounded-lg p-8 bg-card">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">Delete Post</DialogTitle>
                        <DialogDescription className="text-base">
                          Are you sure you want to delete this post? This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex justify-end gap-3 pt-4">
                        <Button 
                          variant="outline"
                          onClick={() => setDeletingPostId(null)}
                          className="rounded-lg font-medium"
                        >
                           Cancel
                        </Button>
                        <Button 
                          variant="destructive" 
                          onClick={handleDeletePost}
                          className="rounded-lg font-semibold"
                        >
                          Confirm Delete
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed">{post.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
