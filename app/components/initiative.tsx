import Image from "next/image";

export default function Initiative() {
    return (
      <>
        <div className="w-full flex justify-center items-center">
          <div className="w-[75%] flex flex-col items-start justify-center py-10">
            <div className="flex justify-start items-center">
                <h2 className="text-2xl font-semibold my-4">Government initiatives</h2>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex justify-between items-center w-full">
                    <div className="initiative-card w-[48%] cursor-pointer bg-[#f5f5f5] my-2 flex flex-col justify-start items-start h-[50svh] p-2">
                        <div className="">
                            <Image src="/images/initiative-1.jpg" alt="initiative-1" width={700} height={700} />
                        </div>
                        <div>
                            <h3 className="underline text-xl my-3 font-semibold">Wildfire Response</h3>
                        </div>
                        <p className="pb-5 my-2 text-lg">
                            Government of Canada emergency response, support, and recovery measures
                        </p>
                    </div>
                    <div className="initiative-card w-[48%] cursor-pointer bg-[#f5f5f5] my-2 flex flex-col justify-start items-start h-[50svh] p-2">
                        <div className="">
                            <Image src="/images/initiative-2.jpg" alt="initiative-1" width={700} height={700} />
                        </div>
                        <div>
                            <h3 className="underline text-xl my-3 font-semibold">Canadian Dental Care Plan</h3>
                        </div>
                        <p className="pb-5 my-2 text-lg">
                            Are you eligible? Applications are now expended
                        </p>
                    </div>
                </div>
                <div className="flex justify-between w-full">
                    <div className="initiative-card w-[48%] cursor-pointer bg-[#f5f5f5] my-2 flex flex-col justify-start items-start h-[50svh] p-2">
                        <div className="">
                            <Image src="/images/initiative-3.jpg" alt="initiative-1" width={700} height={700} />
                        </div>
                        <div>
                            <h3 className="underline text-xl my-3 font-semibold">Canada and Ukraine</h3>
                        </div>
                        <p className="pb-5 my-2 text-lg">
                            Learn about Canada’s response to the Russian invasion of Ukraine
                        </p>
                    </div>
                    <div className="initiative-card w-[48%] cursor-pointer bg-[#f5f5f5] my-2 flex flex-col justify-start items-start h-[50svh] p-2">
                        <div className="">
                            <Image src="/images/initiative-4.jpg" alt="initiative-1" width={700} height={700} />
                        </div>
                        <div>
                            <h3 className="underline text-xl my-3 font-semibold">Canada’s response to the crisis in Israel, the West Bank and the Gaza Strip</h3>
                        </div>
                        <p className="pb-5 my-2 text-lg">
                            Learn more about Canada’s response to the crisis in Israel, the West Bank and the Gaza Strip
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  