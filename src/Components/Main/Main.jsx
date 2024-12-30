import ContainerConfig from "../../UI/ContainerConfig/ContainerConfig";
import OpenDropButton from "../../UI/OpenDropButton/OpenDropButton";

function Main() {
  const List = [
    { title: "Sell cryptocurrency", value: "USDT" },
    { title: "Fiat currency", value: "RUB" },
    { title: "Price type", value: "Floating" },
  ];

  return (
    <div>
      {List.map((item, index) => (
        <ContainerConfig key={index} title={item.title} value={item.value}>
          <OpenDropButton />
        </ContainerConfig>
      ))}
    </div>
  );
}

export default Main;
