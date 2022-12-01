export function Footer() {
  const gitHub = "https://github.com/Zeroluffs";
  return (
    <footer>
      <div className="mt-[88px]">
        <a target="_blank" rel="noopener noreferrer" href={gitHub}>
          <h6 className="flex items-center justify-center font-light duration-300 cursor-pointer hover:text-leaf text-slate-400 pb-[44px]">
            Built by Jhoner Pineda
          </h6>
        </a>
      </div>
    </footer>
  );
}
