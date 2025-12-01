import { useEffect, useState } from "react";

export function useDebounce(text, delay = 1000) {
  const [debounceText, setDebounceText] = useState(text);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounceText(text);
    }, delay);
    return () => clearTimeout(timer);
  }, [text]);

  return debounceText;
}
