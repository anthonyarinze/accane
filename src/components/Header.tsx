import thumbnail from "../assets/thumbnail.jpg";

const Header = () => {
  return (
    <header className="sticky w-full h-full py-4 border-b-[1.5px] flex shadow-header">
      <div className="flex items-center ml-6">
        <img src={thumbnail} height="40px" width="40px" />
        <h1 className="uppercase ml-2 font-semibold text-xl">Accane</h1>
      </div>
    </header>
  );
};

export default Header;
