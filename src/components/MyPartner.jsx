import { RiInstagramLine, RiFacebookCircleLine } from "react-icons/ri";

export default function MyPartners() {
  return (
    <section className="bg-white ">
      <div className="py-2 mx-automax-w-screen-xl px-4 broder border-2 w-full">
        <h2 className="mb-2 mt-28 lg:mt-0 lg:py-2  text-2xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">
          Temukan Kita di Sosial Media
        </h2>
        <div className="flex justify-center text-2xl text-gray-500 dark:text-gray-400 space-x-6">
          <a href="https://instagram.com/azmitourbdg?igshid=YmMyMTA2M2Y=" target="_blank" className="flex justify-center items-center">
            <RiInstagramLine size={60}/>azmitourbdg
          </a>
          <a href="https://www.facebook.com/profile.php?id=100078904869987" target="_blank" className="flex justify-center items-center">
           <RiFacebookCircleLine size={60}/>AzmiTour
          </a>
        </div>
      </div>
    </section>
  );
}
