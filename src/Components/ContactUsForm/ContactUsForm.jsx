import contactUs from '../../assets/contactUs.jpg';

const ContactUsForm = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-20 px-8 py-16 mx-auto rounded-lg  md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  dark:bg-gray-800 text-gray-800 dark:text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    <div className="text-gray-600 dark:text-gray-400">Don't worry, we don't collect your personal information.</div>
                </div>
                <img src={contactUs} alt='empty'/>
            </div>

            <form noValidate="" className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-lg">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800" fdprocessedid="rlvngk" />
                </div>
                <div>
                    <label htmlFor="email" className="text-lg">Email</label>
                    <input id="email" type="email" className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800" fdprocessedid="hiwa5i" />
                </div>
                <div>
                    <label htmlFor="message" className="text-lg">Message</label>
                    <textarea id="message" rows="6" className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-rose-600 dark:bg-rose-400 text-gray-50 dark:text-gray-900" fdprocessedid="wbtrm4">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUsForm;