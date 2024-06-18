import { forwardRef } from "react";

const Input = forwardRef(function Input({ isTextArea, label, ...rest }, ref) {
  const classes =
    "w-full p-1 border-b-2 border-stone-300 rounded-sm bg-stone-200 text-stone-800 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextArea ? (
        <textarea className={classes} {...rest} ref={ref} />
      ) : (
        <input className={classes} {...rest} ref={ref} />
      )}
    </p>
  );
});

export default Input;
