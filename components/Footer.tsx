import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 md:px-12 mt-auto bg-[#f9f9f9] flex flex-col md:flex-row justify-between items-center gap-8 border-t border-surface-container">
      <div className="font-body text-[10px] tracking-[0.2em] uppercase font-medium text-zinc-400">
        © 2024 ASIMAN ABDULLAZADE. ALL RIGHTS RESERVED.
      </div>
      <div className="flex gap-12">
        <Link href="#" className="font-body text-[10px] tracking-[0.2em] uppercase font-medium text-zinc-400 hover:text-black transition-colors duration-500">
          INSTAGRAM
        </Link>
        <Link href="#" className="font-body text-[10px] tracking-[0.2em] uppercase font-medium text-zinc-400 hover:text-black transition-colors duration-500">
          VIDEO
        </Link>
        <Link href="#" className="font-body text-[10px] tracking-[0.2em] uppercase font-medium text-zinc-400 hover:text-black transition-colors duration-500">
          LINKEDIN
        </Link>
      </div>
      <div className="md:hidden font-headline font-bold text-xl tracking-widest text-black uppercase text-center mt-4">
        ASIMAN ABDULLAZADE
      </div>
    </footer>
  );
}
