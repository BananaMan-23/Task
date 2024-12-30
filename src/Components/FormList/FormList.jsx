import style from "./FormList.module.css";

function FormList() {
  const List = [
    {
      formTitle: "Percentage of market price (%)",
      oneDescription: "Market price: 98.66 RUB per 1 USDT",
      twoDescription: "Your price: 0.00 RUB per 1 USDT",
      placeholder: "Enter amount from 90 to 120 %",
    },
    {
      formTitle: "Volume",
      oneDescription: "Your balance: 2,547,000,001 USDT - Max",
      twoDescription: "",
      placeholder: "Enter amount from 10 to 10000 USDT",
    },
    {
      formTitle: "Min amount of order",
      oneDescription: "",
      twoDescription: "",
      placeholder: "Min. 500 RUB",
    },
    {
      formTitle: "Min amount of order",
      oneDescription: "",
      twoDescription: "",
      placeholder: "Max. 500 000 RUB",
    },
  ];
  return <div></div>;
}

export default FormList;
