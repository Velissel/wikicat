import React from 'react';
import { Button, Card, CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CatData } from 'src/data/searchCatsByBreedName';
// @ts-ignore
import styles from './CatCard.module.scss';

interface CatCardProps {
  cat: CatData;
}
export default function CatCard(props: CatCardProps) {
  const { id, image, name, description } = props.cat;
  return (
    <Card>
      <CardImg
        variant="top"
        src={image}
        className={styles.image}
        data-testid="cat-img"
      ></CardImg>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className={styles.description}>{description}</Card.Text>
        <Link to={`/kitty/${id}`}>
          <Button>View Breed Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
