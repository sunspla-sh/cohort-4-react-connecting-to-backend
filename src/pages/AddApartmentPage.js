import { useState } from 'react';

function AddApartmentPage() {

  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [pricePerDay, setPricePerDay] = useState(0);

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      <form>
        <label>Title</label>
        <input value={title} onChange={event => {
          setTitle(event.target.value)
        }} />
        <label>Image</label>
        <input />
        <label>Price per day</label>
        <input />
        <button>Create Apartment</button>
      </form>
    </div>
  );
}
 
export default AddApartmentPage;