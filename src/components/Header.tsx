export const Header = () => {
  return (
    <header className="flex justify-center items-center gap-x-5 my-3 mr-3">
      <input
        className="w-2/3 m-2 p-3 border-rose-700 border-solid border rounded-3xl bg-neutral-950 h-10"
        type="search"
      />
      <p>Sign In</p>
    </header>
  );
};
