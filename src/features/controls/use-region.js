import { selectRegion, setRegion } from './controls-slice';
import { useDispatch, useSelector } from 'react-redux';

export const useRegion = () => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  const handleSelect = (reg) => {
    dispatch(setRegion(reg?.value || ''));
  };

  return [region, handleSelect];
};
