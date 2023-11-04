import { Link } from "react-router-dom";
import { Button } from "./button";

function Header() {
  return (
    <nav className="bg-background  sticky top-0 w-full z-20  left-0 h-14 border-b border">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link to="/dashboard" className="flex items-center">
          <span className="self-center text-lg font-semibold whitespace-nowrap text-primary ">
            Head Together
          </span>
        </Link>
        <div className="flex md:order-2  items-center">
          <Link to={"/login"}>
            <Button type="button" className=" text-xs p-0 px-2 ">
              Login
            </Button>
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-muted-foreground rounded-lg "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
