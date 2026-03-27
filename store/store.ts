import { UserState } from '@/types/user.types';
import { PostState } from '@/types/post.types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        users: [],
        searchQuery: '',
        apiIsLoading: false, 
        error: null,
        setUsers: (users) => set({ users }, false, 'user/setUsers'),
        setSearchQuery: (query) => set({ searchQuery: query }, false, 'user/setSearchQuery'),
        setLoading: (isLoading) => set({ apiIsLoading: isLoading }, false, 'user/setLoading'),
        setError: (error) => set({ error }, false, 'user/setError'),
      }),
      { name: 'user-storage' }
    ),
    { name: 'UserStore' }
  )
);

export const usePostStore = create<PostState>()(
  devtools(
    persist(
      (set) => ({
        posts: {},
        setPosts: (userId, newPosts) =>
          set(
            (state) => ({
              posts: { ...state.posts, [userId]: newPosts },
            }),
            false,
            'post/setPosts'
          ),
        addPost: (userId, postData) =>
          set(
            (state) => ({
              posts: {
                ...state.posts,
                [userId]: [{ ...postData, id: Date.now() }, ...(state.posts[userId] || [])],
              },
            }),
            false,
            'post/addPost'
          ),
        deletePost: (userId, postId) =>
          set(
            (state) => ({
              posts: {
                ...state.posts,
                [userId]: (state.posts[userId] || []).filter((p) => p.id !== postId),
              },
            }),
            false,
            'post/deletePost'
          ),
        updatePost: (userId, updatedPost) =>
          set(
            (state) => ({
              posts: {
                ...state.posts,
                [userId]: (state.posts[userId] || []).map((p) =>
                  p.id === updatedPost.id ? updatedPost : p
                ),
              },
            }),
            false,
            'post/updatePost'
          ),
      }),
      { name: 'post-storage' }
    ),
    { name: 'PostStore' }
  )
);