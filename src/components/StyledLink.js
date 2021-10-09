import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  margin: 0 0.8rem;
  color: white;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #f7c5c1;
  }
`;

export default StyledLink;
