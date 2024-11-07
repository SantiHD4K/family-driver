import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import Button from '../../components/Button';

import homeIcon from '../../assets/home.png';
import historyIcon from '../../assets/history.png';

import * as S from './styles';

// Datos de destino
const data = [
  { id: 1, icon: homeIcon, text: 'Casa', subtext: 'Spring St. 140' },
  { id: 2, icon: historyIcon, text: 'Minas Shopping' },
  { id: 3, icon: historyIcon, text: 'Estação Santa Inês' },
  { id: 4, icon: historyIcon, text: 'Cidade Administrativa' },
];

const SelectDestination = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Verificar que los parámetros no son undefined
  const { initialAddress = 'Sin dirección inicial', address = 'Sin destino seleccionado' } = route.params || {};

  function renderItem({ item }) {
    return (
      <S.HistoryItem>
        <S.ItemIcon source={item.icon} />
        <S.ItemText>{item.text}</S.ItemText>
        {item.subtext && <S.ItemText small>{item.subtext}</S.ItemText>}
      </S.HistoryItem>
    );
  }

  return (
    <S.Container>
      <S.TopContainer>
        <S.Timeline>
          <S.Dot />
          <S.Dash />
          <S.Dot secondary />
        </S.Timeline>
        <S.FromTo>
          <S.From>{initialAddress}</S.From>
          <S.To>Igreja São José</S.To>
        </S.FromTo>
      </S.TopContainer>
      <S.Shadow />
      <S.HistoryList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
      <S.BottomContainer>
        <Button onPress={() => navigation.navigate('Request')}>Done</Button>
      </S.BottomContainer>
    </S.Container>
  );
};

export default SelectDestination;
