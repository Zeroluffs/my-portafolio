import { InputComponent } from "./InputComponent";

export function ContactForm() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <p className="mb-4 text-lg font-normal text-leaf"> What is next?</p>
        <p className="mb-4 font-sans text-4xl text-lightState">Get In Touch</p>
        <p className="text-lg text-slate-400 w-[368px]">
          If you wish to contact me feel free to send me an email. I would love
          to hear from you!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 bg-lightNavy w-[800px] h-[648px] m-auto">
        <form className="flex flex-col">
          <InputComponent
            name="Name *"
            id="name"
            placeholder="Enter Your Name"
            type="text"
          />

          <InputComponent
            name="Email Address *"
            id="email"
            placeholder="Enter Your Email Address"
            type="email"
          />
          <div>
            <label htmlFor="name" className="text-base text-gray-300">
              Message *
            </label>
            <textarea
              required
              placeholder="Enter Your Message"
              className="block h-48 p-4 my-8 transition w-[500px] ease-in-out rounded-md text-lightState bg-midnight  "
              id="name"
            ></textarea>
          </div>

          <button className="mt-4 ml-auto text-xl transition-colors duration-200 transform border rounded-md h-14 w-52 border-leaf text-leaf bg-midnight hover:bg-leaf hover:bg-opacity-10 focus:bg-leaf">
            Say Hello
          </button>
        </form>
      </div>
    </section>
  );
}
