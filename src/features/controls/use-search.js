import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from './controls-slice';

export const useSearch = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.controls.search);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return [searchValue, handleSearch];
};
