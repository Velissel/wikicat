import React from 'react';
import { Container } from 'react-bootstrap';
import CatSearchInput from 'src/components/CatSearchInput';

export default function Home() {
  return (
    <Container>
      <h1 className="mt-5">Catwiki Home</h1>
      <CatSearchInput />
      <h3 className="mt-4">Top 10 Searched Kitties</h3>
      To Be Implemented
    </Container>
  );
}
