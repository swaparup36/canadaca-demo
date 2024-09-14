export default function MostRequested() {
    return (
      <>
        <div className="w-full flex justify-center items-center bg-[#f5f5f5]">
          <div className="w-[75%] flex flex-col py-6">
            <div className="flex justify-start items-center font-semibold text-2xl">
                Most requested
            </div>
            <ul className="flex flex-wrap my-2">
                <li className="underline font-semibold text-[#26374a] mb-2 py-2 w-[25%]">Sign in to an account</li>
                <li className="underline font-semibold text-[#26374a] mb-2 py-2 w-[25%]">Employment Insurance and leave</li>
                <li className="underline font-semibold text-[#26374a] mb-2 py-2 w-[25%]">Public pensions (CPP and OAS)</li>
                <li className="underline font-semibold text-[#26374a] mb-2 py-2 w-[25%]">Get a passport</li>
                <li className="underline font-semibold text-[#26374a] mb-2 py-2 w-[25%]">Find a job</li>
                <li className="underline font-semibold text-[#26374a] mb-2 py-2 w-[25%]">Visit Canada</li>
                <li className="underline font-semibold text-[#26374a] mb-2 py-2 w-[25%]">Get a work permit</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  