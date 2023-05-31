import { get } from 'lodash';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
// @ts-ignore
import logo from '../../logo.svg';
import { CatDetailData } from 'src/data/loadCatById';
import KittyDetails from './KittyDetails';
import KittyGallery from './KittyGallery';

export default function Kitty() {
  const cat = useLoaderData() as CatDetailData;
  const headerImage = get(cat, 'images[0]', logo);

  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} sm={6} md={4}>
          <Image src={headerImage} rounded fluid data-testid="header-image" />
        </Col>
        <Col xs={12} sm={6} md={8}>
          <h1>{cat.breed.name}</h1>
          <p>{cat.breed.description}</p>

          <KittyDetails
            {...cat.breed}
            lifeSpan={cat.breed.life_span}
            affectionLevel={cat.breed.affection_level}
            childFriendly={cat.breed.child_friendly}
            healthIssues={cat.breed.health_issues}
            socialNeeds={cat.breed.social_needs}
            strangerFriendly={cat.breed.stranger_friendly}
          />
        </Col>
      </Row>
      <h2 className="mt-5 mb-3">Other Photos</h2>
      <KittyGallery images={cat.images.slice(1)} />
    </Container>
  );
}
