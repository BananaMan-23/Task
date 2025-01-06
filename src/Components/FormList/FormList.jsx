import style from "./FormList.module.css";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../../Redux/slice/formSlice";
import FormItem from "../FormItem/FormItem";
import Footer from "../Footer/Footer";

function FormList() {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
      oneDescription: "Market price: 98.66 RUB per 1 USDT",
      twoDescription: "Your price: 0.00 RUB per 1 USDT",
      validation: {
        required: "This field is required",
        min: { value: 90, message: "Minimum value is 90%" },
        max: { value: 120, message: "Maximum value is 120%" },
      },
    },
    {
      formTitle: "Volume",
      name: "volume",
      placeholder: "Enter amount from 10 to 10000 USDT",
      oneDescription: "Your balance: 2,547,000,001 USDT",
      element: " - Max",
      validation: {
        required: "This field is required",
        min: { value: 10, message: "Minimum value is 10 USDT" },
        max: { value: 10000, message: "Maximum value is 10000 USDT" },
      },
    },
    {
      formTitle: "Min amount of order",
      name: "minOrder",
      placeholder: "Min. 500 RUB",
      validation: {
        required: "This field is required",
        min: { value: 500, message: "Minimum value is 500 RUB" },
      },
    },
    {
      formTitle: "Max amount of order",
      name: "maxOrder",
      placeholder: "Max. 500 000 RUB",
      validation: {
        required: "This field is required",
        min: { value: 500000, message: "Maximum value is 500 000 RUB" },
      },
    },
  ];

  const formValues = watch();

  useEffect(() => {
    dispatch(setFormData(formValues));
  }, [formValues, dispatch]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={style.form__container}>
      <form>
        {List.map((item) => (
          <Controller
            key={item.name}
            control={control}
            name={item.name}
            rules={item.validation}
            render={({ field }) => (
              <FormItem
                {...item}
                inputProps={{ ...field }}
                errors={errors[item.name]}
              />
            )}
          />
        ))}
        {/* <button type="submit" className={style.submitButton}>Submit</button> */}
      </form>
      <Footer onContinue={handleSubmit(onSubmit)} />
    </div>
  );
}

export default FormList;
