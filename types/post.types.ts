export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Record<number, Post[]>;
  setPosts: (userId: number, newPosts: Post[]) => void;
  addPost: (userId: number, post: Omit<Post, 'id'>) => void;
  deletePost: (userId: number, postId: number) => void;
  updatePost: (userId: number, post: Post) => void;
}

export interface PostFormProps {
  userId: number;
  initialData?: Post;
  onSubmit: (post: Post | Omit<Post, 'id'>) => void;
}
 