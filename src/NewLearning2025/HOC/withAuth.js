import { useEffect } from "react";

export const withAuth = (WrapComponent) => {
  return (props) => {
    useEffect(() => {
      console.log("HOC Component called ");
    }, []);

    if (!props.isLogIn) return <h1>Please loggin</h1>;
    return <WrapComponent {...props} />;
  };
};
