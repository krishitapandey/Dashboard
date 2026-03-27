export interface User {
    id: number;
    name: string;
    email: string;
    company: { name: string };
}

export interface UserState {
    users: User[];
    searchQuery: string;
    apiIsLoading: boolean;
    error: string | null;
    setUsers: (users: User[]) => void;
    setSearchQuery: (query: string) => void;
    setLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;
}