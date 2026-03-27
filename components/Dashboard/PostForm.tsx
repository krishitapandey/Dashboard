'use client';
 
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PostFormValues, postSchema } from '@/types/schema/postSchema';
import { Post } from '@/types/post.types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
 
interface PostFormProps {
  userId: number;
  initialData?: Post;
  onSubmit: (post: Post | Omit<Post, 'id'>) => void;
}
 
export default function PostForm({ userId, initialData, onSubmit }: PostFormProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: initialData?.title || '',
      body: initialData?.body || '',
    }
  });
 
  const handleFormSubmit = (data: PostFormValues) => {
    if (initialData) {
      onSubmit({
        ...initialData,
        title: data.title,
        body: data.body,
      });
    } else {
      onSubmit({
        userId,
        title: data.title,
        body: data.body,
      });
    }
    if (!initialData) {
      reset();
    }
  };
 
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 pt-2">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-base">Post Title</Label>
          <Input 
            id="title"
            {...register('title')} 
            placeholder="Give your post a title..." 
            className={`w-full text-base transition-all rounded-lg h-12 text-primary placeholder:text-muted-foreground/60 ${
              errors.title 
                ? 'border-destructive focus-visible:border-destructive ring-1 ring-destructive placeholder:text-destructive/50' 
                : 'border-primary'
            }`}
          />
          {errors.title && <p className="text-destructive text-sm mt-1 font-medium">{errors.title.message}</p>}
        </div>
 
        <div className="space-y-2">
          <Label htmlFor="body" className="text-base">Post Content</Label>
          <textarea 
            id="body"
            {...register('body')} 
            placeholder="Share your thoughts with the community..." 
            className={`flex min-h-[160px] w-full rounded-lg border bg-white px-4 py-3 text-primary ring-offset-background placeholder:text-muted-foreground/60 transition-all focus-visible:outline-none ${
              errors.body 
                ? 'border-destructive focus-visible:border-destructive ring-1 ring-destructive placeholder:text-destructive/50' 
                : 'border-primary '
            }`}
          />
          {errors.body && <p className="text-destructive text-sm mt-1 font-medium">{errors.body.message}</p>}
        </div>
      </div>
 
      <div className="pt-4 flex justify-end">
        <Button type="submit" size="lg" className="w-full sm:w-auto font-semibold rounded-lg text-md px-10 active:scale-95 transition-all">
          {initialData ? 'Save Changes' : 'Publish Post'}
        </Button>
      </div>
    </form>
  );
}