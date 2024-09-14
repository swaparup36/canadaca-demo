import Image from "next/image";

export default function Footer() {
    return (
      <>
        <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col justify-start items-center py-5">
                <div className="w-full footer-main flex justify-center items-center text-white">
                    <div className="w-[75%] flex flex-col justify-center items-start py-4">
                        <h2 className="font-semibold text-xl my-2">Government of Canada</h2>
                        <div className="flex justify-start items-center w-full">
                            <div className="flex text-[0.95rem] flex-col justify-between items-start w-[30%] mx-4 my-2">
                                <span className="my-4 hover:underline cursor-pointer">
                                    All contacts
                                </span>
                                <span className="bg-white h-[4px] w-[15%]"></span>
                                <ul className="flex flex-col justify-between items-start w-full my-4">
                                    <li className="my-2 hover:underline cursor-pointer">Jobs</li>
                                    <li className="my-2 hover:underline cursor-pointer">Immigration and citizenship</li>
                                    <li className="my-2 hover:underline cursor-pointer">Travel and tourism</li>
                                    <li className="my-2 hover:underline cursor-pointer">Business</li>
                                    <li className="my-2 hover:underline cursor-pointer">Benefits</li>
                                    <li className="my-2 hover:underline cursor-pointer">Health</li>
                                </ul>
                            </div>
                            <div className="flex text-[0.95rem] flex-col justify-between items-start w-[30%] mx-4 my-2">
                                <span className="my-6 hover:underline cursor-pointer">
                                    Departments and agencies
                                </span>
                                <ul className="flex flex-col justify-between items-start w-full my-4">
                                    <li className="my-2 hover:underline cursor-pointer">Taxes</li>
                                    <li className="my-2 hover:underline cursor-pointer">Environment and natural resources</li>
                                    <li className="my-2 hover:underline cursor-pointer">National security and defence</li>
                                    <li className="my-2 hover:underline cursor-pointer">Culture, history and sport</li>
                                    <li className="my-2 hover:underline cursor-pointer">Policing, justice and emergencies</li>
                                    <li className="my-2 hover:underline cursor-pointer">Transport and infrastructure</li>
                                </ul>
                            </div>
                            <div className="flex text-[0.95rem] flex-col justify-between items-start w-[30%] mx-4 my-2">
                                <span className="my-6 hover:underline cursor-pointer">
                                    About government
                                </span>
                                <ul className="flex flex-col justify-between items-start w-full my-4">
                                    <li className="my-2 hover:underline cursor-pointer">Canada and the world</li>
                                    <li className="my-2 hover:underline cursor-pointer">Money and finance</li>
                                    <li className="my-2 hover:underline cursor-pointer">Science and innovation</li>
                                    <li className="my-2 hover:underline cursor-pointer">Indigenous peoples</li>
                                    <li className="my-2 hover:underline cursor-pointer">Veterans and military</li>
                                    <li className="my-2 hover:underline cursor-pointer">Youth</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[75%] flex justify-between items-center py-4">
                    <ul className="flex text-sm justify-between items-center w-[50%]">
                        <li className=" hover:text-blue-500 cursor-pointer">Social media</li>
                        <li className="list-disc hover:text-blue-500 cursor-pointer">Mobile applications</li>
                        <li className="list-disc hover:text-blue-500 cursor-pointer">About Canada.ca</li>
                        <li className="list-disc hover:text-blue-500 cursor-pointer">Terms and conditions</li>
                        <li className="list-disc hover:text-blue-500 cursor-pointer">Privacy</li>
                    </ul>
                    <div>
                        <Image src="/images/canada-footer.svg" alt="canada-footer" width={150} height={150} />
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
  