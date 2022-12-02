import { useRef } from "react";
import { useContactForm } from "./hooks/useContactForm";
import { InputComponent } from "./InputComponent";

export function ContactForm() {
  const { email, name, textArea, onSubmit, form } = useContactForm();

  return (
    <section id="Contact">
      <div className="flex flex-col items-center justify-center mt-[100px]  ">
        <p className="mb-4 text-lg font-normal text-leaf"> What is next?</p>
        <p className="mb-4 font-sans text-4xl text-lightState">Get In Touch</p>
        <p className="text-lg text-slate-400 w-[368px]">
          If you wish to contact me feel free to send me an email. I would love
          to hear from you!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 bg-lightNavy w-[364px]  desktop:w-[800px] h-[648px] m-auto rounded-lg">
        <form className="flex flex-col" onSubmit={onSubmit} ref={form}>
          <InputComponent
            name="Name *"
            id="from_name"
            placeholder="Enter Your Name"
            type="text"
            inputRef={name}
          />

          <InputComponent
            name="Email Address *"
            id="from_email"
            placeholder="Enter Your Email Address"
            type="email"
            inputRef={email}
          />
          <div>
            <label htmlFor="textArea" className="text-base text-gray-300">
              Message *
            </label>
            <textarea
              ref={textArea}
              required
              name="message"
              placeholder="Enter Your Message"
              className="block h-48 p-4 my-8 transition w-[324px] desktop:w-[500px] ease-in-out rounded-md text-lightState bg-midnight  resize-none"
              id="message"
            ></textarea>
          </div>

          <button className="mt-4 ml-auto text-xl transition-colors duration-200 transform border rounded-md h-14 w-52 border-leaf text-leaf bg-midnight hover:bg-leaf hover:bg-opacity-10 ">
            Say Hello
          </button>
        </form>
      </div>
    </section>
  );
}
