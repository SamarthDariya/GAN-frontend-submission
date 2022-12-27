import { useHistory } from 'react-router-dom';

const Checkout = ({ cart }) => {
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <div>
      {/* ... */}
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
};
