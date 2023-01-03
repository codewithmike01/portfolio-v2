import styled from 'styled-components';

interface BgStyleInterface {
  width?: string;
}

export const BgButtonContainer = styled.button<BgStyleInterface>`
  max-width: ${({ width }) => (width ? `${width}` : '20rem')};
  margin: 0 auto;
  background-color: var(--primary-bg);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 24px;
  border-radius: 8px;
  border: 1px solid var(--primary-bg);
`;
