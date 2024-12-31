import { useDispatch } from "react-redux";
import { openPopup, closePopup } from "../../Redux/slice/popupSlice";
import ContainerConfig from "../../UI/ContainerConfig/ContainerConfig";
import OpenDropButton from "../../UI/OpenDropButton/OpenDropButton";
import SelectMenu from "../SelectMenu/SelectMenu";
import { useSelector } from "react-redux";
import { useState } from "react";

function Main() {
  const dispatch = useDispatch();
  const popupState = useSelector((state) => state.popup);

  const List = [
    {
      title: "Crypto",
      value: "USDT",
      options: ["USDT", "TRX", "BTC", "ETH", "TON"],
      span: "Select Crypto",
    },
    {
      title: "Currency",
      value: "RUB",
      options: ["USD", "EUR", "GBP", "CNY", "RUB", "AUD", "BYN", "MNT", "CAD"],
      span: "Select Currency",
    },
    {
      title: "Price Type",
      value: "Floating",
      options: ["Fixed", "Floating"],
      span: "Select Type",
    },
  ];

  const [localValues, setLocalValues] = useState(List);

  const handleOpenPopup = (item) => {
    dispatch(openPopup(item));
  };

  const handleSelectChange = (newValue) => {
    const updatedList = localValues.map((container) => {
      if (container.title === popupState.data.title) {
        return { ...container, value: newValue };
      }
      return container;
    });
    setLocalValues(updatedList);
    dispatch(closePopup());
  };

  return (
    <div>
      {localValues.map((item, index) => (
        <ContainerConfig key={index} title={item.title} value={item.value}>
          <OpenDropButton onClick={() => handleOpenPopup(item)} />
        </ContainerConfig>
      ))}
      {popupState.isOpen && (
        <SelectMenu
          title={popupState.data.title}
          span={popupState.data.span}
          menuList={popupState.data.options}
          onSelectChange={handleSelectChange}
          selectedValue={localValues.find(container => container.title === popupState.data.title)?.value}
        />
      )}
    </div>
  );
}

export default Main;
