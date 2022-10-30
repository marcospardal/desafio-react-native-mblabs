import React, { useState } from 'react';
import { IconInfo, NumberControl } from '../../components';

import * as S from './styles';

const EventInfo = () => {
  const [ticketsNumber, setTicketsNumber] = useState<number>(0);

  const handleTicketsIncrease = () => setTicketsNumber(prev => prev + 1);

  const handleTicketsDecrease = () => setTicketsNumber(prev => prev - 1);

  return (
    <S.Container>
      <S.EventImage source={{ uri: "https://images.unsplash.com/photo-1526045612212-70caf35c14df"}}/>
      <S.Content>
        <S.Title>Event Names</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet. Non quia inventore cum consequuntur mollitia et autem dolores. 
          Nam dolorem vero vel suscipit dolorem aut amet quas et sint dignissimos id iure sint aut 
          explicabo voluptas qui nostrum fugit. Ea harum veritatis ut architecto reprehenderit et 
          fuga molestiae ut rerum autem.
        </S.Description>
        <IconInfo icon={<S.Icon name='dollar-sign' />} info={'30'}/>
        <S.Row>
          <IconInfo icon={<S.Icon name='graduation-cap' />} info={'Organizer'}/>
          <IconInfo icon={<S.Icon name='at'/>} info={'socialmedia'} noMargin={true}/>
        </S.Row>
        <S.Row>
          <IconInfo icon={<S.Icon name='calendar' />} info={'20/10/2022'} />
          <IconInfo icon={<S.Icon name='clock' />} info={'18:40'} />
        </S.Row>
        <IconInfo icon={<S.Icon name='map-marker-alt' />} info={'Location Name. Street name - number, neighborhood, city.'}/>
      </S.Content>
      <S.BuyingOptions>
        <NumberControl value={ticketsNumber} handleDecrease={handleTicketsDecrease} handleIncrease={handleTicketsIncrease} />
        <S.AddCart>
          <S.CartLabel>Add to cart</S.CartLabel>
        </S.AddCart>
      </S.BuyingOptions>
    </S.Container>
  )
}

export default EventInfo;