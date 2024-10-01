import Link from "next/link";

export default function Options() {
    return (
      <>
        <div className="w-full flex justify-center items-center">
          <div className="md:w-[75%] w-[90%] flex flex-col md:flex-row items-center justify-between flex-wrap py-6">
            <div className="flex flex-col justify-center items-start md:w-[30%] w-full my-4">
                <Link href={'https://www.canada.ca/en/services/jobs.html'} className="underline text-xl font-semibold my-1 text-[#284162] cursor-pointer hover:text-blue-500">Jobs</Link>
                <p className="text-[1.1rem]">Find a job, training, hiring programs, work permits, Social Insurance Number (SIN)</p>
            </div>
            <div className="flex flex-col justify-center items-start md:w-[30%] w-full my-4">
                <Link href={'https://www.canada.ca/en/services/immigration-citizenship.html'} className="underline text-xl font-semibold my-1 text-[#284162] cursor-pointer hover:text-blue-500">Immigration and citizenship</Link>
                <p className="text-[1.1rem]">Visit, work, study, immigrate, refugees, permanent residents, apply, check status</p>
            </div>
            <div className="flex flex-col justify-center items-start md:w-[30%] w-full my-4">
                <Link href={'https://travel.gc.ca/'} className="underline text-xl font-semibold my-1 text-[#284162] cursor-pointer hover:text-blue-500">Travel and tourism</Link>
                <p className="text-[1.1rem]">In Canada or abroad, advice, advisories, passports, visit Canada, events, attractions</p>
            </div>
            <div className="flex flex-col justify-center items-start md:w-[30%] w-full my-4">
                <Link href={'https://www.canada.ca/en/services/business.html'} className="underline text-xl font-semibold my-1 text-[#284162] cursor-pointer hover:text-blue-500">Business and industry</Link>
                <p className="text-[1.1rem]">Starting a business, permits, copyright, business support, selling to government</p>
            </div>
            <div className="flex flex-col justify-center items-start md:w-[30%] w-full my-4">
                <Link href={'https://www.canada.ca/en/services/benefits.html'} className="underline text-xl font-semibold my-1 text-[#284162] cursor-pointer hover:text-blue-500">Benefits</Link>
                <p className="text-[1.1rem]">EI, family and sickness leave, child benefit, pensions, housing, student aid, disabilities, after a death</p>
            </div>
            <div className="flex flex-col justify-center items-start md:w-[30%] w-full my-4">
                <Link href={'https://www.canada.ca/en/services/health.html'} className="underline text-xl font-semibold my-1 text-[#284162] cursor-pointer hover:text-blue-500">Health</Link>
                <p className="text-[1.1rem]">Food, nutrition, diseases, vaccines, drugs, product safety and recalls</p>
            </div>
            <div className="flex flex-col justify-center items-start md:w-[30%] w-full my-4">
                <Link href={'https://www.canada.ca/en/services/taxes.html'} className="underline text-xl font-semibold my-1 text-[#284162] cursor-pointer hover:text-blue-500">Taxes</Link>
                <p className="text-[1.1rem]">Income tax, payroll, GST/HST, contribution limits, tax credits, charities</p>
            </div>
            <div className="flex flex-col justify-center items-start md:w-[30%] w-full my-4">
                <Link href={'https://www.canada.ca/en/services/environment.html'} className="underline text-xl font-semibold my-1 text-[#284162] cursor-pointer hover:text-blue-500">Environment and natural resources</Link>
                <p className="text-[1.1rem]">Weather, climate, agriculture, wildlife, pollution, conservation, fisheries</p>
            </div>
            <div className="flex flex-col justify-center items-start md:w-[30%] w-full my-4">
                <Link href={'https://www.canada.ca/en/services/defence.html'} className="underline text-xl font-semibold my-1 text-[#284162] cursor-pointer hover:text-blue-500">National security and defence</Link>
                <p className="text-[1.1rem]">Military, transportation and cyber security, securing the border, counter-terrorism</p>
            </div>
            <div className="flex flex-col justify-center items-start md:w-[30%] w-full my-4">
                <Link href={'https://www.canada.ca/en/services/culture.html'} className="underline text-xl font-semibold my-1 text-[#284162] cursor-pointer hover:text-blue-500">Culture, history and sport</Link>
                <p className="text-[1.1rem]">Arts, media, heritage, official languages, national identity and funding</p>
            </div>
            <div className="flex flex-col justify-center items-start md:w-[30%] w-full my-4">
                <Link href={'https://www.canada.ca/en/services/policing.html'} className="underline text-xl font-semibold my-1 text-[#284162] cursor-pointer hover:text-blue-500">Policing, justice and emergencies</Link>
                <p className="text-[1.1rem]">Safety, justice system, prepare for emergencies, services for victims of crime</p>
            </div>
            <div className="flex flex-col justify-center items-start md:w-[30%] w-full my-4">
                <Link href={'https://www.canada.ca/en/services/transport.html'} className="underline text-xl font-semibold my-1 text-[#284162] cursor-pointer hover:text-blue-500">Transport and infrastructure</Link>
                <p className="text-[1.1rem]">Aviation, marine, road and rail, car seat and vehicle recalls</p>
            </div>
            <div className="flex flex-col justify-center items-start md:w-[30%] w-full my-4">
                <Link href={'https://www.international.gc.ca/world-monde/index.aspx?lang=eng'} className="underline text-xl font-semibold my-1 text-[#284162] cursor-pointer hover:text-blue-500">Canada and the world</Link>
                <p className="text-[1.1rem]">Foreign policy, trade agreements, development work, global issues</p>
            </div>
            <div className="flex flex-col justify-center items-start md:w-[30%] w-full my-4">
                <Link href={'https://www.canada.ca/en/services/finance.html'} className="underline text-xl font-semibold my-1 text-[#284162] cursor-pointer hover:text-blue-500">Money and finances</Link>
                <p className="text-[1.1rem]">Personal finance, credit reports, fraud protection, paying for education, housing</p>
            </div>
            <div className="flex flex-col justify-center items-start md:w-[30%] w-full my-4">
                <Link href={'https://www.canada.ca/en/services/science.html'} className="underline text-xl font-semibold my-1 text-[#284162] cursor-pointer hover:text-blue-500">Science and innovation</Link>
                <p className="text-[1.1rem]">Scientific research on health, environment and space, grants and funding</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  