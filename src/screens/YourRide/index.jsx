import React, { useState } from 'react';
import { Rating } from 'react-native-ratings';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from '../../components/Header';
import Button from '../../components/Button';

import avatar from '../../assets/avatar.png';
import theme from '../../theme';

import * as S from './styles';

const YourRide = () => {
  const [rating, setRating] = useState(4);

  return (
    <>
      <Header title="Your Ride" />
      <S.Container>
        <S.InnerContainer>
          <S.InfoContainer>
            <S.Description>Your ride is</S.Description>
            <S.Description value>$5.58</S.Description>
            <S.Description>March 21, 2020 at 10:30 a.m</S.Description>
          </S.InfoContainer>
          <S.DriverContainer>
            <S.RatingContainer>
              <S.AvatarContainer>
                <S.Avatar source={avatar} />
              </S.AvatarContainer>
              <S.DriverName>Michael Douglas</S.DriverName>
              <S.Description>Rate your driver</S.Description>
              <Rating
                type="star"
                ratingCount={5}
                imageSize={hp('4%')}
                startingValue={rating}
                onFinishRating={(rating) => setRating(rating)} // Actualiza el valor de rating
                tintColor={theme.color.primary} // Puedes personalizar el color
                ratingColor={theme.color.secondary} // Color del rating seleccionado
                ratingBackgroundColor={theme.color.gray} // Color del rating deseleccionado
                style={{ paddingVertical: 10 }}
              />

              <S.MessageInput
                multiline
                numberOfLines={3}
                placeholder="Your message..."
              />
            </S.RatingContainer>
            <Button>Done</Button>
          </S.DriverContainer>
        </S.InnerContainer>
      </S.Container>
    </>
  );
};

export default YourRide;
