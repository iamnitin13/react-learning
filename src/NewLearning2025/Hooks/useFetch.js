import { useEffect, useReducer } from "react";

const initialState = { data: {}, isLoading: true, error: "" };

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "success":
      return { data: payload, isLoading: false, error: "" };
    case "error":
      return { data: {}, isLoading: false, error: payload };
    default:
      return state;
  }
};

export function useFetchAPI(url, method = "GET") {
  const [fetchAPI, dispatchAPI] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { method });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatchAPI({ type: "success", payload: data });
      } catch (error) {
        dispatchAPI({
          type: "error",
          payload: error ?? "Something went wrong",
        });
      }
    };
    fetchData();
  }, [url, method]);

  return fetchAPI;
}
