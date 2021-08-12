import Post from "../Post";

import { Container } from "./styles";

const Posts = ({ posts, userInfo }) => {
  return (
    <Container>
      {posts.map((post) => (
        <Post key={post._id} post={post} userInfo={userInfo} />
      ))}
    </Container>
  );
};

export default Posts;
