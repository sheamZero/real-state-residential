import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { CgMailOpen } from "react-icons/cg";
import contactBanner from "../../assets/contactBanner.jpg"
import { Link } from "react-router-dom";
import ContactUsForm from "../../Components/ContactUsForm/ContactUsForm";

const ContactUs = () => {
    return (
        <div>
            <div className="relative">
                <div className="mt-20 mb-16">
                    <img className="mt-20 mb-16 w-full h-[70vh]" src={contactBanner} alt="" />
                </div>

                <div className="lg:absolute lg:top-0 w-full grid grid-cols-1 gap-10 lg:grid-cols-3 bg-slate-100 py-6 mb-5 shadow-2xl">
                    <div className="flex items-center justify-center gap-3">
                        <CgMailOpen className="text-5xl text-gray-500"></CgMailOpen>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Email</h3>
                            <h3 className="text-xl font-medium"><i>(abc@gmail.com)</i></h3>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-5">
                        <Link className="border-2 p-3 rounded-full hover:border-primary hover:-translate-y-2 duration-500">
                            <FaGoogle className="text-3xl "></FaGoogle>
                        </Link>
                        <Link className="border-2 p-3 rounded-full hover:border-primary hover:translate-y-2 duration-500">
                            <FaLinkedin className="text-3xl "></FaLinkedin>
                        </Link>
                        <Link className="border-2 p-3 rounded-full hover:border-primary hover:-translate-y-2 duration-500">
                            <FaFacebook className="text-3xl "></FaFacebook>
                        </Link>
                        <Link className="border-2 p-3 rounded-full hover:border-primary hover:translate-y-2 duration-500">
                            <FaTwitter className="text-3xl "></FaTwitter>
                        </Link>
                        <Link className="border-2 p-3 rounded-full hover:border-primary hover:-translate-y-2 duration-500">
                            <FaInstagram className="text-3xl "></FaInstagram>
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                        <FaPhone className="text-5xl text-gray-500"></FaPhone>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Phone</h3>
                            <h3 className="text-xl font-medium"><i>(017*******)</i></h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* form-------- */}
            <ContactUsForm></ContactUsForm>
        </div>
    );
};

export default ContactUs;