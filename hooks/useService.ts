import { useEffect, useState } from "react";

const useService = (
  url: string,
  method: string = "GET",
  body?: BodyInit,
): [Response | undefined, boolean] => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState<Response | undefined>(undefined);

  useEffect(() => {
    const callingService = async () => {
      const res = await fetch(url, {
        method,
        body,
      });

      const jsonData = await res.json();

      setResult(jsonData);
      setIsLoaded(true);
    };
    
    callingService();
  }, []);

  return [result, isLoaded];
};

export default useService;
