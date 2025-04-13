'use client'

import { useEffect, useState } from 'react';

export default function Test() {
    const [posts, setPosts] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const response = await fetch('/api/posts');
                const data = await response.json();

                if (response.ok) {
                    setPosts(data);
                } else {
                    setError(data.error);
                }
            } catch (error) {
                setError('Failed to fetch posts');
            }
        };
        fetchPosts();
    }, []);
    if (error) {
        return <div>Error: {error}</div>;
    }
    return(
        <div>
            <div>{posts[0].title}</div>
        </div>
    )
}