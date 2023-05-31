import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { get } from 'lodash';

import CatSearchInput from 'src/components/CatSearchInput';
import searchCatsByBreedName, { CatData } from 'src/data/searchCatsByBreedName';
import CatSearchResults from './CatSearchResults';

export default function SearchResults() {
  const [query] = useSearchParams();
  const q = query.get('q');
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [cats, setCats] = useState<CatData[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetchCatData() {
      if (!q) {
        return;
      }
      setLoading(true);
      setLoaded(false);
      setError(undefined);
      try {
        const results = await searchCatsByBreedName(q);
        setLoading(false);
        setCats(get(results, 'data', []));
      } catch (err) {
        console.error(err);
        setCats([]);
        setError('An error has occured');
      } finally {
        setLoaded(true);
      }
    }
    fetchCatData();
  }, [q]);

  return (
    <Container>
      <h1>Cat Search Results</h1>
      <CatSearchInput />
      <CatSearchResults
        error={error}
        cats={cats}
        loading={loading}
        loaded={loaded}
      />
    </Container>
  );
}
