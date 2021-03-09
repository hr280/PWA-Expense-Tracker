import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' }}>
      Try saying: <br /> 
      Add {isIncome ? '' : ''} 
      for {isIncome ? '' : ''}  
      in Category {isIncome ? '' : ''}
      for {isIncome ? ' ' : ''}
    </div>
  );
};

export default InfoCard;
