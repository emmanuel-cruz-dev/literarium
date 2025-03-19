import { FC } from "react";
import { FormItemProps } from "types/types";
import "../../styles/components/formItem.css";

const FormItem: FC<FormItemProps> = ({ title, button }) => {
  return (
    <article className="flex flex-col gap-4 mb-12">
      <h2 className="uppercase font-semibold text-2xl text-black">{title}</h2>
      <form className="form-item flex flex-col gap-6" action="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            autoComplete="off"
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
          />
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            placeholder="Phone Number"
          />
        </div>
        <textarea name="form__message" id="form__message"></textarea>
        <button className="w-fit py-3 px-6 text-white text-lg background-accent__item uppercase font-bold hover:bg-black transition-colors duration-300 ease-in-out">
          {button}
        </button>
      </form>
    </article>
  );
};

export default FormItem;
