import { jph } from '../config';

async function getFromJPH(path, query) {
  const jphURL = jph.url;
  const querySTR = new URLSearchParams(query);
  const url =  `${jphURL}${path}?${querySTR}`;
  const response = await fetch(url);
  return response.json();
}

async function postFromJPH(path, data) {
  const jphURL = jph.url;
  const url = `${jphURL}${path}`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getPosts() {
  return getFromJPH('/posts');
}

export async function getPosts(id) {
  return getFromJPH(`/posts/${id}`);
}

export async function getCommentFromPost(postid) {
  return getFromJPH(`/posts/${postid}/comments`);
}

export async function getComments(postid) {
  const query = {
    postid,
  };
  return getFromJPH(`/comments, ${query}`);
}

export async function createPost(data) {
  const response = await postFromJPH('/posts', data);
  return response;
}