import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center items-center mb-16">
        <div className="w-[80%] flex flex-col items-start">
          <div className="w-full flex justify-start items-center">
            <Link
              className="text-blue-500 underline my-2"
              href={"https://www.canada.ca/en.html"}
            >
              Canada.ca
            </Link>
          </div>

          <div className="py-10 flex flex-col justify-around items-start">
            <h2 className="text-4xl font-semibold">Terms and conditions</h2>
            <span className="h-[7px] my-1 w-[20%] bg-[#af3c43]"></span>
          </div>

          <div className="my-2 w-[95%] flex flex-col justify-between items-start">
            <h2 className="text-4xl font-semibold">
              Using files located on non-Government of Canada servers
            </h2>
            <p className="text-xl my-4">
              To improve the functionality of Government of Canada websites,
              certain files (such as open source libraries, images and scripts)
              may be delivered automatically to your browser via a trusted
              third-party server or content delivery network. The delivery of
              these files is intended to provide a seamless user experience by
              speeding response times and avoiding the need for each visitor to
              download these files. Where applicable, specific privacy
              statements covering these files are included in our Privacy
              Notice.
            </p>
          </div>

          <div className="my-2 w-[95%] flex flex-col justify-between items-start">
            <h2 className="text-4xl font-semibold">
              Providing content in Canada’s official languages
            </h2>
            <p className="text-xl my-4">
              The Official Languages Act, the Official Languages (Communications
              with and Services to the Public) Regulations and Treasury Board
              policy requirements establish when we use both English and French
              to provide services to or communicate with members of the public.
              When there is no obligation to provide information in both
              official languages, content may be available in one official
              language only. Information provided by organizations not subject
              to the Official Languages Act is in the language(s) provided.
              Information provided in a language other than English or French is
              only for the convenience of our visitors.
            </p>
          </div>

          <div className="my-2 w-[95%] flex flex-col justify-between items-start">
            <h2 className="text-4xl font-semibold">
              Linking to non-Government of Canada websites
            </h2>
            <p className="text-xl my-2">
              Links to websites not under the control of the Government of
              Canada, including those to our social media accounts, are provided
              solely for the convenience of our website visitors. We are not
              responsible for the accuracy, currency or reliability of the
              content of such websites. The Government of Canada does not offer
              any guarantee in that regard and is not responsible for the
              information found through these links, and does not endorse the
              sites and their content.
            </p>
            <p className="text-xl my-2">
              Visitors should also be aware that information offered by
              non-Government of Canada sites to which this website links is not
              subject to the Privacy Act or the Official Languages Act and may
              not be accessible to persons with disabilities. The information
              offered may be available only in the language(s) used by the sites
              in question. With respect to privacy, visitors should research the
              privacy policies of these non-government websites before providing
              personal information.
            </p>
          </div>

          <div className="my-2 w-[95%] flex flex-col justify-between items-start">
            <h2 className="text-4xl font-semibold">
              Ownership and usage of content provided on this site
            </h2>
            <p className="text-xl my-2">
              Materials on this website were produced and/or compiled for the
              purpose of providing Canadians with access to information about
              the programs and services offered by the Government of Canada. You
              may use and reproduce the materials as follows:
            </p>
            <div className="flex flex-col justify-between items-start">
              <h3 className="text-2xl font-semibold my-4">
                Non-commercial reproduction
              </h3>
              <p className="text-xl my-2">
                Unless otherwise specified you may reproduce the materials in
                whole or in part for non-commercial purposes, and in any format,
                without charge or further permission, provided you do the
                following:
              </p>
              <div className="flex justify-center items-center w-full">
                <ul className="flex flex-col w-[92%]">
                  <li className="list-disc text-xl my-2">
                    exercise due diligence in ensuring the accuracy of the
                    materials reproduced
                  </li>
                  <li className="list-disc text-xl my-2">
                    indicate both the complete title of the materials
                    reproduced, as well as the author (where available)
                  </li>
                  <li className="list-disc text-xl my-2">
                    indicate that the reproduction is a copy of the version
                    available at [URL where original document is available]
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start">
              <h3 className="text-2xl font-semibold my-4">
                Commercial reproduction
              </h3>
              <p className="text-xl my-2">
                Unless otherwise specified, you may not reproduce materials on
                this site, in whole or in part, for the purposes of commercial
                redistribution without prior written permission from the
                copyright administrator. To obtain permission to reproduce any
                content owned by the Government of Canada available on this site
                for commercial purposes, please contact the institution
                responsible for that content by referring to the institutions
                list available on the Government of Canada contacts page.
              </p>
              <p className="text-xl my-2">
                Some of the content on this site may be subject to the copyright
                of another party. Where information has been produced or
                copyright is not held by the Government of Canada, the materials
                are protected under the Copyright Act, and international
                agreements. Details concerning copyright ownership are indicated
                on the relevant page(s).
              </p>
            </div>
            <div className="flex flex-col justify-between items-start">
              <h3 className="text-2xl font-semibold my-4">Trademark notice</h3>
              <p className="text-xl my-2">
                The official symbols of the Government of Canada, including the
                Canada wordmark, the Arms of Canada, and the flag symbol may not
                be reproduced, whether for commercial or non-commercial
                purposes, without prior written authorization.
              </p>
            </div>
          </div>

          <div className="my-2 w-[95%] flex flex-col justify-between items-start">
            <h2 className="text-4xl font-semibold">
                Our commitment to accessibility
            </h2>
            <p className="text-xl my-4">
                The Government of Canada is committed to achieving a high standard of accessibility as defined in the Standard on Web Accessibility and the Standard on Optimizing Websites and Applications for Mobile Devices. In the event of difficulty using our web pages, applications or device-based mobile applications, contact us for assistance or to obtain alternative formats such as regular print, Braille or another appropriate format.
            </p>
          </div>

          <div className="my-2 w-[95%] flex flex-col justify-between items-start">
            <h2 className="text-4xl font-semibold">
                Interacting with us on social media
            </h2>
            <p className="text-xl my-4">
                This notice has been written to explain how the Government of Canada interacts with the public on social media platforms.
            </p>
            <p className="text-xl my-4">
                Your engagement with the Government of Canada via social media is in part governed by the Terms of Service/Use of the relevant third-party social media platform providers, as well as the following Terms and Conditions. The Government of Canada has no control over the social media platform providers’ Terms of Service/Use, but you are strongly encouraged to read them in addition to those that follow.
            </p>
            <div className="flex flex-col justify-between items-start">
              <h3 className="text-2xl font-semibold my-4">
                Content and frequency
              </h3>
              <p className="text-xl my-2">
                The Government of Canada uses social media accounts as an alternative method of interacting with Canadians and of sharing the content posted on its website, facilitating access to Government of Canada information and services, and providing stakeholders with an opportunity to interact in an informative and respectful environment.
              </p>
              <p className="text-xl my-2">
                Because social media platforms and their computer servers are managed by a third party, social media accounts are subject to downtime that may be out of the Government of Canada’s control. The government accepts no responsibility for platforms becoming unresponsive or unavailable.
              </p>
            </div>
            <div className="flex flex-col justify-between items-start">
              <h3 className="text-2xl font-semibold my-4">
                Links to other websites and ads
              </h3>
              <p className="text-xl my-2">
                Social media accounts may post or display links or ads for websites that are not under the control of the government of Canada. These links are provided solely for the convenience of users. The government is not responsible for the information found through these links or ads; neither does it endorse the sites or their content.
              </p>
            </div>
            <div className="flex flex-col justify-between items-start">
              <h3 className="text-2xl font-semibold my-4">
                Following, {"liking"} and subscribing
              </h3>
              <p className="text-xl my-2">
                The Government of Canada’s decision to follow, {"like"} or subscribe to another social media account does not imply an endorsement of that account, channel, page or site, and neither does sharing (re-tweeting, reposting or linking to) content from another user.
              </p>
            </div>
            <div className="flex flex-col justify-between items-start">
              <h3 className="text-2xl font-semibold my-4">
                Comments and interaction
              </h3>
              <p className="text-xl my-2">
                The Government of Canada will read comments and participate in discussions when appropriate. Your comments and contributions must be relevant and respectful.
              </p>
              <p className="text-xl my-2">
                The Government of Canada will not engage in partisan or political issues or respond to questions that violate these Terms and Conditions.
              </p>
              <p className="text-xl my-2">
                The Government of Canada reserves the right to remove comments and contributions, and to block users based on the following criteria:
              </p>
              <p className="text-xl my-2">
                The comments or contributions:
              </p>
              <div className="flex justify-center items-center w-full">
                <ul className="flex flex-col w-[92%]">
                  <li className="list-disc text-xl my-2">
                    include personal information
                  </li>
                  <li className="list-disc text-xl my-2">
                    include protected or classified information of the Government of Canada
                  </li>
                  <li className="list-disc text-xl my-2">
                    infringe upon intellectual property or proprietary rights
                  </li>
                  <li className="list-disc text-xl my-2">
                    are contrary to the principles of the Canadian Charter of Rights and Freedoms, Constitution Act, 1982
                  </li>
                  <li className="list-disc text-xl my-2">
                    are racist, hateful, sexist, homophobic or defamatory, or contain or refer to any obscenity or pornography
                  </li>
                  <li className="list-disc text-xl my-2">
                    are threatening, violent, intimidating or harassing
                  </li>
                  <li className="list-disc text-xl my-2">
                    are contrary to any federal, provincial or territorial laws of Canada
                  </li>
                  <li className="list-disc text-xl my-2">
                    constitute impersonation, advertising or spam
                  </li>
                  <li className="list-disc text-xl my-2">
                    encourage or incite any criminal activity
                  </li>
                  <li className="list-disc text-xl my-2">
                    are written in a language other than English or French
                  </li>
                  <li className="list-disc text-xl my-2">
                    otherwise violate this notice
                  </li>
                </ul>
              </div>
              <p className="text-xl my-2">
                The Government of Canada reserves the right to report users and/or their comments and contributions to third-party social media service providers to prevent or remove the posting of content that is contrary to these Terms and Conditions, or to the Terms of Service/Use of the third-party social media platform.
              </p>
            </div>
            <div className="flex flex-col justify-between items-start">
              <h3 className="text-2xl font-semibold my-4">
                Accessibility of social media platforms
              </h3>
              <p className="text-xl my-2">
                Social media platforms are third-party service providers and are not bound by Government of Canada standards for web accessibility.
              </p>
            </div>
            <div className="flex flex-col justify-between items-start">
              <h3 className="text-2xl font-semibold my-4">
                Copyright
              </h3>
              <p className="text-xl my-2">
                Information posted by the Government of Canada is subject to the Copyright Act.
              </p>
            </div>
            <div className="flex flex-col justify-between items-start">
              <h3 className="text-2xl font-semibold my-4">
                Privacy
              </h3>
              <p className="text-xl my-2">
                Social media accounts are not Government of Canada websites and represent only their presence on third-party service providers.
              </p>
              <p className="text-xl my-2">
                The Government of Canada uses various social media platforms to tell you about and get your input on government services, programs and initiatives. At times, the government may need to collect personal information from you.
              </p>
              <p className="text-xl my-2">
                This page tells you:
              </p>
              <div className="flex justify-center items-center w-full">
                <ul className="flex flex-col w-[92%]">
                  <li className="list-disc text-xl my-2">
                    what we mean by {"personal information"}
                  </li>
                  <li className="list-disc text-xl my-2">
                    what we do with it
                  </li>
                </ul>
              </div>
              <p className="text-xl my-2">
                It also tells you about:
              </p>
              <div className="flex justify-center items-center w-full">
                <ul className="flex flex-col w-[92%]">
                  <li className="list-disc text-xl my-2">
                    your rights and responsibilities with respect to your personal information
                  </li>
                  <li className="list-disc text-xl my-2">
                    what you can do if you have questions or concerns
                  </li>
                </ul>
              </div>
              <p className="text-xl my-2">
                Personal information is information about you that is recorded in any form and that can be used to identify you. Personal information includes:
              </p>
              <div className="flex justify-center items-center w-full">
                <ul className="flex flex-col w-[92%]">
                  <li className="list-disc text-xl my-2">
                    your name
                  </li>
                  <li className="list-disc text-xl my-2">
                    contact information 
                  </li>
                  <li className="list-disc text-xl my-2">
                    Internet Protocol (IP) address 
                  </li>
                  <li className="list-disc text-xl my-2">
                    social media profile information 
                  </li>
                  <li className="list-disc text-xl my-2">
                  social media {"likes"} or retweets
                  </li>
                </ul>
              </div>
              <p className="text-xl my-2">
                To consult you about topics that might interest you or to enable you to participate in outreach activities, we may need to collect biographical information or your opinions and views about different topics.
              </p>
              <p className="text-xl my-2">
                We might use your personal information to:
              </p>
              <div className="flex justify-center items-center w-full">
                <ul className="flex flex-col w-[92%]">
                  <li className="list-disc text-xl my-2">
                    respond to your enquiries
                  </li>
                  <li className="list-disc text-xl my-2">
                    compile statistics and reports
                  </li>
                  <li className="list-disc text-xl my-2">
                    consult you about topics that might interest you 
                  </li>
                  <li className="list-disc text-xl my-2">
                    enable you to participate in outreach activities 
                  </li>
                  <li className="list-disc text-xl my-2">
                    allow for the sharing of opinions, knowledge, expertise and best practices
                  </li>
                  <li className="list-disc text-xl my-2">
                    evaluate programs
                  </li>
                </ul>
              </div>
              <p className="text-xl my-2">
                If you make inappropriate comments or contributions, we may remove them. We may also block you or report you to third party social media service providers if your comments or contributions violate the terms and conditions for interacting on social media. When doing so and to the extent necessary, we may use and disclose your personal information.
              </p>
              <p className="text-xl my-2">
                We can make the content of social media interactions publicly available if we have notified participants in advance. We will get your consent to use your personal information to create mailing lists so that we can contact you about upcoming events or to ask you for your views on particular issues.
              </p>
              <p className="text-xl my-2">
                We will not use any personal information that we collect from you through social media accounts to make decisions in processes that you are directly involved in, for example, an employment insurance application, a grant application or a citizenship application.
              </p>
              <p className="text-xl my-2">
                The following personal information banks describe how we handle personal information that we collect through our social media accounts: Public Communications (PSU 914) and Outreach Activities (PSU 938).
              </p>

              <h3 className="text-2xl font-semibold my-4">
                Your rights
              </h3>
              <p className="text-xl my-2">
                When you interact with Government of Canada official social media accounts, your social media profile information may be recorded as per the practices of the social media platform. However, you have the right to refuse to give us any additional personal information when you interact with us on social media. There will be no legal or administrative consequences, but you might not be able to take part in a particular activity.
              </p>
              <p className="text-xl my-2">
                You can ask to access personal information that you have given us or that may have been created when you have interacted with us through our social media accounts. We don’t collect and retain this information with the intention of it being retrievable, so if you ask to access to it, please give the date and time of the interaction and any other details that could help us retrieve it. To access this information, you can fill out a personal information request form.
              </p>

              <h3 className="text-2xl font-semibold my-4">
                Your responsibilities
              </h3>
              <p className="text-xl my-2">
                If you choose to interact with us on social media, you should read the terms and conditions for doing so. You should also read the terms of service and the privacy policies of the social media platform provider and those of any applications you use to access that platform.
              </p>


              <h3 className="text-2xl font-semibold my-4">
                Our responsibilities
              </h3>
              <p className="text-xl my-2">
                Whenever we collect personal information from you on social media and whenever personal information is created as a result of your interactions with us on social media, we have to comply with the Privacy Act and the Access to Information Act.
              </p>

              <h3 className="text-2xl font-semibold my-4">
                Questions and concerns
              </h3>
              <p className="text-xl my-2">
                If you have questions, comments, concerns or complaints about how we collect, use and store your personal information, contact the privacy coordinator of the government institution that holds the information.
              </p>
              <p className="text-xl my-2">
                If you are not satisfied, contact the Office of the Privacy Commissioner, by telephone at 1 800 282-1376 or visit the Office of the Privacy Commissioner website.
              </p>

              <h3 className="text-2xl font-semibold my-4">
                Official languages
              </h3>
              <p className="text-xl my-2">
                Many social media platforms have multiple language options and provide instructions on how to set your preferences. The Government of Canada respects the Official Languages Act and is committed to ensuring that our information is available in both French and English and that both versions are of equal quality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
