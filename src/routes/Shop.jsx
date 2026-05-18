import { useMilkshakes } from '../hooks/useMilkshakes';

export default function Shop() {
  // We deleted the old useState and useEffect, and replaced it with ONE clean line:
  const { milkshakes, setMilkshakes } = useMilkshakes();
  // 3. Function to handle deleting a milkshake
  const handleDelete = (id) => {
    // First, we tell the database to delete it
    fetch(`http://localhost:3001/milkshakes/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      // Then, we update our screen so it disappears without needing a refresh
      const updatedMilkshakes = milkshakes.filter((shake) => shake.id !== id);
      setMilkshakes(updatedMilkshakes);
    });
  };
// 4. Function to handle updating a milkshake's price 
  const handleUpdatePrice = (id, currentPrice) => {
    const newPriceText = window.prompt("Enter the new price for this milkshake:", currentPrice);
    
    if (newPriceText !== null && newPriceText !== "") {
      const newPrice = parseFloat(newPriceText);

      fetch(`http://localhost:3001/milkshakes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ price: newPrice })
      })
      .then(() => {
        const updatedMilkshakes = milkshakes.map((shake) => 
          shake.id === id ? { ...shake, price: newPrice } : shake
        );
        setMilkshakes(updatedMilkshakes);
      });
    }
  };
  return (
    <div>
      <h2>Shop Menu</h2>
      <div className="milkshake-list">
        {/* Loop through our milkshakes and display them */}
        {milkshakes.map((shake) => (
          <div key={shake.id} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h3>{shake.name}</h3>
            <p><em>{shake.description}</em></p>
            <p><strong>Origin:</strong> {shake.origin}</p>
            <p><strong>Price:</strong> ${Number(shake.price).toFixed(2)}</p>
            {/* Our Update button */}
            <button 
              onClick={() => handleUpdatePrice(shake.id, shake.price)} 
              style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', marginRight: '10px' }}
            >
              Edit Price
            </button>
            
            {/* Our new delete button */}
            <button 
              onClick={() => handleDelete(shake.id)} 
              style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
            >
              Delete Milkshake
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}