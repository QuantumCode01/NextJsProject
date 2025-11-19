import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  // useEffect(() => {
  //   router.replace("/login");
  // }, []);
  function handleLogin(){
      router.replace("/login");
  }

   const reports = [
    {
      title: "Epilepsy",
      subtitle: "Market Insight, Epidemiology and Market Forecast",
      img: "/epilepsy-market-reports.webp",
    },
    {
      title: "Intratumoral Cancer Therapies",
      subtitle: "Market Insight, Epidemiology and Market Forecast",
      img: "/intratumoral-cancer-therapies-market-report.webp",
    },
    {
      title: "IgA Nephropathy (IgAN)",
      subtitle: "Market Insight, Epidemiology and Market Forecast",
      img: "/iga-nephropathy-igan-market.webp",
    },
    {
      title: "HER2-low Cancers",
      subtitle: "Market Insight, Epidemiology and Market Forecast",
      img: "/iga-nephropathy-igan-market.webp",
    },
    {
      title: "Peanut Allergy",
      subtitle: "Market Insight, Epidemiology and Market Forecast",
      img: "/iga-nephropathy-igan-market.webp",
    },
  ];

  return (
    <>
     <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>About Us</a></li>
        <li>
          <a>Consulting</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Capabilities</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
   <Image
    src="/delve-logo.webp" // must be in the public folder
    alt="Logo"
    width={100}       // equivalent to w-6
    height={100}      // equivalent to h-6
    className="object-contain"
  />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>About Us</a></li>
      <li>
        <details>
          <summary>Consulting</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Capabilities</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button onClick={handleLogin}className="btn btn-neutral">Login</button>
  </div>
      </div>
    <div className="mx-auto max-w-[1536px] px-4 py-8 w-ninety">
        <div className="grid grid-cols-12 gap-4">
          {/* Section Header */}
          <div className="col-span-12 lg:col-span-3">
            <h2 className="text-2xl font-semibold mb-4 relative before:content-[''] before:absolute before:-bottom-1 before:h-[0.125rem] before:w-20 before:bg-blue-500">
              Latest Reports
            </h2>
            <p className="text-gray-800 dark:text-white">
              Get comprehensive insights into the healthcare industry...
            </p>
          </div>

          {/* Reports */}
          {reports.map((report, idx) => (
            <div key={idx} className="col-span-6 lg:col-span-3">
              <a href={report.link}>
                <div className="relative rounded overflow-hidden hover:opacity-75">
                  <Image
                    src={report.img}
                    alt={report.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded-full">
                    SALE
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
    </div>
    </>
  
  );
}
