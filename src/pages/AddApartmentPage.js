import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddApartmentPage() {

  const navigate = useNavigate();

  // const [title, setTitle] = useState('');
  // const [img, setImg] = useState('');
  // const [pricePerDay, setPricePerDay] = useState(0);

  const [state, setState] = useState({
    title: '',
    img: '',
    pricePerDay: 0
  });

  const updateState = event => setState({
    ...state,
    [event.target.name]: event.target.value
  });


  // const updateTitle = event => setTitle(event.target.value);
  // const updateImg = event => setImg(event.target.value);
  // const updatePricePerDay = event => setPricePerDay(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    // console.log(title, img, pricePerDay);
    
    axios.post('https://ironbnb-m3.herokuapp.com/apartments', {
      title: state.title,
      img: state.img,
      pricePerDay: Number(state.pricePerDay)
    })
      .then(axiosResponse => {
        console.log(axiosResponse.data);
        navigate('/');
      })
      .catch(err => console.log(err))
  };

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input name="title" value={state.title} onChange={updateState} />
        <label>Image</label>
        <input name="img" value={state.img} onChange={updateState} />
        <label>Price per day</label>
        <input name="pricePerDay" value={state.pricePerDay} onChange={updateState} type="number" />
        <button>Create Apartment</button>
      </form>
    </div>
  );
}
 
export default AddApartmentPage;