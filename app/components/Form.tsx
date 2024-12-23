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
      <div className="rounded-xl shadow-xl flex flex-col md:flex-row justify-between px-8 py-12 bg-purple-100">
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
              <label className="block mb-2 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Phone</label>
              <input
                type="text"
                name="user_phone"
                required
                placeholder="Phone"
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
                placeholder="Email"
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
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cabo Verde">Cabo Verde</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo (Congo-Brazzaville)">
                  Congo (Congo-Brazzaville)
                </option>
                <option value="Congo (Congo-Kinshasa)">
                  Congo (Congo-Kinshasa)
                </option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Eswatini">Eswatini</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Greece">Greece</option>
                <option value="Grenada">Grenada</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea (North)">Korea (North)</option>
                <option value="Korea (South)">Korea (South)</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia">Micronesia</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="North Macedonia">North Macedonia</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Qatar">Qatar</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Vincent and the Grenadines">
                  Saint Vincent and the Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Sudan">South Sudan</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-Leste">Timor-Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City">Vatican City</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Message"
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
      <div className="rounded-2xl flex flex-col md:flex-row justify-between items-center bg-purple-100 mt-10">
        <div className="px-8 py-12">
          <h1 className="text-3xl font-bold">Our Location</h1>
          <p className="text-lg text-gray-700">
            Visit our place to enjoy yourself
          </p>
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
