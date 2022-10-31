import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 10px 15px;
  margin-bottom: ${({ full }: any) => full ? 260 : 0}px;
`