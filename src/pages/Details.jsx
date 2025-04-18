import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectDetails } from '../store/details/details-selectors';
import { useEffect } from 'react';
import { clearDetails, loadCountryByName } from '../store/details/details-action';

export const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentCountry, error, status } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
