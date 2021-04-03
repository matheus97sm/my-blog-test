import React, { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, BlogContainer } from './styles';

interface Post {
  id: number
  title: string
  excerpt: string
}

interface PostsProps {
  id: number
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
}

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api.get(`posts?_extends`)
      .then(response => {
        const newPosts = response.data.map((post: PostsProps) => ({
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
        }));

        setPosts(newPosts);
      });
  }, []);

  return (
    <Container>
      <h1>Blog</h1>

      <BlogContainer>
        {
          posts.map(post => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <h3>{post.title}</h3>

              <p dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
            </Link>
          ))
        }
      </BlogContainer>
    </Container>
  );
}
