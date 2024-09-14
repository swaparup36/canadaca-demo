export default function Hero() {
  return (
    <>
      <div className="hero w-full flex justify-center items-center">
        <div className="w-[75%] flex justify-start items-center py-5">
            <div className="w-[50%] bg-[#26374a] flex flex-col p-4 opacity-90">
                <span className="text-4xl text-white py-3">
                    Canada.ca
                </span>
                <span className="bg-red-500 h-[5px] w-[12%]"></span>
                <span className="text-xl text-white py-4">
                    The official website of the Government of Canada
                </span>
            </div>
        </div>
      </div>
    </>
  );
}
