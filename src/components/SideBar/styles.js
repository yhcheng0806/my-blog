import styled from 'styled-components';


export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
    background: ${props => props.theme.t_appBgColor}
  }
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);
  background:${props => props.theme.t_appBgColor};
  position: fixed;
  top: 0;
  z-index: 2;

  max-height: 57px;
  
  >span {
    position: absolute;
    left: 34px;
    top: 29px;
    font-size:20px;
    transform: translateY(-50%);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  background: ${props => props.theme.t_search};
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;

  &::placeholder {
    color: ${props => props.theme.t_gray};
  }

  &:focus {
    border: 1px solid ${props => props.theme.t_twitter};
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 200px;
  margin-top: 3px;
  div {
    height:300px;
    border-radius: 4px;
    background:${props => props.theme.t_outline};
    cursor: pointer;
    
    &:hover {
      opacity: 0.7;
    }
  }
  > div + div {
    margin-top: 15px;
  }
`;