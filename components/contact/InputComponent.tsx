import { RefObject } from "react";

interface InputComponentProps {
  name: string;
  id: string;
  placeholder: string;
  type: string;
  inputRef: RefObject<HTMLInputElement>;
}

export function InputComponent({
  name,
  id,
  placeholder,
  type,
  inputRef,
}: InputComponentProps) {
  return (
    <div>
      <label htmlFor={id} className="text-base text-gray-300 ">
        {name}
      </label>
      <input
        ref={inputRef}
        required
        className="block h-12 p-4 my-4 rounded-md w-[500px] bg-midnight text-lightState"
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
