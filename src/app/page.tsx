import Image from "next/image";
import "@/lib/fontawesome";
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>;
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="font-poppins p-4 mx-auto p-4">
      {/* header section*/}
      <header className="bg-white flex flex-row justify-between p-3">
        <div className="flex flex-row gap-4">
          <img
            src="../images/dummy logo.png"
            className="w-[24.64px] h-[24.64px] mt-2"
            alt=""
          />
          <h3 className="font-semibold font-poppins text-3xl mt-1">Dabang</h3>
        </div>

        <h2 className="font-md text-3xl w-[205px] h-[50px] font-semibold">
          Dashboard
        </h2>

        <form action="" className="bg-yellow-500 w-[513px] h-[60px] relative">
          <input
            type="text"
            name=""
            placeholder="search here"
            className="bg-white h-[60px] font-md pl-[50px] w-[100%] text-[18px]"
            style={{ backgroundColor: "#f9fafb", color: "#737791" }}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-4 top-6 w-[24px] h-[24px]"
            style={{ color: "#5d5fef" }}
          />
        </form>

        <select name="" id="" className="width-20%">
          <option value="us">(us)</option>
          <option value="Nig">Nigeria</option>
          <option value="Ghn">Ghana</option>
        </select>

        <FontAwesomeIcon
          icon={faBell}
          className="w-[3.51pxpx] h-[1.52px] text-red mt-4"
          style={{ color: "#ffa412" }}
        />

        <div className="flex flex-row gap-3 ml-4">
          <img
            src="../images/profile.png"
            className="w-[60px] h-[60px] "
            alt=""
          />
          <div className="mt-2">
            <h1 className="text-[16px] font-bold">Raj</h1>
            <h3 className="text-[14px] font-normal">Iskuma</h3>
          </div>
        </div>
      </header>

      {/* main section */}

      <main className="flex flex-row gap-3 my-8">
        {/* aside section */}
        <aside className="w-[20%] bg-white mx-auto">
          <img src="../images/01.jpg" className="w-[252px] h-[64px]" />

          <div className="text-center p-5 mx-auto flex justify-center">
            <a href="" className="flex gap-3 w-[172px] h-[32px] leading-7">
              <img src="../images/Group.jpg" className="w-3 h-3 mt-1 " alt="" />
              <h3
                className="text-[18px]"
                style={{ color: "#737791", fontWeight: "400" }}
              >
                Leaderboard
              </h3>
            </a>
          </div>

          <div className="text-center p-5 mx-auto flex justify-center">
            <a href="" className="flex gap-3 w-[172px] h-[32px] leading-7">
              <img
                src="../images/shopping-cart.jpg"
                className="w-3 h-3 mt-1 "
                alt=""
              />
              <h3
                className="text-[18px]"
                style={{ color: "#737791", fontWeight: "400" }}
              >
                Order
              </h3>
            </a>
          </div>

          <div className="text-center p-5 mx-auto flex justify-center">
            <a href="" className="flex gap-3 w-[172px] h-[32px] leading-7">
              <img
                src="../images/mdi_shopping-outline.jpg"
                className="w-3 h-3 mt-1 "
                alt=""
              />
              <h3
                className="text-[18px]"
                style={{ color: "#737791", fontWeight: "400" }}
              >
                Products
              </h3>
            </a>
          </div>

          <div className="text-center p-5 mx-auto flex justify-center">
            <a href="" className="flex gap-3 w-[172px] h-[32px] leading-7">
              <img
                 src="../images/Chart_Line.jpg"
                className="w-3 h-3 mt-1 "
                alt=""
              />
              <h3
                className="text-[18px]"
                style={{ color: "#737791", fontWeight: "400" }}
              >
                Sales Report
              </h3>
            </a>
          </div>

          <div className="text-center p-5 mx-auto flex justify-center">
            <a href="" className="flex gap-3 w-[172px] h-[32px] leading-7">
              <img
                src="../images/messages.jpg"
                className="w-3 h-3 mt-1 "
                alt=""
              />
              <h3
                className="text-[18px]"
                style={{ color: "#737791", fontWeight: "400" }}
              >
                Messages
              </h3>
            </a>
          </div>

           <div className="text-center p-5 mx-auto flex justify-center">
            <a href="" className="flex gap-3 w-[172px] h-[32px] leading-7">
              <img
                src="../images/settings.jpg"
                className="w-3 h-3 mt-1 "
                alt=""
              />
              <h3
                className="text-[18px]"
                style={{ color: "#737791", fontWeight: "400" }}
              >
                Settings
              </h3>
            </a>
          </div>

           <div className="text-center p-5 mx-auto flex justify-center">
            <a href="" className="flex gap-3 w-[172px] h-[32px] leading-7">
              <img
                src="../images/signOut.jpg"
                className="w-3 h-3 mt-1 "
                alt=""
              />
              <h3
                className="text-[18px]"
                style={{ color: "#737791", fontWeight: "400" }}
              >
                Sign Out
              </h3>
            </a>
          </div>

        </aside>

        {/* display main content section */}
        <div className="w-[80%]">
          <section className="px-3 flex flex-row gap-3 justify-between bg-yellow-500 w-[100%] mx-[auto] rounded-md">
            {/* section one  starts */}
            <div className="mt-5 w-[70%]">
              <header className="mt-2">
                <h2>Today's Sale</h2>
                <h4>summary of sales</h4>
              </header>
              <div className="flex flex-row gap-2">
                <article className="bg-pink-200 p-2 rounded-md">
                  <img src="../images/icon1.png" className="w-5 h-5" alt="" />
                  <h1 className="mt-3 font-bold">$1k</h1>
                  <h3 className="text-sm font-medium">Total Sales</h3>
                  <p className="text-blue-900 font-semibold text-xs mt-2">
                    +8% from yesterday
                  </p>
                </article>
                <article className="bg-pink-200 p-2 rounded-md">
                  <img src="../images/icon1.png" className="w-5 h-5" alt="" />
                  <h1 className="mt-3 font-bold">$1k</h1>
                  <h3 className="text-sm font-medium">Total Sales</h3>
                  <p className="text-blue-900 font-semibold text-xs mt-2">
                    +8% from yesterday
                  </p>
                </article>
                <article className="bg-pink-200 p-2 rounded-md">
                  <img src="../images/icon1.png" className="w-5 h-5" alt="" />
                  <h1 className="mt-3 font-bold">$1k</h1>
                  <h3 className="text-sm font-medium">Total Sales</h3>
                  <p className="text-blue-900 font-semibold text-xs mt-2">
                    +8% from yesterday
                  </p>
                </article>
                <article className="bg-pink-200 p-2 rounded-md">
                  <img src="../images/icon1.png" className="w-5 h-5" alt="" />
                  <h1 className="mt-3 font-bold">$1k</h1>
                  <h3 className="text-sm font-medium">Total Sales</h3>
                  <p className="text-blue-900 font-semibold text-xs mt-2">
                    +8% from yesterday
                  </p>
                </article>
              </div>
            </div>

            {/* section one ends */}
            <div className="mt-4 bg-blue-300 h-[200px] w-[40%]">
              <img src="../images/VI.png" className="h-[80%] w-[100%] mt-5" />
            </div>
          </section>

          <section className="secSec flex flex-row">
            <img
              src="../images/revenue.png"
              alt=""
              className="w-[30%] h-[30%]"
            />
            <img src="../images/sati.png" alt="" className="w-[30%] h-[30%]" />
            <img
              src="../images/target.png"
              alt=""
              className="w-[30%] h-[30%]"
            />
          </section>

          <section className="flex flex-row">
            <img
              src="../images/TopProducts.jpg"
              alt=""
              className="w-[30%] h-[30%]"
            />
            <img
              src="../images/salesMapping.jpg"
              alt=""
              className="w-[30%] h-[30%]"
            />
            <img
              src="../images/Volume.jpg"
              alt=""
              className="w-[30%] h-[30%]"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
