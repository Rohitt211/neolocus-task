import Style from "./Budget.style.module.css";

export default function BudgetContainer({ setCurrentBudget }) {
  return (
    <div className={Style.budget_container_wrapper}>
      <div className={Style.budget_single_row}>
        <div
          onClick={() => setCurrentBudget("1000 SAR-5000 SAR")}
          className={Style.budget_single_element}
        >
          1000 SAR-5000 SAR
        </div>
        <div
          onClick={() => setCurrentBudget("6000 SAR-10.000 SAR")}
          className={Style.budget_single_element}
        >
          6000 SAR-10.000 SAR
        </div>
      </div>
      <div className={Style.budget_single_row}>
        <div
          onClick={() => setCurrentBudget("11,000 SAR-15,000 SAR")}
          className={Style.budget_single_element}
        >
          11,000 SAR-15,000 SAR
        </div>

        <div
          onClick={() => setCurrentBudget("16,000 SAR-20,000 SAR")}
          className={Style.budget_single_element}
        >
          16,000 SAR-20,000 SAR
        </div>
      </div>
    </div>
  );
}
