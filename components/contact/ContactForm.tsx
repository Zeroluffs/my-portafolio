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
          <div>
            <label htmlFor="name" className="text-base text-gray-300 ">
              Name *
            </label>
            <input
              required
              className="block h-12 p-4 my-4 rounded-md w-[500px] bg-midnight text-lightState"
              id="name"
              type="text"
              placeholder="Enter Your Name"
            ></input>
          </div>
          <div>
            <label htmlFor="name" className="text-base text-gray-300">
              Email Address *
            </label>
            <input
              required
              className="block h-12 p-4 my-4 rounded-md w-[500px] bg-midnight text-lightState "
              id="name"
              type="email"
              placeholder="Enter Your Email Address"
            ></input>
          </div>
          <div>
            <label htmlFor="name" className="text-base text-gray-300">
              Message *
            </label>
            <textarea
              required
              placeholder="Enter Your Message"
              className="block h-48 p-2 my-8 transition w-[500px] ease-in-out rounded-md text-lightState bg-midnight  "
              id="name"
            ></textarea>
          </div>

          <button className="mt-4 ml-auto text-2xl transition-colors duration-200 transform border rounded-md h-14 w-52 border-leaf text-leaf bg-midnight hover:bg-leaf hover:bg-opacity-10 focus:bg-leaf">
            Say Hello
          </button>
        </form>
      </div>
    </section>
  );
}
