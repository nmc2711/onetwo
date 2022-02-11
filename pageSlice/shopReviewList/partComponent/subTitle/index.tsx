import React from 'react';
import { subTitleCaptions } from '../../enum';

import { SubTitleBox, SubText } from './styled';

function SubtitleComponent() {
  return (
    <SubTitleBox>
      <SubText>{subTitleCaptions[0]}</SubText>
    </SubTitleBox>
  )
}

export default SubtitleComponent
