import styled, { css } from 'styled-components';
import media from "./media"

export const PageWrapper = styled.div<{ isMobil: boolean | undefined }>`
  ${media.smMobile`
    background-color: orange;
  #__next {
    /* width: 50%; */
    padding: 0 20px;
    font-size: 14px;
  }
  .__title {
    font-size: 14px;
    padding: 10px 0;
  }
  .__nav {
    width: 100%;
    margin-bottom: 5px;
    padding: 15px 0;
    background-color: antiquewhite;
  }
  .__list {
    /* margin: 0 30px 30px 0 */
    margin: 20px 0;
  }
`}

${media.mdMobile`
    background-color: blue;
  #__next {
    /* width: 50%; */
    padding: 0 20px;
    font-size: 14px;
  }
  .__title {
    font-size: 14px;
    padding: 10px 0;
  }
  .__nav {
    width: 100%;
    margin-bottom: 5px;
    padding: 15px 0;
    background-color: antiquewhite;
  }
  .__list {
    /* margin: 0 30px 30px 0 */
    margin: 20px 0;
  }
`}

${media.lgMobile`
    background-color: yellow;
  #__next {
    /* width: 50%; */
    padding: 0 20px;
    font-size: 14px;
  }
  .__title {
    font-size: 14px;
    padding: 10px 0;
  }
  .__nav {
    width: 100%;
    margin-bottom: 5px;
    padding: 15px 0;
    background-color: antiquewhite;
  }
  .__list {
    /* margin: 0 30px 30px 0 */
    margin: 20px 0;
  }
`}
`;