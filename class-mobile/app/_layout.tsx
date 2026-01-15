import { Stack } from "expo-router";  
import { useEffect,useState } from "react";
  
export default function IndexPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <></>
  return (
   
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>

  );
}
