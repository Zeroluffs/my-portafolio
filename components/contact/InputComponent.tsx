interface InputComponentProps {
  name: string;
  id: string;
  placeholder: string;
  type: string;
}

export function InputComponent({
  name,
  id,
  placeholder,
  type,
}: InputComponentProps) {
  return (
    <div>
      <label htmlFor={id} className="text-base text-gray-300 ">
        {name}
      </label>
      <input
        required
        className="block h-12 p-4 my-4 rounded-md w-[500px] bg-midnight text-lightState"
        id={id}
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
