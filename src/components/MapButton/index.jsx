import React from 'react';
import { Image } from 'react-native';
import * as S from './styles';

const MapButton = ({ icon, noMargin = false, transparent, ...props }) => {
  return (
    <S.Container
      noMargin={noMargin}
      transparent={transparent}
      {...props}
      style={{
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
      }}
    >
      <S.Icon source={icon} />
    </S.Container>
  );
};

export default MapButton;
