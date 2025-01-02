import style from "./FormList.module.css";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setFormData } from "../../Redux/slice/formSlice";
import FormItem from "../FormItem/FormItem";

function FormList() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      percentage: "",
      volume: "",
      minOrder: "",
      maxOrder: "",
    },
  });
  const dispatch = useDispatch();

  const List = [
    {
      formTitle: "Percentage of market price (%)",
      name: "percentage",
      placeholder: "Enter amount from 90 to 120 %",
    },
    {
      formTitle: "Volume",
      name: "volume",
      placeholder: "Enter amount from 10 to 10000 USDT",
    },
    {
      formTitle: "Min amount of order",
      name: "minOrder",
      placeholder: "Min. 500 RUB",
    },
    {
      formTitle: "Max amount of order",
      name: "maxOrder",
      placeholder: "Max. 500 000 RUB",
    },
  ];

  const onSubmit = (data) => {
    dispatch(setFormData(data));
    console.log(data);
  };

  return (
    <div className={style.form__container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {List.map((item, index) => (
          <Controller
            key={index}
            control={control}
            name={item.name}
            render={({ field }) => <FormItem {...item} inputProps={field} />}
          />
        ))}
      </form>
    </div>
  );
}

export default FormList;
