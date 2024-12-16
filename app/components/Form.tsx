"use client";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Form() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_xpeqglo",
          "template_5c1ik1i",
          form.current,
          "WHT6NzkxL1VaP3GKD"
        )
        .then(
          (result) => {
            console.log("Message sent:", result.text);
            alert("Message sent successfully!");
            form.current?.reset();
          },
          (error) => {
            console.error("Failed to send message:", error.text);
            alert("Failed to send the message. Please try again.");
          }
        );
    }
  };

  return (
    <div className="p-10">
      <div className="rounded-xl shadow-xl flex flex-col md:flex-row justify-between px-8 py-12 bg-purple-200">
        {/* Contact Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          <div>
            <h3 className="text-lg font-medium">Address:</h3>
            <p>No.138/15, Galle Road, Bentota, Sri Lanka</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Email:</h3>
            <p>antheagrussell22@icloud.com | lilalodgebentota@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Whatsapp:</h3>
            <p>+94 714 241 951 | +44 7485 060 543</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Phone:</h3>
            <p>+94 714 241 591</p>
          </div>
          {/* Social Icons */}
          <div className="flex items-center space-x-6 pt-5">
            <span className="font-bold">Follow us on:</span>
            <FaInstagram className="text-2xl text-black cursor-pointer hover:text-purple-600" />
            <FaFacebook className="text-2xl text-black cursor-pointer hover:text-purple-600" />
            <FaTwitter className="text-2xl text-black cursor-pointer hover:text-purple-600" />
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-1/2 space-y-6 mt-8 md:mt-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Phone</label>
              <input
                type="text"
                name="user_phone"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Country</label>
              <select
                name="user_country"
                defaultValue=""
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <option value="" disabled>
                  Select your country
                </option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                {/* Add more countries */}
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-medium uppercase rounded hover:bg-gray-700"
          >
            Send Inquiry
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="rounded-2xl flex flex-col md:flex-row justify-between items-center bg-purple-200 mt-10">
        <div className="px-8 py-12">
          <h1 className="text-3xl font-bold">Our Location</h1>
          <p className="text-lg text-gray-700">Visit our place to enjoy yourself</p>
        </div>
        <div className="p-5">
          <iframe
            className="rounded-xl w-full max-w-[1000px] h-[400px] md:w-[1000px] md:h-[600px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.792671221893!2d80.0022065!3d6.420679799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22e9bd916d201%3A0x853fe2fd18c9417b!2s138%2C%2015%20Galle%20Rd%2C%20Bentota!5e0!3m2!1sen!2slk!4v1734271238691!5m2!1sen!2slk"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
