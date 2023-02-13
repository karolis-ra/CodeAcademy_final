import styled from 'styled-components';
interface Props {
  key?: number;
  onClick?: (event: HTMLInputElement) => void;
  active?: boolean;
}

export const OptionBlock = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  border: ${(props) => (props.active ? '2px solid purple' : '2px solid rgba(33, 33, 33, 0.16)')};
  border-radius: 8px;
  padding: 18px;
  background-color: transperant;
`;
