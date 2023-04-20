/* import { PageInfo } from "@/typings"; */
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

/* type Props = {
  socials: PageInfo;
}; */

function ContactMe(/* { socials }: Props */) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[17.5px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          If you have any questions or just want to get to know me better, feel
          free to{" "}
          <span className="underline decoration-[#6b0a7f]/50">
            call or email me!
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#6b0a7f] h-7 w-7 animate-pulse" />
           {/*  <p className="text-xl">{socials.phoneNumber}</p> */}
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#6b0a7f] h-7 w-7 animate-pulse" />
            {/* <p className="text-xl">{socials.email}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
