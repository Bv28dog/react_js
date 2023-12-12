import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Required"),
  firstName: yup.string().required("Requried"),
  city: yup.string().required("Required"),
});

export const HookFoorm = () => {
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (...props) => {
    console.log(props);
  };

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <label>
          <input {...form.register("name")} />
          Name:
        </label>
        {form.formState.errors.name && (
          <p style={{ color: "red" }}>{form.formState.errors.name.message}</p>
        )}
        <br />
        <br />
        <label>
          <input {...form.register("firstName")} />
          firstName:
        </label>
        {form.formState.errors.firstName && (
          <p style={{ color: "red" }}>
            {form.formState.errors.firstName.message}
          </p>
        )}
        <br />
        <br />
        <label>
          <input {...form.register("city")} />
          city:
        </label>
        {form.formState.errors.city && (
          <p style={{ color: "red" }}>{form.formState.errors.city.message}</p>
        )}
        }
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
