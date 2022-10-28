import React from 'react';
import { Text } from 'react-native';
import { RootTabScreenProps } from '../../types';

import * as S from './styles'

const HomeScreen = ({ navigation }: RootTabScreenProps<'Home'>) => {
  
  return (
    <S.Container>
      <Text style={{ color: 'red' }}>aaaa</Text>
    </S.Container>
  )
}

export default HomeScreen;