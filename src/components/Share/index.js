import Icon from "../common/Icon";

import {
  ShareWrapper,
  ShareTop,
  Avatar,
  Input,
  ShareContainer,
  ShareBottom,
  ShareOptions,
  ShareOption,
  ShareButton,
} from "./styles";

const Share = () => {
  return (
    <ShareWrapper>
      <ShareTop>
        <Avatar />
        <Input placeholder='分享你的趣事' />
      </ShareTop>
      <ShareContainer></ShareContainer>
      <ShareBottom>
        <ShareOptions>
          <ShareOption>
            <Icon />
            <strong>照片/视频</strong>
          </ShareOption>
          <ShareOption>
            <Icon />
            <strong>#标签</strong>
          </ShareOption>
          <ShareOption>
            <Icon />
            <strong>权限</strong>
          </ShareOption>
          <ShareOption>
            <Icon />
            <strong>表情</strong>
          </ShareOption>
        </ShareOptions>
        <ShareButton>分享</ShareButton>
      </ShareBottom>
    </ShareWrapper>
  );
};

export default Share;
