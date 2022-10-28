import React from 'react';
import { Text, useColorScheme } from 'react-native';
import { RootTabScreenProps } from '../../types';
import { TopEventCarousel } from '../../components';

import * as S from './styles'

const HomeScreen = ({ navigation }: RootTabScreenProps<'Home'>) => {
  const theme = useColorScheme();
  return (
    <S.Container>
      <TopEventCarousel theme={theme ?? 'light'} events={[]}/>
    </S.Container>
  )
}

export default HomeScreen;