import { useRef } from "react";
import emailjs from "@emailjs/browser";

export function useContactForm() {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const textArea = useRef<HTMLTextAreaElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name.current!.value);
    console.log(email.current!.value);
    console.log(textArea.current!.value);
    console.log(form.current!.name!.valueOf());

    const emailToSend = {
      from_name: name.current!.value,
      from_email: email.current!.value,
      message: textArea.current!.value,
    };
    await sendEmail(emailToSend);
    name.current!.value = "";
    email.current!.value = "";
    textArea.current!.value = "";
  };

  const sendEmail = async (emailToSend: any) => {
    const result = await emailjs.sendForm(
      "service_3s2llu5",
      "template_1ft6xvb",
      form.current!,
      "pAF8rs3TpabRv9HGo"
    );
    console.log("result", result);
  };

  return {
    name,
    email,
    textArea,
    onSubmit,
    form,
  };
}
