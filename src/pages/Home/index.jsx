import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6"; 
import { FaTwitter } from "react-icons/fa6";

function Home(){
    return(
        <section>
            <div className="flex w-[500px] h-[250px] bg-[#796fc7] rounded-lg justify-center items-center flex-col">
                <picture>
                    <img src="" alt="logo" className="text-white font-ibm mb-10" />
                </picture>
                <div>
                    <span className="text-white font-ibmMono font-semibold text-[1rem]">
                        El nombre de tu negocio aquí
                    </span>
                </div>
            </div>
            <div className="flex gap-12 justify-center mt-7">
                <span className="flex flex-col items-center gap-1 cursor-pointer font-ibm font-medium text-[#B4B4B8]">
                    <FaFacebook className="text-[2.5rem] p-2 rounded-full bg-[#F2EFE5] text-[#B4B4B8]"/>
                    Facebook
                </span>
                <span className="flex flex-col items-center gap-1 cursor-pointer font-ibm font-medium text-[#B4B4B8]">
                    <IoLogoInstagram className="text-[2.5rem] p-2 rounded-full bg-[#F2EFE5] text-[#B4B4B8]"/>
                    instagram
                </span>
                <span className="flex flex-col items-center gap-1 cursor-pointer font-ibm font-medium text-[#B4B4B8]">
                    <FaTwitter className="text-[2.5rem] p-2 rounded-full bg-[#F2EFE5] text-[#B4B4B8]"/>
                    Twitter
                </span>
            </div>

        </section>
    )
}

export { Home }