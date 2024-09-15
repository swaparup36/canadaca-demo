import Image from "next/image";
import Link from "next/link";

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
                                    <Link href={'https://www.canada.ca/en/contact.html'}>All contacts</Link>
                                </span>
                                <span className="bg-white h-[4px] w-[15%]"></span>
                                <ul className="flex flex-col justify-between items-start w-full my-4">
                                    <Link href={'https://www.canada.ca/en/services/jobs.html'} className="my-2 hover:underline cursor-pointer">Jobs</Link>
                                    <Link href={'https://www.canada.ca/en/services/immigration-citizenship.html'} className="my-2 hover:underline cursor-pointer">Immigration and citizenship</Link>
                                    <Link href={'https://travel.gc.ca/'} className="my-2 hover:underline cursor-pointer">Travel and tourism</Link>
                                    <Link href={'https://www.canada.ca/en/services/business.html'} className="my-2 hover:underline cursor-pointer">Business</Link>
                                    <Link href={'https://www.canada.ca/en/services/benefits.html'} className="my-2 hover:underline cursor-pointer">Benefits</Link>
                                    <Link href={'https://www.canada.ca/en/services/health.html'} className="my-2 hover:underline cursor-pointer">Health</Link>
                                </ul>
                            </div>
                            <div className="flex text-[0.95rem] flex-col justify-between items-start w-[30%] mx-4 my-2">
                                <span className="my-6 hover:underline cursor-pointer">
                                    <Link href={'https://www.canada.ca/en/government/dept.html'}>Departments and agencies</Link>
                                </span>
                                <ul className="flex flex-col justify-between items-start w-full my-4">
                                    <Link href={'https://www.canada.ca/en/services/taxes.html'} className="my-2 hover:underline cursor-pointer">Taxes</Link>
                                    <Link href={'https://www.canada.ca/en/services/environment.html'} className="my-2 hover:underline cursor-pointer">Environment and natural resources</Link>
                                    <Link href={'https://www.canada.ca/en/services/defence.html'} className="my-2 hover:underline cursor-pointer">National security and defence</Link>
                                    <Link href={'https://www.canada.ca/en/services/culture.html'} className="my-2 hover:underline cursor-pointer">Culture, history and sport</Link>
                                    <Link href={'https://www.canada.ca/en/services/policing.html'} className="my-2 hover:underline cursor-pointer">Policing, justice and emergencies</Link>
                                    <Link href={'https://www.canada.ca/en/services/transport.html'} className="my-2 hover:underline cursor-pointer">Transport and infrastructure</Link>
                                </ul>
                            </div>
                            <div className="flex text-[0.95rem] flex-col justify-between items-start w-[30%] mx-4 my-2">
                                <span className="my-6 hover:underline cursor-pointer">
                                    <Link href={'https://www.canada.ca/en/government/system.html'}>About government</Link>
                                </span>
                                <ul className="flex flex-col justify-between items-start w-full my-4">
                                    <Link href={'https://www.international.gc.ca/world-monde/index.aspx?lang=eng'} className="my-2 hover:underline cursor-pointer">Canada and the world</Link>
                                    <Link href={'https://www.canada.ca/en/services/finance.html'} className="my-2 hover:underline cursor-pointer">Money and finance</Link>
                                    <Link href={'https://www.canada.ca/en/services/science.html'} className="my-2 hover:underline cursor-pointer">Science and innovation</Link>
                                    <Link href={'https://www.canada.ca/en/services/indigenous-peoples.html'} className="my-2 hover:underline cursor-pointer">Indigenous peoples</Link>
                                    <Link href={'https://www.canada.ca/en/services/veterans-military.html'} className="my-2 hover:underline cursor-pointer">Veterans and military</Link>
                                    <Link href={'https://www.canada.ca/en/services/youth.html'} className="my-2 hover:underline cursor-pointer">Youth</Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[75%] flex justify-between items-center py-4">
                    <ul className="flex text-sm justify-between items-center w-[50%]">
                        <Link href={'https://www.canada.ca/en/social.html'} className=" hover:text-blue-500 cursor-pointer">Social media</Link>
                        <Link href={'https://www.canada.ca/en/mobile.html'} className="list-disc hover:text-blue-500 cursor-pointer">Mobile applications</Link>
                        <Link href={'https://design.canada.ca/about/'} className="list-disc hover:text-blue-500 cursor-pointer">About Canada.ca</Link>
                        <Link href={'/terms-and-conditions'} className="list-disc hover:text-blue-500 cursor-pointer">Terms and conditions</Link>
                        <Link href={'https://www.canada.ca/en/transparency/privacy.html'} className="list-disc hover:text-blue-500 cursor-pointer">Privacy</Link>
                    </ul>
                    <div className="bg-white dark:bg-transparent">
                        <Image src="/images/canada-footer.svg" alt="canada-footer" width={150} height={150} />
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
  