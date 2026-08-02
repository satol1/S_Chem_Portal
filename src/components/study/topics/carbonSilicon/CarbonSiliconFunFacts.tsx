import React from 'react';
import { TheoryCallout } from '../../TheoryCallout';

interface FunFactProps {
  title: string;
  description: React.ReactNode;
}

export const CarbonSiliconFunFact: React.FC<FunFactProps> = ({ title, description }) => {
  return (
    <TheoryCallout title={title}>
      {description}
    </TheoryCallout>
  );
};
