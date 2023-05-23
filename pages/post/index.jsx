import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMore, fetchPosts, selectAllPosts } from "../../redux/features/posts/postSlice";

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const [val, setVal] = useState("");

  useEffect(() => {
    try {
      dispatch(fetchPosts()).unwrap();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, val]);

  return (
    <div>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => dispatch(fetchMore())}>ASdas</button>
      {posts.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
