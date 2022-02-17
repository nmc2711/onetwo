import React from 'react';

import Title from './title';
import Photo from './photo';
import SubTitle from './subTitle';
import Addres from './addres';
import TextBox from './textBox';
import Foorter from './foorter';


function DetailBoxComponent() {
  return (
    <>
      <Title />
      <div className="p-5 border-t">
        <SubTitle />
        <Photo />
        <TextBox />
        <Addres />
        <Foorter />
      </div>
    </>
  )
}
export default DetailBoxComponent
