import Post from "../Post";

import { Container } from "./styles";

const Posts = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Container>
  );
};

export default Posts;
