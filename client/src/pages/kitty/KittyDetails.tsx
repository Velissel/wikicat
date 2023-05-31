import React from 'react';
import { Badge, ListGroup, ListGroupItem } from 'react-bootstrap';

interface KittyDetailsProps {
  temperament: string;
  origin: string;
  lifeSpan: string;
  adaptability: number;
  affectionLevel: number;
  childFriendly: number;
  grooming: number;
  intelligence: number;
  healthIssues: number;
  socialNeeds: number;
  strangerFriendly: number;
}
export default function KittyDetails(props: KittyDetailsProps) {
  const { temperament, origin, lifeSpan, ...rest } = props;
  const numbers = [
    'adaptability',
    'affectionLevel',
    'childFriendly',
    'grooming',
    'intelligence',
    'healthIssues',
    'socialNeeds',
    'strangerFriendly',
  ];
  return (
    <ListGroup as="ol" data-testid="kitty-details">
      <ListGroupItem>
        <div className="ms-2 me-auto">
          <div className="fw-bold">temperament</div>
          {temperament}
        </div>
      </ListGroupItem>
      <ListGroupItem>
        <div className="ms-2 me-auto">
          <div className="fw-bold">origin</div>
          {origin}
        </div>
      </ListGroupItem>
      <ListGroupItem>
        <div className="ms-2 me-auto">
          <div className="fw-bold">life span</div>
          {lifeSpan}
        </div>
      </ListGroupItem>
      {numbers.map((key: keyof typeof rest) => {
        const value = rest[key];
        return (
          <ListGroupItem
            key={key}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{key}</div>
            </div>
            <Badge bg="primary" pill>
              {value}
            </Badge>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
