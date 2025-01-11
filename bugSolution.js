```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    (async () => {
      await router.push('/another-page');
      console.log('Route changed');
    })();
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}
export default MyComponent;```