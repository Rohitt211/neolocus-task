import { useState } from "react";
import Style from "./Budget.style.module.css";

export default function BudgetContainer({ setCurrentBudget }) {
  const bugetData = [
    ["1000 SAR-5000 SAR", "6000 SAR-10.000 SAR"],
    ["11,000 SAR-15,000 SAR", "16,000 SAR-20,000 SAR"],
  ];
  return (
    <>
      <div className={Style.budget_container_wrapper}>
        {bugetData.map((element, index) => {
          return (
            <div className={Style.budget_single_row}>
              {element.map((ele, index) => {
                return (
                  <div
                    onClick={() => setCurrentBudget(ele)}
                    className={Style.budget_single_element}
                  >
                    {ele}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
