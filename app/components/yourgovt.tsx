import Image from "next/image";
import Link from "next/link";

export default function YourGovt() {
    return (
      <>
        <div className="w-full flex justify-center items-center bg-[#f5f5f5] py-6">
          <div className="md:w-[75%] w-[90%] flex justify-between items-center">
            <div className="flex justify-center flex-col items-start md:w-[50%] w-full">
                <h2 className="text-2xl font-bold my-4">Your government</h2>
                <div className="flex flex-col md:flex-row justify-between items-center w-full my-2">
                    <ul className="flex flex-col justify-start md:justify-center items-start w-full">
                        <Link href={'https://www.canada.ca/en/contact.html'} className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">All contacts</Link>
                        <Link href={'https://www.pm.gc.ca/en'} className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">Prime Minister</Link>
                        <Link href={'https://www.canada.ca/en/government/system.html'} className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">About government</Link>
                        <Link href={'https://www.canada.ca/en/government/publicservice.html'} className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">Working for the government</Link>
                    </ul>
                    <ul className="flex flex-col justify-start md:justify-center items-start w-full">
                        <Link href={'https://www.canada.ca/en/news.html'} className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">News</Link>
                        <Link href={'https://www.canada.ca/en/government/dept.html'} className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">Departments and agencies</Link>
                        <Link href={'https://open.canada.ca/en'} className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">Open government and data</Link>
                        <Link href={'https://www.canada.ca/en/government/system/laws.html'} className="underline font-semibold text-lg my-2 text-[#284162] cursor-pointer hover:text-blue-500">Treaties, laws and regulations</Link>
                    </ul>
                </div>
            </div>
            <div>
                <Image
                    src="/images/your-govt-tower.jpg"
                    alt="canada-govt-logo"
                    className="hidden md:block"
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
  