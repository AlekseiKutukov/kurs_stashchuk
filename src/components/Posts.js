import { useState, useEffect } from 'react';
import Post from './Post';

function Posts() {
  const [posts, setPost] = useState([]);
  const [error, steError] = useState('');
  const [isLoading, setIsLoading] = useState(true); //
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((posts) => {
        //console.log(posts);
        setPost(posts);
      })
      //.catch((error) => console.log(error.message));
      .catch((error) => steError(error.message))
      .finally(() => setIsLoading(false)); //выполняется независмо будет ошибка или нет
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  const shortPost = posts.slice(0, 6); //уменьшил массив

  return (
    <div>
      <h1>Posts</h1>
      <hr />
      <div className="post_all">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          shortPost.map((post) => (
            <Post key={post.id} {...post} /> //тоже самое что <Post id={post.id} title={post.title} и т.д/>
          ))
        )}
      </div>
    </div>
  );
}
export default Posts;
