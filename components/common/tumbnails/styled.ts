import styled from 'styled-components';
import { ImageW100 } from '../../../styles/customStyle';


export const Wrap = styled.div`
  img {
    mask-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/234228/alpha-cat.png');
    mask-mode: alpha;
    mask-repeat: no-repeat;
    mask-size: 80%;
  }
`;

export const ArchImg = styled.div<{img: string}>`
  height: 240px;
  border-radius: 500px 500px 0 0;
  background-image: url(${({ img }) => img && `${img}`});
`;

export const CrossImg = styled.div<{ img: string }>`
  height: 240px;
  background-image: url(${({ img }) => img && `${img}`});
`;
