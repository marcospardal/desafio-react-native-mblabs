import React from 'react';
import { IconInfoProps } from './types';

import * as S from './styles';

/**
 * 
 * @author Marcos Pardal
 * @param icon icon to be displayed 
 * @param info text info
 * @param noMargin if true remove the margin between the icon and info
 */
const IconInfo = ({ icon, info, noMargin }: IconInfoProps) => {
  return (
    <S.Container>
      {icon}
      <S.Info noMargin={noMargin}>{info}</S.Info>
    </S.Container>
  )

}
export default IconInfo;