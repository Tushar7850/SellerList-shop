import { Link } from "react-router-dom";
import Account from "./Account";
import AccountNavbar from "./AcoountNav";

function Accountpage() {
  return (
    <main>
      <div className=" mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
        <Link to={"/"}>
          <button
            type="button"
            class="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="mr-2"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Home Page
          </button>
        </Link>

        <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
        <div className="grid grid-cols-8 pt-3  sm:grid-cols-10">
          <div className="col-span-2 hidden sm:block">
            <AccountNavbar />
          </div>

          <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
            <Account />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Accountpage;
