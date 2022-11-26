import { useRef } from "react";

export function useContactForm() {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const textArea = useRef<HTMLTextAreaElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name.current!.value);
    console.log(email.current!.value);
    console.log(textArea.current!.value);
    console.log(form.current!.name!.valueOf());
    name.current!.value = "";
    email.current!.value = "";
    textArea.current!.value = "";
  };

  return {
    name,
    email,
    textArea,
    onSubmit,
    form,
  };
}
