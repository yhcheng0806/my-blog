import React from 'react';
import Icon from '../common/Icon'

import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
} from './styles';

const Card = () => {
  return (
    <Container>
      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>name</strong>
            <span>@email.com</span>
            <Dot />
            <time>1h</time>
          </Header>

          <Description>
          针对美国政府悍然炮制所谓“商业警告”，毫无理据抹黑香港营商环境，并制裁中央驻港机构官员，外交部驻港公署发言人表示坚决反对和强烈谴责，指出美方有关霸凌行径蛮横之极、无理之极，严重违背国际法和国际关系基本准则，赤裸裸干预香港事务和中国内政，包括香港同胞在内的全体中国人民绝不接受，必将坚决反击！
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <Icon type="icon-Chat" />
              0
            </Status>
            <Status>
              <Icon type="icon-share" />
              0
            </Status>
            <Status>
              <Icon type="icon-thumb" />
              0
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Card;
