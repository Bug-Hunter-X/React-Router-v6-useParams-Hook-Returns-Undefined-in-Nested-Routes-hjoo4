The solution involves adding null checks to handle the scenario where `useParams()` returns `undefined`.

```javascript
import { useParams } from 'react-router-dom';

function ItemDetails() {
  const { itemId } = useParams();

  // Check for undefined before using itemId
  const displayItemId = itemId ? itemId : 'No item ID provided';

  return (
    <div>
      <h1>Item Details</h1>
      <p>Item ID: {displayItemId}</p>      
    </div>
  );
}

export default ItemDetails;
```
This robust approach prevents unexpected crashes by gracefully handling undefined parameter values. Consider additional error handling, conditional rendering, or loading states for a more comprehensive solution.