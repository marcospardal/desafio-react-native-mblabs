import React from 'react';
import { useColorScheme } from 'react-native';
import { RootTabScreenProps } from '../../types';
import { TopEventCarousel, EventList } from '../../components';

import * as S from './styles'

const HomeScreen = ({ navigation }: RootTabScreenProps<'Home'>) => {
  const theme = useColorScheme();
  return (
    <S.Container>
      <TopEventCarousel theme={theme ?? 'light'} events={[]}/>
      <EventList theme={theme ?? 'light'}/>
    </S.Container>
  )
}

export default HomeScreen;