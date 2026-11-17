import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div
      role="search"
      className="flex items-center gap-2 px-4 h-11 rounded-xl bg-white/60 ring-1 ring-ccgarlic-dark focus-within:ring-2 focus-within:ring-ccspice transition-shadow"
    >
      <MagnifyingGlassIcon className="size-5 shrink-0 text-ccgarlic-light" aria-hidden="true" />
      <input
        type="search"
        name="q"
        aria-label={placeholder}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none placeholder:text-ccgarlic-light"
      />
    </div>
  );
}
