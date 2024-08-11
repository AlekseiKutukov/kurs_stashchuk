import './../style.css';
function Post(props) {
  const { id, title, userId, body } = props;
  //console.log(props);
  return (
    <div className="post">
      <small>{id}</small>
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>Iser ID: {userId}</h3>
    </div>
  );
}
export default Post;
