import styled, { css } from 'styled-components';
import media from "./media"

export const Wrap = styled.div<{ isMobil: string | undefined }>`
  background-color: green;
  #__next {
    font-size: 16px;
  }
  .__title {
    font-size: 22px;
    padding: 10px 0;
    color: white;
  }
  .__nav {
    padding-right: 10px;
    font-size: 18px;
  }
  .__ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }


  ${media.smMobile`
  background-color: orange;
  #__next {
    /* width: 50%; */
    padding: 0 20px;
    font-size: 14px;
  }
  .__title {
    font-size: 20px;
    padding: 10px 0;
  }
  .__nav {
    width: ${({ isMobil }: any) => isMobil === 'mobil' && '100%'};
    margin-bottom: 5px;
    padding: 15px 0;
    background-color: antiquewhite;
    font-size: 18px;
  }
  .__list {
  /* margin: 0 30px 30px 0 */
    margin: 20px 0;
  }
`}
`;

