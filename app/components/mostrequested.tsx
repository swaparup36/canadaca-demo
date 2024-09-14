import Link from "next/link";

export default function MostRequested() {
    return (
      <>
        <div className="w-full flex justify-center items-center bg-[#f5f5f5]">
          <div className="w-[75%] flex flex-col py-6">
            <div className="flex justify-start items-center font-semibold text-2xl">
                Most requested
            </div>
            <ul className="flex flex-wrap my-2">
                <Link href={'/getstarted-plans'} className="underline font-semibold text-[#26374a] mb-2 py-2 w-[25%]">Sign in to an account</Link>
                <Link href={'https://www.canada.ca/en/services/benefits/ei.html'} className="underline font-semibold text-[#26374a] mb-2 py-2 w-[25%]">Employment Insurance and leave</Link>
                <Link href={'https://www.canada.ca/en/services/benefits/publicpensions.html'} className="underline font-semibold text-[#26374a] mb-2 py-2 w-[25%]">Public pensions (CPP and OAS)</Link>
                <Link href={'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html'} className="underline font-semibold text-[#26374a] mb-2 py-2 w-[25%]">Get a passport</Link>
                <Link href={'https://www.canada.ca/en/services/jobs/opportunities.html'} className="underline font-semibold text-[#26374a] mb-2 py-2 w-[25%]">Find a job</Link>
                <Link href={'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html'} className="underline font-semibold text-[#26374a] mb-2 py-2 w-[25%]">Visit Canada</Link>
                <Link href={'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit.html'} className="underline font-semibold text-[#26374a] mb-2 py-2 w-[25%]">Get a work permit</Link>
            </ul>
          </div>
        </div>
      </>
    );
  }
  