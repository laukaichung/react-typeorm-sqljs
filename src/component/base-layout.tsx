import { AppDataSource } from "../config/data-source";
import React, { useState } from "react";
import { FunctionComponentWithChildren } from "../types";
import useInterval from "react-use/lib/useInterval";

const BaseLayout: FunctionComponentWithChildren = ({ children }) => {
  const [isInitialized, setInitialized] = useState(AppDataSource.isInitialized);

  useInterval(
    () => {
      console.log("Checking data source status....");
      setInitialized(AppDataSource.isInitialized);
    },
    isInitialized ? null : 1
  );

  if (isInitialized) {
    return <>{children}</>;
  }
  return (
    <div>
      <button
        onClick={async () => {
          await AppDataSource.initialize();
          setInitialized(AppDataSource.isInitialized);
        }}
      >
        Reinitialize Data Source
      </button>
    </div>
  );
};

export default BaseLayout;
