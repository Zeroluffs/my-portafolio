import Link from "next/link";
import pdf from "../public/assets/JhonerPineda_CV.pdf";

export function NavigationBar() {
  const onClick = () => {
    window.open(pdf);
  };

  return (
    <nav>
      <div className="flex flex-col justify-between pt-8 mx-4 md:flex-row lg:flex-row lg:pt-14">
        {/* <Link href={pdf} >
          <a className="px-6 py-2 border-2 rounded-sm text-leaf hover:bg-slate-600 hover:bg-opacity-20 border-leaf">
            Resume
          </a>
        </Link> */}
        <a
          href={"assets/JhonerPineda_CV.pdf"}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 border-2 rounded-sm text-leaf hover:bg-slate-600 hover:bg-opacity-20 border-leaf"
        >
          Resume
        </a>
        <button
          onClick={onClick}
          className="px-6 py-2 border-2 rounded-sm text-leaf hover:bg-slate-600 hover:bg-opacity-20 border-leaf"
        >
          Resume
        </button>
      </div>
    </nav>
  );
}
