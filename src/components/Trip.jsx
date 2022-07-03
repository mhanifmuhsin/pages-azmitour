export default function Trip() {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="grid grid-cols-12 px-18 gap-5">
        <div className="col-span-12">
          <p className="text-gray-800 text-3xl font-semibold">
            Inspiration for your next trip
          </p>
        </div>

        <a className="col-span-3 bg-rose-700 rounded-xl h-52 md:h-80" href="">
          <img
            src="https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=320"
            className="rounded-t-xl max-h-44"
          />

          <p className="text-xl md:text-3xl text-gray-50 pt-5 pl-3"> Bandung </p>

          <p className="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
            {" "}
            117 kilometers away{" "}
          </p>
        </a>

        <a className="col-span-3 bg-red-500 rounded-xl h-52 md:h-80" href="">
          <img
            src="https://a0.muscache.com/im/pictures/db8167f7-5c57-4684-80ae-4350c73e45ef.jpg?im_w=320"
            className="rounded-t-xl max-h-44"
          />

          <p className="text-xl md:text-3xl text-gray-50 pt-5 pl-3"> Lembang </p>

          <p className="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
            {" "}
            109 kilometers away{" "}
          </p>
        </a>

        <a className="col-span-3 bg-pink-700 rounded-xl h-52 md:h-80" href="">
          <img
            src="https://a0.muscache.com/im/pictures/ffde0c4b-1889-4d11-bb00-41411d34fdfc.jpg?im_w=320"
            className="rounded-t-xl max-h-44"
          />

          <p className="text-xl md:text-3xl text-gray-50 pt-5 pl-3"> Semarang </p>

          <p className="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
            {" "}
            406 kilometers away{" "}
          </p>
        </a>

        <a className="col-span-3 bg-rose-600 rounded-xl h-52 md:h-80" href="">
          <img
            src="https://a0.muscache.com/im/pictures/03bb6d0a-5ccb-47e1-83fc-b7ad87e7f8c3.jpg?im_w=320"
            className="rounded-t-xl max-h-44"
          />

          <p className="text-xl md:text-3xl text-gray-50 pt-5 pl-3"> Serang </p>

          <p className="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
            {" "}
            78 kilometers away{" "}
          </p>
        </a>
      </div>
    </div>
  );
}
