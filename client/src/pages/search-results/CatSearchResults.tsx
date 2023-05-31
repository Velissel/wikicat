import { isEmpty } from 'lodash';
import React from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import CatCard from 'src/components/CatCard';
import CatSpinner from 'src/components/CatSpinner';

interface CatSearchResultsProps {
  error?: string;
  cats: any[];
  loading: boolean;
  loaded: boolean;
}
export default function CatSearchResults(props: CatSearchResultsProps) {
  const { error, loading, loaded, cats } = props;

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  if (loading) {
    return <CatSpinner />;
  }

  if (!loaded) {
    return <>Start search cat breeds by putting keyworkds in</>;
  }

  if (isEmpty(cats)) {
    return <Alert variant="warning">Nothing is found</Alert>;
  }

  return (
    <Row data-testid="cat-search-results">
      {cats.map((cat) => {
        return (
          <Col key={cat.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <CatCard cat={cat} />
          </Col>
        );
      })}
    </Row>
  );
}
