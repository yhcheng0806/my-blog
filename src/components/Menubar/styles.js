import styled from 'styled-components'

export const Container = styled.div`
  display:none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top:0;
    left: 0;
    padding: 9px 19px 20px;

    height: 100vh;
    overflow-y: auto;
  }
`
export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;

  @media (min-width: 1280px) {
    align-items:flex-start;
  }

`
export const Logo = styled.div`
  width: 41px;
  height: 41px;
  background: ${props => props.theme.t_twitter};
  border-radius: 50%;
  margin-bottom: 20px;
`
export const MenuIcons = styled.div`
  display: flex;
  flex-direction: column;
`
export const Status = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0; 

  &:hover,
    &.active {
      cursor:pointer;
      > strong {
        color:${props => props.theme.t_twitter};
      }
      svg {
        fill:${props => props.theme.t_twitter};
      }
    }

  > strong {
    display: none;
  }
  >span {
     font-size: 26px;
  }

  @media (min-width: 1280px) {
    > strong {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }

    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;
`

export const Botside = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  
  span {
    display: none;
  }
  
  @media (min-width: 1280px) {
    span {
      display: block;
      font-size:30px;
      color: ${props=> props.theme.t_textColor};
      margin-left: 30px;
      cursor: pointer;
  
      &:hover {
        svg {
          fill:${props=> props.theme.t_like}
        }
      }
    }
  }
`
export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${props => props.theme.t_gray}
`
export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;
    
  }
`