import Link from "next/link";

export default function MostRequested() {
    return (
      <>
        <div className="w-full flex justify-center items-center bg-[#f5f5f5]">
          <div className="md:w-[75%] w-[90%] flex flex-col py-6">
            <div className="flex justify-start items-center font-semibold text-2xl">
                Most requested
            </div>
            <ul className="flex md:flex-row flex-col flex-wrap my-2">
                <Link href={'/signup'} className="underline font-semibold text-[#26374a] mb-2 py-2 md:w-[25%] w-full">Sign in to an account</Link>
                <Link href={'https://www.canada.ca/en/services/benefits/ei.html'} className="underline font-semibold text-[#26374a] mb-2 py-2 md:w-[25%] w-full">Employment Insurance and leave</Link>
                <Link href={'https://www.canada.ca/en/services/benefits/publicpensions.html'} className="underline font-semibold text-[#26374a] mb-2 py-2 md:w-[25%] w-full">Public pensions (CPP and OAS)</Link>
                <Link href={'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html'} className="underline font-semibold text-[#26374a] mb-2 py-2 md:w-[25%] w-full">Get a passport</Link>
                <Link href={'https://www.canada.ca/en/services/jobs/opportunities.html'} className="underline font-semibold text-[#26374a] mb-2 py-2 md:w-[25%] w-full">Find a job</Link>
                <Link href={'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html'} className="underline font-semibold text-[#26374a] mb-2 py-2 md:w-[25%] w-full">Visit Canada</Link>
                <Link href={'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit.html'} className="underline font-semibold text-[#26374a] mb-2 py-2 md:w-[25%] w-full">Get a work permit</Link>
            </ul>
          </div>
        </div>
      </>
    );
  }
  