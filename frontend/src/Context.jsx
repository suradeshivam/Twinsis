import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

const Context = ({ children }) => {
  const [sideOpen, setSideOpen] = useState(false);
  const [selectedPatient, setselectedPatient] = useState(null);

  return (
    <OrderContext.Provider
      value={{
        sideOpen,
        setSideOpen,
        selectedPatient,
        setselectedPatient,
      }}>
      {children}
    </OrderContext.Provider>
  );
};

export const OrderState = () => {
  return useContext(OrderContext);
};

export default Context;
