```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/another-page');
    // Some logic that depends on the route change
    console.log('Route changed'); 
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}
export default MyComponent;```