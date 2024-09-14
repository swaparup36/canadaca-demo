import Image from "next/image";

export default function YourGovt() {
    return (
      <>
        <div className="w-full flex justify-center items-center bg-[#f5f5f5] py-6">
          <div className="w-[75%] flex justify-between items-center">
            <div className="flex justify-center flex-col items-start w-[50%]">
                <h2 className="text-2xl font-bold my-4">Your government</h2>
                <div className="flex justify-between items-center w-full my-2">
                    <ul className="flex flex-col justify-center items-start">
                        <li className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">All contacts</li>
                        <li className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">Prime Minister</li>
                        <li className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">About government</li>
                        <li className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">Working for the government</li>
                    </ul>
                    <ul className="flex flex-col justify-center items-start">
                        <li className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">News</li>
                        <li className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">Departments and agencies</li>
                        <li className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">Open government and data</li>
                        <li className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">Treaties, laws and regulations</li>
                    </ul>
                </div>
            </div>
            <div>
                <Image
                    src="/images/your-govt-tower.jpg"
                    alt="canada-govt-logo"
                    width={450}
                    height={150}
                />
                {/* <Image src="" alt="your-govt-tower" width={150} height={150} /> */}
            </div>
          </div>
        </div>
      </>
    );
  }
  