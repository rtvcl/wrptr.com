import { BlackGrungeSection } from "./moodboard-section";

type Props = {};

const ContactMeForm = (props: Props) => {
  return (
    <BlackGrungeSection className="max-w-screen-md px-8 py-8 mx-auto rounded-[28px] mb-4">
      <h2 className="font-bold text-2xl">Ready to connect?</h2>
      <p>
        Drop me a line using the contact form below. Let&apos;s chat about tech,
        web development, or anything that piques your interest.
      </p>
      <form className="mt-6">
        <div className="mb-4">
          <label
            htmlFor="full_name"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
          >
            Full name
          </label>
          <input
            type="text"
            id="full_name"
            placeholder="Luke Skywalker"
            className="w-full px-3 py-2 bg-white bg-opacity-10 placeholder-gray-300 border border-gray-300  focus:outline-none focus:ring focus:ring-[#2CE0AC] focus:border-[#2CE0AC]  placeholder-opacity-40"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="luke.skywalker@starwa.rz"
            className="w-full px-3 py-2 bg-white bg-opacity-10 placeholder-gray-300 border border-gray-300  focus:outline-none focus:ring focus:ring-[#2CE0AC] focus:border-[#2CE0AC]  placeholder-opacity-40"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Hey there! Luke Skywalker here. Just wanted to reach out and say that your website is out of this galaxy! May the Force be with you as you continue to create amazing digital experiences. "
            className="w-full px-3 py-2 bg-white bg-opacity-10  placeholder-gray-300 border border-gray-300  focus:outline-none focus:ring focus:ring-[#2CE0AC] focus:border-[#2CE0AC] placeholder-opacity-40"
            required
          />
        </div>
        <div>
        <button
            className=" px-6 whitespace-nowrap py-2 text-lg w-full font-extrabold bg-[#2CE0AC] retro-shadow hover:bg-[#A57EE5] transition-colors rotate-1 mt-4"
          >
            <div className="-rotate-1">
            Send Message

            </div>
          </button>
        </div>
      </form>
    </BlackGrungeSection>
  );
};

export default ContactMeForm;
