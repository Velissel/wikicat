import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
// @ts-ignore
import styles from './KittyGallery.module.scss';
import { isEmpty } from 'lodash';

interface KittyGalleryProps {
  images: string[];
}
export default function KittyGallery(props: KittyGalleryProps) {
  const { images } = props;

  if (isEmpty(images)) {
    return <h4>No other photos</h4>;
  }

  return (
    <Row>
      {images.map((image, i) => {
        return (
          <Col xs={6} sm={4} md={4} lg={3} key={image}>
            <Image
              src={image}
              fluid
              rounded
              className={`mb-4 ${styles.image}`}
              data-testid={`img-${i}`}
            ></Image>
          </Col>
        );
      })}
    </Row>
  );
}
