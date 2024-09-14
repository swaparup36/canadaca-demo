import Link from "next/link";

export default function Focuson() {
    return (
      <>
        <div className="w-full flex flex-col justify-center items-center my-4">
            <div className="w-[75%] flex items-center justify-start flex-wrap">
                <h2 className="text-2xl font-bold">Focus on</h2>
            </div>
            <div className="w-[75%] flex items-center justify-between flex-wrap py-4">
                <div className="flex flex-col justify-center items-start w-[30%] my-4">
                    <Link href={'https://www.canada.ca/en/services/indigenous-peoples.html'} className="underline text-xl font-semibold my-1">Indigenous peoples</Link>
                    <p className="text-[1.1rem]">Programs and services for First Nations, Inuit and Métis</p>
                </div>
                <div className="flex flex-col justify-center items-start w-[30%] my-4">
                    <Link href={'https://www.canada.ca/en/services/veterans-military.html'} className="underline text-xl font-semibold my-1">Veterans and military</Link>
                    <p className="text-[1.1rem]">Services for current and former military, RCMP and their families</p>
                </div>
                <div className="flex flex-col justify-center items-start w-[30%] my-4">
                    <Link href={'https://www.canada.ca/en/services/youth.html'} className="underline text-xl font-semibold my-1">Youth</Link>
                    <p className="text-[1.1rem]">Programs and services for teenagers and young adults</p>
                </div>
            </div>
        </div>
      </>
    );
  }
  