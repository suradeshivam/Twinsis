import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

const Context = ({ children }) => {
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <OrderContext.Provider
      value={{
        sideOpen,
        setSideOpen,
      }}>
      {children}
    </OrderContext.Provider>
  );
};

export const OrderState = () => {
  return useContext(OrderContext);
};

export default Context;
