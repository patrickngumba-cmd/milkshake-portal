import { useState } from 'react';

export default function Admin() {
  // 1. Set up state variables for our form fields
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [origin, setOrigin] = useState('');
  const [price, setPrice] = useState('');

  // 2. Handle what happens when we click submit
  const handleSubmit = (e) => {
    e.preventDefault(); // This stops the page from doing a hard refresh

    // Package the form data into a new object
    const newMilkshake = {
      name: name,
      description: description,
      origin: origin,
      price: parseFloat(price) // Make sure the price saves as a number, not text
    };

    // 3. Send the POST request to our database
    fetch('http://localhost:3001/milkshakes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMilkshake)
    })
    .then(response => response.json())
    .then(() => {
      alert('Milkshake added successfully!');
      // Clear the form boxes so we can add another one later
      setName('');
      setDescription('');
      setOrigin('');
      setPrice('');
    });
  };

  return (
    <div>
      <h2>Admin Portal - Add a Milkshake</h2>
      
      {/* Our form. When submitted, it triggers the handleSubmit function above */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '10px' }}>
        
        <label>Milkshake Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Origin:</label>
        <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} required />

        <label>Price:</label>
        <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />

        <button type="submit" style={{ marginTop: '10px', padding: '5px' }}>Add Milkshake</button>
      
      </form>
    </div>
  );
}