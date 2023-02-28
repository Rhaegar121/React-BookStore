import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <span>{status}</span>
    </>
  );
};

export default Categories;
