import styled from 'styled-components';

export const Img = styled.div<{ imgUrl: any }>`
  width: 157px;
  height: 200px;
  background-image: url(${({ imgUrl }: any) => imgUrl});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid;
`;

export const Img2 = styled.div<{ imgUrl: any }>`
  width: 122;
  height: 115;
  background-image: url(${({ imgUrl }: any) => imgUrl});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid;
`;