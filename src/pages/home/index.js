import Share from "../../components/Share";
import Post from "../../components/Post";
import { HomeWrapper, HomeContainer } from "./styles";

const Home = () => {
  return (
    <HomeWrapper>
      <Share />
      <HomeContainer>
        <Post />
        <Post />
        <Post />
        <Post />
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
