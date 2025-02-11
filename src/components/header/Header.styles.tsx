import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 360px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.slate[200]};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 10px;
    padding-left: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
    padding-left: 16px;
  }
`;

export const Logo = styled.img`

`;