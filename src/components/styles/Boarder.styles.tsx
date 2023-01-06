import styled from 'styled-components';
interface BorderStyleInterface {
  width?: string;
}

export const BorderContainer = styled.button<BorderStyleInterface>`
  cursor: pointer;
  max-width: ${({ width }) => (width ? `${width}` : '20rem')};
  width: 100%;
  align-self: flex-end;
  margin-right: 3rem;
  background-color: transparent;
  color: var(--primary-text);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 24px;
  border-radius: 8px;
  border: 1px solid var(--primary-bg);
`;
