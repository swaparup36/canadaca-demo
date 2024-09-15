"use client";

import { ChevronDown, LogOut, Search, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { validateAccount } from '../actions/validation';
import { userLogout } from '../actions/users';

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

  const megaMenuOptionsLinks = {
    jobs: [
      "https://www.canada.ca/en/services/jobs/opportunities.html",
      "https://www.canada.ca/en/services/jobs/training.html",
      "https://www.canada.ca/en/services/business/hire.html",
      "https://www.canada.ca/en/services/business/start.html",
      "https://www.canada.ca/en/services/jobs/workplace.html",
      "https://www.canada.ca/en/services/finance/pensions.html",
      "https://www.canada.ca/en/services/benefits/ei.html",
    ],
    immigration_citizenship: [
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/application.html",
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html",
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html",
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html",
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html",
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship.html",
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants.html",
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadians.html",
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees.html",
      "https://www.canada.ca/en/services/immigration-citizenship/enforcement-violations.html",
    ],
    travel_tourism: [
      "https://travel.gc.ca/travelling/advisories",
      "https://travel.gc.ca/travel-covid",
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html?outside",
      "https://travel.gc.ca/travelling",
      "https://travel.gc.ca/air",
      "https://travel.gc.ca/returning",
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html",
      "https://travel.gc.ca/canadian-tourism",
      "https://travel.gc.ca/assistance",
      "https://travel.gc.ca/stay-connected",
    ],
    business_industry: [
      "https://www.canada.ca/en/services/business/start.html",
      "https://www.canada.ca/en/services/business/grants.html",
      "https://www.canada.ca/en/services/business/taxes.html",
      "https://www.canada.ca/en/services/business/federal-corporations.html",
      "https://www.canada.ca/en/services/business/hire.html",
      "https://international.canada.ca/en/services/business/trade",
      "https://www.canada.ca/en/services/business/permits.html",
      "https://www.canada.ca/en/services/business/doing-business.html",
      "https://www.canada.ca/en/services/science/innovation.html",
      "https://www.canada.ca/en/services/business/research.html",
      "https://www.canada.ca/en/services/business/ip.html",
      "https://www.canada.ca/en/services/business/maintaingrowimprovebusiness.html",
      "https://www.canada.ca/en/services/business/protecting.html",
      "https://ised-isde.canada.ca/site/office-superintendent-bankruptcy/en/you-owe-money",
    ],
    benifits: [
      "https://www.canada.ca/en/services/benefits/ei.html",
      "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
      "https://www.canada.ca/en/services/benefits/family.html",
      "https://www.canada.ca/en/services/benefits/publicpensions.html",
      "https://www.canada.ca/en/employment-social-development/services/funding/programs.html",
      "https://www.canada.ca/en/services/benefits/education.html",
      "https://www.canada.ca/en/services/benefits/housing.html",
      "https://benefitsfinder.services.gc.ca/hm?GoCTemplateCulture=en-CA",
      "https://www.canada.ca/en/services/benefits/audience.html",
      "https://www.canada.ca/en/services/benefits/audience.html",
      "https://www.canada.ca/en/services/benefits/notify-government-death.html",
      "https://www.canada.ca/en/services/benefits/notify-government-death.html",
    ],
    health: [
      "https://www.canada.ca/en/services/health/food-nutrition.html",
      "https://www.canada.ca/en/public-health/services/diseases.html",
      "https://www.canada.ca/en/public-health/services/immunization-vaccines.html",
      "https://www.canada.ca/en/services/health/drug-health-products.html",
      "https://www.canada.ca/en/services/health/product-safety.html",
      "https://www.canada.ca/en/services/health/health-risks-safety.html",
      "https://www.canada.ca/en/services/health/healthy-living.html",
      "https://www.sac-isc.gc.ca/eng/1569861171996/1569861324236",
      "https://www.canada.ca/en/services/health/health-system-services.html",
      "https://www.canada.ca/en/services/health/science-research-data.html",
    ],
    taxes: [
      "https://www.canada.ca/en/services/taxes/income-tax.html",
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html",
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll.html",
      "https://www.canada.ca/en/services/taxes/business-number.html",
      "https://www.canada.ca/en/services/taxes/savings-and-pension-plans.html",
      "https://www.canada.ca/en/services/taxes/child-and-family-benefits.html",
      "https://www.canada.ca/en/services/taxes/excise-taxes-duties-and-levies.html",
      "https://www.canada.ca/en/services/taxes/charities.html",
    ],
    env_natural_resources: [
      "https://www.canada.ca/en/services/environment/weather.html",
      "https://www.canada.ca/en/services/environment/energy.html",
      "https://www.canada.ca/en/services/environment/natural-resources.html",
      "https://agriculture.canada.ca/en",
      "https://www.canada.ca/en/services/environment/fisheries.html",
      "https://www.canada.ca/en/services/environment/wildlife-plants-species.html",
      "https://www.canada.ca/en/services/environment/pollution-waste-management.html",
      "https://www.canada.ca/en/services/environment/conservation.html",
    ],
    national_sec_defence: [
      "https://www.canada.ca/en/services/defence/nationalsecurity.html",
      "https://www.canada.ca/en/services/defence/caf.html",
      "https://www.canada.ca/en/services/defence/defence-equipment-purchases-upgrades.html",
      "https://tc.canada.ca/en/corporate-services/transportation-security",
      "https://www.canada.ca/en/services/defence/securingborder.html",
      "https://www.canada.ca/en/services/defence/cybersecurity.html",
      "https://www.canada.ca/en/services/defence/jobs.html",
      "https://www.canada.ca/en/government/publicservice/benefitsmilitary.html",
    ],
    culture_history_sports: [
      "https://www.canada.ca/en/canadian-heritage/services/funding.html",
      "https://www.canada.ca/en/services/culture/events-celebrations-commemorations.html",
      "https://www.canada.ca/en/services/culture/cultural-attractions.html",
      "https://www.canada.ca/en/services/culture/canadian-identity-society.html",
      "https://www.canada.ca/en/services/culture/sport.html",
      "https://www.canada.ca/en/services/culture/history-heritage.html",
      "https://www.canada.ca/en/services/culture/arts-media.html",
      "https://www.canada.ca/en/services/culture/cultural-youth-programs.html",
      "https://www.canada.ca/en/services/culture/cultural-trade-investment.html",
    ],
    policing_justice_emergencies: [
      "https://www.canada.ca/en/services/policing/police.html",
      "https://www.canada.ca/en/services/policing/justice.html",
      "https://www.canada.ca/en/services/policing/emergencies.html",
      "https://www.canada.ca/en/services/policing/corrections.html",
      "https://www.canada.ca/en/services/policing/parole.html",
      "https://www.canada.ca/en/services/policing/victims.html",
    ],
    transport_infrastructure: [
      "https://tc.canada.ca/en/aviation",
      "https://tc.canada.ca/en/marine-transportation",
      "https://tc.canada.ca/en/road-transportation",
      "https://tc.canada.ca/en/rail-transportation",
      "https://tc.canada.ca/en/dangerous-goods",
      "https://tc.canada.ca/en/infrastructure",
    ],
    canada_and_world: [
      "https://www.international.gc.ca/world-monde/offices-bureaux/index.aspx?lang=eng",
      "https://www.international.gc.ca/world-monde/study_work_travel-etude_travail_voyage/index.aspx?lang=eng",
      "https://www.international.gc.ca/world-monde/country-pays/index.aspx?lang=eng",
      "https://www.international.gc.ca/world-monde/stories-histoires/index.aspx?lang=eng",
      "https://www.international.gc.ca/world-monde/international_relations-relations_internationales/index.aspx?lang=eng",
      "https://www.international.gc.ca/world-monde/issues_development-enjeux_developpement/index.aspx?lang=eng",
      "https://www.international.gc.ca/world-monde/funding-financement/index.aspx?lang=eng",
      "https://international.canada.ca/en/services/business/trade",
    ],
    money_and_finance: [
      "https://www.canada.ca/en/services/finance/manage.html",
      "https://www.canada.ca/en/services/finance/debt.html",
      "https://www.canada.ca/en/services/finance/savings.html",
      "https://www.canada.ca/en/services/finance/educationfunding.html",
      "https://www.canada.ca/en/services/finance/pensions.html",
      "https://www.canada.ca/en/services/finance/fraud.html",
      "https://www.canada.ca/en/services/finance/tools.html",
      "https://www.canada.ca/en/financial-consumer-agency/services/financial-literacy-programs.html",
      "https://www.canada.ca/en/services/finance/consumer-affairs.html",
      "https://www.canada.ca/en/services/finance/bankruptcy.html",
      "https://www.canada.ca/en/services/taxes.html",
      "https://www.canada.ca/en/government/system/government-wide-reporting-spending-operations.html",
      "https://www.canada.ca/en/services/business/grants.html",
      "https://www.canada.ca/en/services/business/permits/federallyregulatedindustrysectors/financialservicesregulation.html",
    ],
    science_innovation: [
      "https://www.canada.ca/en/services/science/researchfunding.html",
      "https://www.canada.ca/en/services/science/sciencesubjects.html",
      "https://www.canada.ca/en/services/science/open-data.html",
      "https://www.canada.ca/en/services/science/institutes.html",
      "https://www.canada.ca/en/services/science/innovation.html",
      "https://www.canada.ca/en/services/business/ip.html",
      "https://www.canada.ca/en/services/science/scientistsdirectory.html",
      "https://www.canada.ca/en/services/science/educationalresources.html",
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
  
  const megaMenuMostReqLinks = {
    jobs: [
      "https://www.canada.ca/en/employment-social-development/services/my-account.html",
      "https://www.canada.ca/en/employment-social-development/programs/ei/ei-list/ei-roe/access-roe.html",
      "https://www.canada.ca/en/employment-social-development/services/sin.html",
      "https://www.canada.ca/en/employment-social-development/services/foreign-workers.html",
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html",
    ],
    immigration_citizenship: [
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/ircc-accounts.html",
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-status.html",
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html",
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides.html",
      "https://ircc.canada.ca/english/information/fees/index.asp",
      "https://ircc.canada.ca/english/visit/visas.asp",
      "https://ircc.canada.ca/english/helpcentre/index-featured-can.asp",
    ],
    travel_tourism: [
      "https://travel.gc.ca/assistance/emergency-assistance",
      "https://www.ircc.canada.ca/english/visit/visas.asp",
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html",
      "https://www.cbsa-asfc.gc.ca/services/travel-voyage/prog/nexus/menu-eng.html",
      "https://travel.gc.ca/travelling/registration",
    ],
    business_industry: [
      "https://www.ic.gc.ca/app/scr/cc/CorporationsCanada/fdrlCrpSrch.html?locale=en_CA",
      "https://www.cbsa-asfc.gc.ca/prog/manif/portal-portail-eng.html",
      "https://ised-isde.canada.ca/cipo/trademark-search/srch?null=&lang=eng",
      "https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/2018/html/tblmod-1-eng.html",
      "http://www.ic.gc.ca/opic-cipo/cpd/eng/introduction.html",
      "https://www.cbsa-asfc.gc.ca/comm-eng.html",
      "https://ic.gc.ca/eic/site/cd-dgc.nsf/eng/h_cs03922.html",
      "https://ised-isde.canada.ca/cc/lgcy/hm.html?locale=en_CA",
    ],
    benifits: [
      "https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit.html",
      "https://www.canada.ca/en/services/benefits/education/student-aid/grants-loans.html",
      "https://www.canada.ca/en/government/sign-in-online-account.html",
      "https://www.canada.ca/en/public-services-procurement/services/payments-to-from-government/direct-deposit.html",
      "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/child-family-benefits-calculator.html",
    ],
    health: [
      "https://food-guide.canada.ca/en/",
      "http://recalls-rappels.canada.ca/en",
      "https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html",
      "https://www.canada.ca/en/public-health/services/diseases/measles.html",
    ],
    taxes: [
      "https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/account-individuals.html",
      "https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/business-account.html",
      "https://www.canada.ca/en/revenue-agency/services/e-services/represent-a-client.html",
      "https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/gst-hst-netfile.html",
      "https://www.canada.ca/en/revenue-agency/services/payments-cra.html",
      "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/benefit-payment-dates.html",
    ],
    env_natural_resources: [
      "https://weather.gc.ca/canada_e.html",
      "https://natural-resources.canada.ca/energy-efficiency/transportation-alternative-fuels/20996",
      "https://natural-resources.canada.ca/energy-efficiency/homes/20546",
      "https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry.html",
      "https://www.canada.ca/en/environment-climate-change/services/seasonal-weather-hazards.html",
    ],
    national_sec_defence: [
      "https://forces.ca/en/careers",
      "https://www.canada.ca/en/services/defence/caf/military-identity-system/rank-appointment-insignia.html",
      "https://www.canada.ca/en/services/defence/caf/equipment.html",
      "https://www.publicsafety.gc.ca/cnt/ntnl-scrt/cntr-trrrsm/lstd-ntts/crrnt-lstd-ntts-en.aspx",
      "https://www.canada.ca/en/department-national-defence/services/cadets-junior-canadian-rangers/cadets/join-us.html",
      "https://dgpaapp.forces.gc.ca/en/canada-defence-policy/index.asp",
    ],
    culture_history_sports: [
      "https://www.veterans.gc.ca/en/remembrance/memorials/canadian-virtual-war-memorial",
      "https://www.canada.ca/en/services/culture/canadian-identity-society/anthems-symbols.html",
      "https://crtc.gc.ca/eng/8045/d2018.htm",
      "https://library-archives.canada.ca/eng/collection/research-help/genealogy-family-history/Pages/genealogy-family-history.aspx",
      "https://library-archives.canada.ca/eng/collection/research-help/genealogy-family-history/censuses/Pages/censuses.aspx",
      "https://www.canada.ca/en/services/culture/events-celebrations-commemorations/major-events-celebrations.html",
    ],
    policing_justice_emergencies: [
      "https://rcmp.ca/en/firearms",
      "https://rcmp.ca/en/criminal-records/criminal-record-checks",
      "https://www.canada.ca/en/parole-board/services/record-suspensions/official-pbc-application-guide-and-forms.html",
      "https://www.getprepared.gc.ca/cnt/hzd/drng-en.aspx",
      "https://www.canada.ca/en/services/policing/police/community-safety-policing/impaired-driving.html",
      "https://www.canada.ca/en/services/policing/police/help-solve-crime.html",
    ],
    transport_infrastructure: [
      "https://www.canada.ca/en/services/transport/zero-emission-vehicles.html",
      "https://tc.canada.ca/en/aviation/drone-safety",
      "https://tc.canada.ca/en/aviation/aviation-security/what-you-can-t-bring-plane",
      "https://tc.canada.ca/en/marine-transportation/vessel-licensing-registration",
      "https://tc.canada.ca/en/road-transportation/child-car-seat-safety",
      "https://tc.canada.ca/en/dangerous-goods/table-contents",
      "https://tc.canada.ca/en/corporate-services/acts-regulations/list-regulations/canadian-aviation-regulations-sor-96-433",
    ],
    canada_and_world: [
      "https://www.educanada.ca/scholarships-bourses/non_can/index.aspx?lang=eng",
      "https://www.treaty-accord.gc.ca/index.aspx?Lang=eng",
      "https://www.educanada.ca/index.aspx?lang=eng",
      "https://travel.gc.ca/assistance/embassies-consulates",
      "https://www.international.gc.ca/protocol-protocole/reps.aspx?lang=eng",
      "https://www.international.gc.ca/gac-amc/about-a_propos/services/authentication-authentification/step-etape-1.aspx?lang=eng",
    ],
    money_and_finance: [
      "https://www.ic.gc.ca/app/scr/bsf-osb/ins/login.html?lang=eng",
      "https://www.canada.ca/en/services/benefits/education/student-aid.html",
      "https://www.canada.ca/en/public-services-procurement/services/payments-to-from-government/direct-deposit.html",
      "https://www.canada.ca/en/financial-consumer-agency/services/mortgages.html",
      "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score.html",
      "https://itools-ioutils.fcac-acfc.gc.ca/BP-PB/budget-planner",
      "https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html",
    ],
    science_innovation: [
      "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada/codes-canada-publications",
      "https://nrc.canada.ca/en/web-clock/",
      "https://nrc.canada.ca/en/research-development/products-services/software-applications/sun-calculator/",
      "https://nrc.canada.ca/en/support-technology-innovation/financial-support-technology-innovation-through-nrc-irap",
      "https://science-libraries.canada.ca/eng/home/",
      "https://www.asc-csa.gc.ca/eng/astronomy/northern-lights/auroramax-observatory.asp",
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

  const [isLoggedin, setIsLoggedin] = useState(false);
  const validate = async() => {
    const validationResult = await validateAccount();

    if(validationResult.success){
      setIsLoggedin(true);

      if(validationResult.user?.price === 0){
        router.push('/getstarted-plans');
      }
    }
  }
 

  const [logoutDropDownOpen, setLogoutDropDownOpen] = useState(false);
  const toggleLogoutDropdown = () => {
    if(logoutDropDownOpen){
      setLogoutDropDownOpen(false);
    }else {
      setLogoutDropDownOpen(true);
    }
  }

  const handleLogout = async() => {
    await userLogout();
    setIsLoggedin(false);
    setLogoutDropDownOpen(false);
  }

  useEffect(()=>{
    validate();
  }, [])
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
          {!isLoggedin &&
            <button onClick={()=>{router.push('/signup')}} className="bg-[#26374a] hover:bg-[#444] text-white text-sm px-4 py-3">
              Sign in
            </button>
          }
          {isLoggedin &&
            <div className="flex justify-between items-center" onClick={toggleLogoutDropdown}>
              <UserCircle className="cursor-pointer" />
              <ChevronDown size={20} className="cursor-pointer" />
            </div>
          }
          {logoutDropDownOpen &&
            <div className="absolute right-32 top-40 bg-white py-3 px-4">
              <button className="flex p-2" onClick={handleLogout}>
                <LogOut className="mr-2"/>
                Logout
              </button>
            </div>
          }
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
                          <Link href={megaMenuOptionsLinks.jobs[i]}>
                            {opt}
                          </Link>
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
                          <li className="my-3 list-disc" key={i}>
                            <Link href={megaMenuMostReqLinks.jobs[i]}>
                              {opt}
                            </Link>
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
                          <Link href={megaMenuOptionsLinks.immigration_citizenship[i]}>
                            {opt}
                          </Link>
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
                          <li className="my-3 list-disc" key={i}>
                            <Link href={megaMenuMostReqLinks.immigration_citizenship[i]}>
                              {opt}
                            </Link>
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
                          <Link href={megaMenuOptionsLinks.travel_tourism[i]}>
                            {opt}
                          </Link>
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
                          <li className="my-3 list-disc" key={i}>
                            <Link href={megaMenuMostReqLinks.travel_tourism[i]}>
                              {opt}
                            </Link>
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
                          <Link href={megaMenuOptionsLinks.business_industry[i]}>
                            {opt}
                          </Link>
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
                          <li className="my-3 list-disc" key={i}>
                            <Link href={megaMenuMostReqLinks.business_industry[i]}>
                              {opt}
                            </Link>
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
                          <Link href={megaMenuOptionsLinks.benifits[i]}>
                            {opt}
                          </Link>
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
                          <li className="my-3 list-disc" key={i}>
                            <Link href={megaMenuMostReqLinks.benifits[i]}>
                              {opt}
                            </Link>
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
                          <Link href={megaMenuOptionsLinks.health[i]}>
                            {opt}
                          </Link>
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
                          <li className="my-3 list-disc" key={i}>
                            <Link href={megaMenuMostReqLinks.health[i]}>
                              {opt}
                            </Link>
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
                    {megaMenuOptions.taxes.map((opt, i) => {
                      return (
                        <li key={i} className="my-3">
                          <Link href={megaMenuOptionsLinks.taxes[i]}>
                            {opt}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl w-full text-start">
                      Most requested
                    </h3>
                    <ul className="text-lg underline font-thin w-[80%]">
                      {megaMenuMostReq.taxes.map((opt, i) => {
                        return (
                          <li className="my-3 list-disc" key={i}>
                            <Link href={megaMenuMostReqLinks.taxes[i]}>
                              {opt}
                            </Link>
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
                          <Link href={megaMenuOptionsLinks.env_natural_resources[i]}>
                            {opt}
                          </Link>
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
                          <li className="my-3 list-disc" key={i}>
                            <Link href={megaMenuMostReqLinks.env_natural_resources[i]}>
                              {opt}
                            </Link>
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
                          <Link href={megaMenuOptionsLinks.national_sec_defence[i]}>
                            {opt}
                          </Link>
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
                          <li className="my-3 list-disc" key={i}>
                            <Link href={megaMenuMostReqLinks.national_sec_defence[i]}>
                              {opt}
                            </Link>
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
                          <Link href={megaMenuOptionsLinks.culture_history_sports[i]}>
                            {opt}
                          </Link>
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
                          <li className="my-3 list-disc" key={i}>
                            <Link href={megaMenuMostReqLinks.culture_history_sports[i]}>
                              {opt}
                            </Link>
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
                          <Link href={megaMenuOptionsLinks.policing_justice_emergencies[i]}>
                            {opt}
                          </Link>
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
                            <li className="my-3 list-disc" key={i}>
                            <Link href={megaMenuMostReqLinks.policing_justice_emergencies[i]}>
                              {opt}
                            </Link>
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
                          <Link href={megaMenuOptionsLinks.transport_infrastructure[i]}>
                            {opt}
                          </Link>
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
                            <li className="my-3 list-disc" key={i}>
                            <Link href={megaMenuMostReqLinks.transport_infrastructure[i]}>
                              {opt}
                            </Link>
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
                          <Link href={megaMenuOptionsLinks.canada_and_world[i]}>
                            {opt}
                          </Link>
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
                          <li className="my-3 list-disc" key={i}>
                            <Link href={megaMenuMostReqLinks.canada_and_world[i]}>
                              {opt}
                            </Link>
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
                          <Link href={megaMenuOptionsLinks.money_and_finance[i]}>
                            {opt}
                          </Link>
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
                          <li className="my-3 list-disc" key={i}>
                            <Link href={megaMenuMostReqLinks.money_and_finance[i]}>
                              {opt}
                            </Link>
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
                          <Link href={megaMenuOptionsLinks.science_innovation[i]}>
                            {opt}
                          </Link>
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
                          <li className="my-3 list-disc" key={i}>
                            <Link href={megaMenuMostReqLinks.science_innovation[i]}>
                              {opt}
                            </Link>
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
