import Icon from "../common/Icon";

import {
  PostWrapper,
  PostTop,
  PostTopLeft,
  Avatar,
  PostDate,
  PostTopRight,
  PostCenter,
  PostText,
  PostImg,
  PostBottom,
  Icons,
  Status,
} from "./styles";

const Post = () => {
  return (
    <PostWrapper>
      <PostTop>
        <PostTopLeft>
          <Avatar />
          <strong>用户名</strong>
          <PostDate>1天前</PostDate>
        </PostTopLeft>
        <PostTopRight></PostTopRight>
      </PostTop>
      <PostCenter>
        <PostText>一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述</PostText>
        <PostImg />
      </PostCenter>
      <PostBottom>
        <Icons>
          <Status>
            <Icon type="icon-chat" />0
          </Status>
          <Status>
            <Icon type="icon-share" />0
          </Status>
          <Status>
            <Icon type="icon-thumb" />0
          </Status>
        </Icons>
      </PostBottom>
    </PostWrapper>
  );
};

export default Post;
