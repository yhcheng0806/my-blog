import React from 'react'
import { useHistory } from 'react-router-dom'
import Icon from '../common/Icon'
import {
  Container,
  Topside,
  // Logo,
  MenuIcons,
  Status,
  Botside,
  Avatar,
  ProfileData
} from './styles'

const MenuBar = () => {
  const history = useHistory()
  const toPage = (page) => {
    history.push('/' + page)
  }

  return (
    <Container>
      <Topside>
        {/* <Logo></Logo> */}
        <MenuIcons>
          <Status onClick={() => toPage('home')}>
            <Icon type='icon-home' />
            <strong>首页</strong>
          </Status>
          <Status onClick={() => toPage('search')}>
            <Icon type='icon-search' />
            <strong>探索</strong>
          </Status>
          <Status onClick={() => toPage('email')}>
            <Icon type='icon-email' />
            <strong>消息</strong>
          </Status>
          <Status onClick={() => toPage('user')}>
            <Icon type='icon-user' />
            <strong>我的</strong>
          </Status>

        </MenuIcons>
      </Topside>
      <Botside>
        <Avatar />

        <ProfileData>
          <strong>yhcheng0806</strong>
          <strong>18892083800@163.com</strong>
        </ProfileData>
        <Icon type='icon-tuichu1' />
      </Botside>
    </Container>
  )
}

export default MenuBar