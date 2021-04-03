import { FormEvent, useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoginContext } from '../../LoginContext';
import { api } from '../../services/api';

import { PostForm, StatusButton, StatusButtonsContainer } from './styles';

const statusTypes = ['publish', 'draft', 'pending', 'private'];
const customId = "custom-id-yes";

export function CreatePost() {
  const { loggedUserInfo } = useContext(LoginContext);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');

  function handleStatus(newStatus: string) {
    setStatus(newStatus);
  }

  async function createPost(event: FormEvent) {
    event.preventDefault();

    if (!title || !content || !status) {
      return toast.error(`It seems that a field is empty.`, {
        position: 'top-right',
        toastId: customId
      });
    }

    await api.post(`posts`, {
      title,
      content,
      status
    }, {
      headers: {
        Authorization: `Bearer ${loggedUserInfo.token}`
      }
    }).then(response => {
      console.log(response)
      if (response.status === 201) {
        setTitle('');
        setContent('');
        setStatus('');

        toast.success(`Post created with success!`, {
          position: 'top-right',
          toastId: customId
        });
      }
    });
  }

  return (
    <>
      <PostForm onSubmit={createPost}>
        <h2>Create new post</h2>

        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <div>
          <strong>Post status: </strong>

          <StatusButtonsContainer>
            {
              statusTypes.map((oneStatus) => (
                <StatusButton
                  key={oneStatus}
                  type="button"
                  onClick={() => handleStatus(oneStatus)}
                  isSelected={oneStatus === status}
                >
                  {oneStatus}
                </StatusButton>
              ))
            }
          </StatusButtonsContainer>
        </div>

        <textarea
          placeholder="Insert the post content here..."
          value={content}
          onChange={event => setContent(event.target.value)}
        />

        <button type="submit">Create Post</button>
      </PostForm>

      <ToastContainer />
    </>
  )
}