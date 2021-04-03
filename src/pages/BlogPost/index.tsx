import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { Container } from './styles';

interface ParamsProps {
  id: number | undefined
}

interface PostProps {
  title: string
  content: string
}

export function BlogPost() {
  const { id } = useParams() as ParamsProps;

  const [post, setPost] = useState(
    {} as PostProps
  );

  useEffect(() => {
    api.get(`posts/${id}`)
      .then(response => {
        const { title, content } = response.data;

        const newPost = {
          title: title.rendered,
          content: content.rendered
        }

        setPost(newPost);
      });
  });

  return (
    <Container>
      <h1>{post.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </Container>
  )
}
