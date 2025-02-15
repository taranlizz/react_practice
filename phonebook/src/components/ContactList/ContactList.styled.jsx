import styled from "styled-components";

export const List = styled.ul`
  padding: 20px;
  font-size: 20px;
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 250px 100px;
  gap: 15px 20px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
