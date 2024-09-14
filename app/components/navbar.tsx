"use client";

import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState("jobs");

  const router = useRouter();

  const megaMenuOptions = {
    jobs: [
      "Find a job",
      "Training",
      "Hiring and managing employees",
      "Starting a business",
      "Workplace standards",
      "Pensions and retirement",
      "Employment Insurance benefits and leave",
    ],
    immigration_citizenship: [
      "My application",
      "Visit",
      "Immigrate",
      "Work",
      "Study",
      "Citizenship",
      "New immigrants",
      "Canadians",
      "Refugees and asylum",
      "Enforcement and violations",
    ],
    travel_tourism: [
      "Travel advice and advisories",
      "COVID-19: Travel, testing and borders",
      "Visit Canada",
      "Travel outside Canada",
      "Air travel",
      "Return to Canada",
      "Canadian passports and travel documents",
      "Canadian attractions, events and experiences",
      "Assistance outside Canada",
      "Stay connected",
    ],
    business_industry: [
      "Starting a business",
      "Business grants and financing",
      "Business taxes",
      "Federal corporations",
      "Hiring and managing employees",
      "International trade and investment",
      "Permits, licences and regulations",
      "Doing business with government",
      "R&D and innovation",
      "Research and business intelligence",
      "Intellectual property and copyright",
      "Maintaining your business",
      "Protecting your business",
      "Insolvency for business",
    ],
    benifits: [
      "Employment Insurance benefits and leave",
      "Dental coverage",
      "Family and caregiving benefits",
      "Public pensions",
      "Grants and funding opportunities",
      "Student aid and education planning",
      "Housing benefits",
      "Disability benefits",
      "Benefits by audience",
      "Benefits payment dates",
      "Benefits finder",
      "Notify the government of a death",
    ],
    health: [
      "Food and nutrition",
      "Diseases and conditions",
      "Vaccines and immunization",
      "Drug and health products",
      "Product safety",
      "Health risks and safety",
      "Healthy living",
      "Indigenous health",
      "Health system and services",
      "Science, research and data",
    ],
    taxes: [
      "Income tax",
      "GST/HST",
      "Payroll",
      "Business number",
      "Savings and pension plans",
      "Tax credits and benefits for individuals",
      "Excise taxes, duties, and levies",
      "Charities and giving",
    ],
    env_natural_resources: [
      "Weather, climate and hazards",
      "Energy",
      "Natural resources",
      "Agriculture",
      "Fisheries",
      "Wildlife, plants and species",
      "Pollution and waste management",
      "Environmental conservation and protection",
    ],
    national_sec_defence: [
      "National security",
      "Canadian Armed Forces",
      "Defence equipment purchases and upgrades",
      "Transportation security",
      "Securing the border",
      "Cyber security",
      "Jobs in national security and defence",
      "Services and benefits for the military",
    ],
    culture_history_sports: [
      "Funding - Culture, history and sport",
      "Events, celebrations and commemorations",
      "Cultural landmarks and attractions",
      "Canadian identity and society",
      "Sport",
      "History and heritage",
      "Arts and media",
      "Cultural youth programs",
      "Cultural trade and investment",
    ],
    policing_justice_emergencies: [
      "Policing",
      "Justice",
      "Emergencies",
      "Corrections",
      "Parole, record suspension, expungement and clemency",
      "Victims of crime",
    ],
    transport_infrastructure: [
      "Aviation",
      "Marine transportation",
      "Road transportation",
      "Rail transportation",
      "Dangerous goods",
      "Infrastructure",
    ],
    canada_and_world: [
      "International offices and emergency contacts",
      "Study, work and travel worldwide",
      "Information by countries and territories",
      "Stories",
      "International relations",
      "Global issues and international assistance",
      "Funding for international initiatives",
      "International trade and investment",
    ],
    money_and_finance: [
      "Managing your money",
      "Debt and borrowing",
      "Savings and investments",
      "Education funding",
      "Pensions and retirement",
      "Protection from frauds and scams",
      "Financial tools and calculators",
      "Financial literacy programs",
      "Consumer affairs",
      "Insolvency",
      "Taxes",
      "Government finances",
      "Business grants and financing",
      "Financial and money services regulation",
    ],
    science_innovation: [
      "Research funding and awards",
      "Science subjects",
      "Open data, statistics and archives",
      "Research institutes and facilities",
      "R&D and innovation",
      "Intellectual property and copyright",
      "Directory of scientists and research professionals",
      "Science education resources",
    ],
  };

  const megaMenuMostReq = {
    jobs: [
      "View your records of employment",
      "Submit a record of employment - employers",
      "Apply for a Social Insurance Number (SIN)",
      "Hire a temporary foreign worker",
      "Immigrate as a skilled worker",
    ],
    immigration_citizenship: [
      "Sign in to your IRCC account",
      "Check your application status",
      "Check application processing times",
      "Find an application form",
      "Pay your fees",
      "Find out if you need an eTA or a visa to visit Canada",
      "Have questions? Find answers in the Help Centre",
    ],
    travel_tourism: [
      "View your records of employment",
      "Submit a record of employment - employers",
      "Apply for a Social Insurance Number (SIN)",
      "Hire a temporary foreign worker",
      "Immigrate as a skilled worker",
    ],
    business_industry: [
      "Find a corporation",
      "Report your imported goods",
      "Search for trademarks",
      "Review custom tariffs for importing goods",
      "Find a patent",
      "Import and export from Canada",
      "Name a business",
      "Make changes to your corporation (Online Filing Centre)",
    ],
    benifits: [
      "View your records of employment",
      "Submit a record of employment - employers",
      "Apply for a Social Insurance Number (SIN)",
      "Hire a temporary foreign worker",
      "Immigrate as a skilled worker",
    ],
    health: [
      "Canada's food guide",
      "Recalls and safety alerts",
      "Mental health support: Get help",
      "Measles",
    ],
    taxes: [
      "My Account",
      "My Business Account",
      "Represent a Client",
      "File a GST/HST return (NETFILE)",
      "Make a payment to the Canada Revenue Agency",
      "Find the next benefit payment date",
    ],
    env_natural_resources: [
      "Local weather forecast",
      "Fuel-efficient vehicles",
      "Home energy efficiency",
      "Species at risk",
      "Prepare for severe weather",
    ],
    national_sec_defence: [
      "Jobs in the Canadian Armed Forces",
      "Military ranks",
      "Defence equipment",
      "Current list of terrorist entities",
      "Join the Cadet Program",
      "Canada's Defence policy",
    ],
    culture_history_sports: [
      "Visit the Canadian Virtual War Memorial",
      "Anthems and symbols of Canada",
      "Find a CRTC decision",
      "Research your family history",
      "Search census records",
      "Landmarks and attractions in Canada's capital",
    ],
    policing_justice_emergencies: [
      "Apply/Renew a firearms licence",
      "Get a criminal records check",
      "Apply for a criminal record suspension",
      "What to do during an emergency",
      "Know the law on impaired driving",
      "Help solve a crime",
    ],
    transport_infrastructure: [
      "Zero-emission vehicles",
      "Drone safety",
      "What you can't bring on an airplane",
      "Register your vessel",
      "Child car seat safety",
      "Transporting dangerous goods - Regulations",
      "Canadian Aviation Regulations",
    ],
    canada_and_world: [
      "Find a Canadian scholarship as an international student",
      "International treaties signed by Canada",
      "Find international study or research opportunities in Canada",
      "Contact an embassy or consulate",
      "Contact a foreign representative in Canada",
      "Authenticate a document",
    ],
    money_and_finance: [
      "Find a bankruptcy or insolvency record",
      "Student loans",
      "Set up or change direct deposit",
      "Mortgages",
      "Credit report and scores",
      "Make a budget",
      "Rates and contribution limits",
    ],
    science_innovation: [
      "National building codes",
      "Official times across Canada",
      "Check sunrise and sunset times",
      "Grants for technological innovation (IRAP)",
      "Federal Science Libraries Network",
      "Live view of northern lights cam",
    ],
  };

  const toggleMegaMenu = () => {
    if (isMegaMenuOpen) {
      setIsMegaMenuOpen(false);
    } else {
      setIsMegaMenuOpen(true);
    }
  };

  const changeOption = (opt: string) => {
    setCurrentOption(opt);
  };
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center border-b-2 border-gray-200 pb-4">
        <div className="w-[75%] flex justify-end items-center py-2">
          <span className="underline cursor-pointer hover:text-blue-600">
            Français
          </span>
        </div>
        <div className="w-[75%] flex justify-between items-center py-2">
          <div className="flex justify-start items-center">
            <Image
              src="./images/govt-canada.svg"
              alt="canada-govt-logo"
              width={350}
              height={350}
            />
          </div>
          <div className="flex justify-end items-center w-[50%]">
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-gray-300 px-2 py-1 w-[60%]"
            />
            <button className="bg-[#26374a] hover:bg-[#444] text-white p-2 font-semibold">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center border-b-2 border-gray-200">
        <div className="flex w-[75%] justify-between items-center">
          <span
            className="flex justify-start items-center cursor-pointer text-lg hover:bg-[#26374a] hover:text-white py-3 px-4"
            onClick={toggleMegaMenu}
          >
            MENU
            <ChevronDown />
          </span>
          <button onClick={()=>{router.push('/getstarted-plans')}} className="bg-[#26374a] hover:bg-[#444] text-white text-sm px-4 py-3">
            Sign in
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      {isMegaMenuOpen && (
        <div className="w-full flex flex-col justify-center items-center border-b-2 border-gray-200">
          <div className="mege-menu absolute w-[75%] flex justify-between items-stretch top-40 mt-1 z-50">
            <div className="flex flex-col w-[30%]">
              <div
                className="bg-[#444] py-3 cursor-pointer w-full text-white text-lg border-2 border-[#444] flex justify-start items-center px-5 hover:text-black hover:bg-white hover:border-[#555]"
                onMouseEnter={() => changeOption("jobs")}
              >
                Jobs and the workplace
              </div>
              <div
                className="bg-[#444] py-3 cursor-pointer w-full text-white text-lg border-2 border-[#444] flex justify-start items-center px-5 hover:text-black hover:bg-white hover:border-[#555]"
                onMouseEnter={() => changeOption("imigration-citizenship")}
              >
                Immigration and Citizenship
              </div>
              <div
                className="bg-[#444] py-3 cursor-pointer w-full text-white text-lg border-2 border-[#444] flex justify-start items-center px-5 hover:text-black hover:bg-white hover:border-[#555]"
                onMouseEnter={() => changeOption("travel-tourism")}
              >
                Travel and Tourism
              </div>
              <div
                className="bg-[#444] py-3 cursor-pointer w-full text-white text-lg border-2 border-[#444] flex justify-start items-center px-5 hover:text-black hover:bg-white hover:border-[#555]"
                onMouseEnter={() => changeOption("business-industry")}
              >
                Business and Industry
              </div>
              <div
                className="bg-[#444] py-3 cursor-pointer w-full text-white text-lg border-2 border-[#444] flex justify-start items-center px-5 hover:text-black hover:bg-white hover:border-[#555]"
                onMouseEnter={() => changeOption("benifits")}
              >
                Benifits
              </div>
              <div
                className="bg-[#444] py-3 cursor-pointer w-full text-white text-lg border-2 border-[#444] flex justify-start items-center px-5 hover:text-black hover:bg-white hover:border-[#555]"
                onMouseEnter={() => changeOption("health")}
              >
                Health
              </div>
              <div
                className="bg-[#444] py-3 cursor-pointer w-full text-white text-lg border-2 border-[#444] flex justify-start items-center px-5 hover:text-black hover:bg-white hover:border-[#555]"
                onMouseEnter={() => changeOption("taxes")}
              >
                Taxes
              </div>
              <div
                className="bg-[#444] py-3 cursor-pointer w-full text-white text-lg border-2 border-[#444] flex justify-start items-center px-5 hover:text-black hover:bg-white hover:border-[#555]"
                onMouseEnter={() =>
                  changeOption("environment-natural-resources")
                }
              >
                Environment and natural resources
              </div>
              <div
                className="bg-[#444] py-3 cursor-pointer w-full text-white text-lg border-2 border-[#444] flex justify-start items-center px-5 hover:text-black hover:bg-white hover:border-[#555]"
                onMouseEnter={() => changeOption("national-security-defence")}
              >
                Natural security and defence
              </div>
              <div
                className="bg-[#444] py-3 cursor-pointer w-full text-white text-lg border-2 border-[#444] flex justify-start items-center px-5 hover:text-black hover:bg-white hover:border-[#555]"
                onMouseEnter={() => changeOption("culture-history-sport")}
              >
                Culture, history and sport
              </div>
              <div
                className="bg-[#444] py-3 cursor-pointer w-full text-white text-lg border-2 border-[#444] flex justify-start items-center px-5 hover:text-black hover:bg-white hover:border-[#555]"
                onMouseEnter={() =>
                  changeOption("policing-justice-emergencies")
                }
              >
                Policing, justice and emergencies
              </div>
              <div
                className="bg-[#444] py-3 cursor-pointer w-full text-white text-lg border-2 border-[#444] flex justify-start items-center px-5 hover:text-black hover:bg-white hover:border-[#555]"
                onMouseEnter={() => changeOption("transport-infrastructure")}
              >
                Transport and infrastructure
              </div>
              <div
                className="bg-[#444] py-3 cursor-pointer w-full text-white text-lg border-2 border-[#444] flex justify-start items-center px-5 hover:text-black hover:bg-white hover:border-[#555]"
                onMouseEnter={() => changeOption("canada-and-world")}
              >
                Canada and the world
              </div>
              <div
                className="bg-[#444] py-3 cursor-pointer w-full text-white text-lg border-2 border-[#444] flex justify-start items-center px-5 hover:text-black hover:bg-white hover:border-[#555]"
                onMouseEnter={() => changeOption("money-finance")}
              >
                Money and finance
              </div>
              <div
                className="bg-[#444] py-3 cursor-pointer w-full text-white text-lg border-2 border-[#444] flex justify-start items-center px-5 hover:text-black hover:bg-white hover:border-[#555]"
                onMouseEnter={() => changeOption("science-innovation")}
              >
                Science and innovation
              </div>
            </div>

            {/* Jobs options */}
            {currentOption === "jobs" && (
              <div className="flex flex-col w-[70%] bg-white">
                <div className="mx-10 my-6">
                  <h2 className="text-4xl underline font-semibold">Jobs</h2>
                </div>
                <div className="mx-10 my-4 flex justify-between items-start">
                  <ul className="text-lg underline font-thin">
                    {megaMenuOptions.jobs.map((opt, i) => {
                      return (
                        <li key={i} className="my-3">
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.jobs.map((opt, i) => {
                        return (
                          <li key={i} className="my-3 list-disc">
                            {opt}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Immigration and citizenship options */}
            {currentOption === "imigration-citizenship" && (
              <div className="flex flex-col w-[70%] bg-white">
                <div className="mx-10 my-6">
                  <h2 className="text-4xl underline font-semibold">
                    Immigration and citizenship
                  </h2>
                </div>
                <div className="mx-10 my-4 flex justify-between items-start">
                  <ul className="text-lg underline font-thin">
                    {megaMenuOptions.immigration_citizenship.map((opt, i) => {
                      return (
                        <li key={i} className="my-3">
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.immigration_citizenship.map((opt, i) => {
                        return (
                          <li key={i} className="my-3 list-disc">
                            {opt}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Travel and tourism options */}
            {currentOption === "travel-tourism" && (
              <div className="flex flex-col w-[70%] bg-white">
                <div className="mx-10 my-6">
                  <h2 className="text-4xl underline font-semibold">
                    Travel and tourisms
                  </h2>
                </div>
                <div className="mx-10 my-4 flex justify-between items-start">
                  <ul className="text-lg underline font-thin">
                    {megaMenuOptions.travel_tourism.map((opt, i) => {
                      return (
                        <li key={i} className="my-3">
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.travel_tourism.map((opt, i) => {
                        return (
                          <li key={i} className="my-3 list-disc">
                            {opt}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Business and industry options */}
            {currentOption === "business-industry" && (
              <div className="flex flex-col w-[70%] bg-white">
                <div className="mx-10 my-6">
                  <h2 className="text-4xl underline font-semibold">
                    Business and industry
                  </h2>
                </div>
                <div className="mx-10 my-4 flex justify-between items-start">
                  <ul className="text-lg underline font-thin">
                    {megaMenuOptions.business_industry.map((opt, i) => {
                      return (
                        <li key={i} className="my-3">
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.business_industry.map((opt, i) => {
                        return (
                          <li key={i} className="my-3 list-disc">
                            {opt}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Benefits options */}
            {currentOption === "benifits" && (
              <div className="flex flex-col w-[70%] bg-white">
                <div className="mx-10 my-6">
                  <h2 className="text-4xl underline font-semibold">Benefits</h2>
                </div>
                <div className="mx-10 my-4 flex justify-between items-start">
                  <ul className="text-lg underline font-thin">
                    {megaMenuOptions.benifits.map((opt, i) => {
                      return (
                        <li key={i} className="my-3">
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.benifits.map((opt, i) => {
                        return (
                          <li key={i} className="my-3 list-disc">
                            {opt}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Health options */}
            {currentOption === "health" && (
              <div className="flex flex-col w-[70%] bg-white">
                <div className="mx-10 my-6">
                  <h2 className="text-4xl underline font-semibold">Health</h2>
                </div>
                <div className="mx-10 my-4 flex justify-between items-start">
                  <ul className="text-lg underline font-thin">
                    {megaMenuOptions.health.map((opt, i) => {
                      return (
                        <li key={i} className="my-3">
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.health.map((opt, i) => {
                        return (
                          <li key={i} className="my-3 list-disc">
                            {opt}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Taxes options */}
            {currentOption === "taxes" && (
              <div className="flex flex-col w-[70%] bg-white">
                <div className="mx-10 my-6">
                  <h2 className="text-4xl underline font-semibold">Taxes</h2>
                </div>
                <div className="mx-10 my-4 flex justify-between items-start">
                  <ul className="text-lg underline font-thin">
                    {megaMenuOptions.health.map((opt, i) => {
                      return (
                        <li key={i} className="my-3">
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.health.map((opt, i) => {
                        return (
                          <li key={i} className="my-3 list-disc">
                            {opt}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Environment and natural resources options */}
            {currentOption === "environment-natural-resources" && (
              <div className="flex flex-col w-[70%] bg-white">
                <div className="mx-10 my-6">
                  <h2 className="text-4xl underline font-semibold">
                    Environment and natural resources
                  </h2>
                </div>
                <div className="mx-10 my-4 flex justify-between items-start">
                  <ul className="text-lg underline font-thin">
                    {megaMenuOptions.env_natural_resources.map((opt, i) => {
                      return (
                        <li key={i} className="my-3">
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.env_natural_resources.map((opt, i) => {
                        return (
                          <li key={i} className="my-3 list-disc">
                            {opt}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* National security and defence options */}
            {currentOption === "national-security-defence" && (
              <div className="flex flex-col w-[70%] bg-white">
                <div className="mx-10 my-6">
                  <h2 className="text-4xl underline font-semibold">
                    National security and defence
                  </h2>
                </div>
                <div className="mx-10 my-4 flex justify-between items-start">
                  <ul className="text-lg underline font-thin">
                    {megaMenuOptions.national_sec_defence.map((opt, i) => {
                      return (
                        <li key={i} className="my-3">
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.national_sec_defence.map((opt, i) => {
                        return (
                          <li key={i} className="my-3 list-disc">
                            {opt}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Culture, history and sport options */}
            {currentOption === "culture-history-sport" && (
              <div className="flex flex-col w-[70%] bg-white">
                <div className="mx-10 my-6">
                  <h2 className="text-4xl underline font-semibold">
                    Culture, history and sport
                  </h2>
                </div>
                <div className="mx-10 my-4 flex justify-between items-start">
                  <ul className="text-lg underline font-thin">
                    {megaMenuOptions.culture_history_sports.map((opt, i) => {
                      return (
                        <li key={i} className="my-3">
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.culture_history_sports.map((opt, i) => {
                        return (
                          <li key={i} className="my-3 list-disc">
                            {opt}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Policing, justice and emergencies options */}
            {currentOption === "policing-justice-emergencies" && (
              <div className="flex flex-col w-[70%] bg-white">
                <div className="mx-10 my-6">
                  <h2 className="text-4xl underline font-semibold">
                    Policing, justice and emergencies
                  </h2>
                </div>
                <div className="mx-10 my-4 flex justify-between items-start">
                  <ul className="text-lg underline font-thin">
                    {megaMenuOptions.policing_justice_emergencies.map(
                      (opt, i) => {
                        return (
                          <li key={i} className="my-3">
                            {opt}
                          </li>
                        );
                      }
                    )}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.policing_justice_emergencies.map(
                        (opt, i) => {
                          return (
                            <li key={i} className="my-3 list-disc">
                              {opt}
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Transport and infrastructure options */}
            {currentOption === "transport-infrastructure" && (
              <div className="flex flex-col w-[70%] bg-white">
                <div className="mx-10 my-6">
                  <h2 className="text-4xl underline font-semibold">
                    Transport and infrastructure
                  </h2>
                </div>
                <div className="mx-10 my-4 flex justify-between items-start">
                  <ul className="text-lg underline font-thin">
                    {megaMenuOptions.transport_infrastructure.map((opt, i) => {
                      return (
                        <li key={i} className="my-3">
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.transport_infrastructure.map(
                        (opt, i) => {
                          return (
                            <li key={i} className="my-3 list-disc">
                              {opt}
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Canada and the world options */}
            {currentOption === "canada-and-world" && (
              <div className="flex flex-col w-[70%] bg-white">
                <div className="mx-10 my-6">
                  <h2 className="text-4xl underline font-semibold">
                    Canada and the world
                  </h2>
                </div>
                <div className="mx-10 my-4 flex justify-between items-start">
                  <ul className="text-lg underline font-thin">
                    {megaMenuOptions.canada_and_world.map((opt, i) => {
                      return (
                        <li key={i} className="my-3">
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.canada_and_world.map((opt, i) => {
                        return (
                          <li key={i} className="my-3 list-disc">
                            {opt}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Money and finances options */}
            {currentOption === "money-finance" && (
              <div className="flex flex-col w-[70%] bg-white">
                <div className="mx-10 my-6">
                  <h2 className="text-4xl underline font-semibold">
                    Money and finances
                  </h2>
                </div>
                <div className="mx-10 my-4 flex justify-between items-start">
                  <ul className="text-lg underline font-thin">
                    {megaMenuOptions.money_and_finance.map((opt, i) => {
                      return (
                        <li key={i} className="my-3">
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.money_and_finance.map((opt, i) => {
                        return (
                          <li key={i} className="my-3 list-disc">
                            {opt}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Science and innovation options */}
            {currentOption === "science-innovation" && (
              <div className="flex flex-col w-[70%] bg-white">
                <div className="mx-10 my-6">
                  <h2 className="text-4xl underline font-semibold">
                    Science and innovation
                  </h2>
                </div>
                <div className="mx-10 my-4 flex justify-between items-start">
                  <ul className="text-lg underline font-thin">
                    {megaMenuOptions.science_innovation.map((opt, i) => {
                      return (
                        <li key={i} className="my-3">
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.science_innovation.map((opt, i) => {
                        return (
                          <li key={i} className="my-3 list-disc">
                            {opt}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
