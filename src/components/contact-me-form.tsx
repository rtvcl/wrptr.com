'use client'
import { useState } from "react";
import { BlackGrungeSection } from "./moodboard-section";

type Props = {};

const ContactMeForm = (props: Props) => {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: any) {
		event.preventDefault();
		setLoading(true);

		const data = {
			name: String(event.target.name.value),
			email: String(event.target.email.value),
			message: String(event.target.message.value),
		};

		const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			console.log("Message sent successfully");
			setLoading(false);
			// reset the form
			event.target.name.value = "";
			event.target.email.value = "";
			event.target.message.value = "";
		}
		if (!response.ok) {
			console.log("Error sending message");
			setLoading(false);
		}
	}

    return (
    <BlackGrungeSection className="max-w-screen-md px-8 py-8 mx-auto rounded-[28px] mb-4">
      <h2 className="font-bold text-2xl">Ready to connect?</h2>
      <p>
        Drop me a line using the contact form below. Let&apos;s chat about tech,
        web development, or anything that piques your interest.
      </p>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
          >
            Full name
          </label>
          <input
            type="text"
            id="name"
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
        disabled={loading}
            className=" disabled:bg-gray-400 px-6 whitespace-nowrap py-2 text-lg w-full font-extrabold bg-[#2CE0AC] retro-shadow hover:bg-[#A57EE5] transition-colors rotate-1 mt-4"
          >
            <div className="-rotate-1">
            {!loading ? 'Send Message': 'Sending...'}

            </div>
          </button>
        </div>
      </form>
    </BlackGrungeSection>
  );
};

export default ContactMeForm;
