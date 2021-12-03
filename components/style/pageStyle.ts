import styled, { css } from 'styled-components';

import media from "./media"

export const PageWrapper = styled.div`
  ${media.mobile`
    background-color: orange;
  `}
`;