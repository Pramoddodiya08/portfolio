"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Define the type for form values
interface ContactFormValues {
  Name: string;
  Phone: string;
  Email: string;
  Comments: string;
}

const Contact = () => {
  const [values, setValues] = useState<ContactFormValues>({
    Name: "",
    Phone: "",
    Email: "",
    Comments: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name as keyof ContactFormValues]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    (Object.keys(values) as (keyof ContactFormValues)[]).forEach((key) => {
      formData.append(key, values[key]);
    });
    try {
      await fetch("/api/submit-contact", { method: "POST", body: formData });
      alert("Form submitted successfully!");
      setValues({ Name: "", Phone: "", Email: "", Comments: "" });
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      id="contact-section"
      className="bg-[#0d1117] py-[30px] min-h-screen flex items-center"
    >
      <div className="p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] max-w-6xl mx-auto bg-[#161b22] shadow-2xl">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {(["Name", "Phone", "Email"] as (keyof ContactFormValues)[]).map(
              (field) => (
                <input
                  key={field}
                  type={
                    field === "Email"
                      ? "email"
                      : field === "Phone"
                      ? "tel"
                      : "text"
                  }
                  name={field}
                  value={values[field]}
                  onChange={handleChange}
                  placeholder={`Your ${field}`}
                  className="w-full p-4 bg-black text-white border border-gray-700 rounded-lg 
                  transition duration-300 ease-in-out 
                  hover:border-[#ffc107] 
                  focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
                />
              )
            )}
            <textarea
              name="Comments"
              value={values.Comments}
              onChange={handleChange}
              placeholder="Comments"
              className="w-full p-4 bg-black text-white border border-gray-700 rounded-lg 
                transition duration-300 ease-in-out 
                hover:border-[#ffc107] 
                focus:outline-none focus:ring-2 focus:ring-[#ffc107] 
                h-32"
            />
            <button
              type="submit"
              className="w-full p-4 bg-[#ffc107] text-black font-bold rounded-lg 
                hover:bg-[#ffca28] 
                transition duration-300 ease-in-out 
                transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details section remains the same */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Contact Details
          </h2>
          <div className="space-y-6">
            {[
              {
                icon: <FaPhone className="text-[#ffc107] text-2xl mr-4" />,
                title: "Call Us At",
                content: "+91 95107 03300",
              },
              {
                icon: <FaEnvelope className="text-[#ffc107] text-2xl mr-4" />,
                title: "Email Us",
                content: "dodiyapramod3@gmail.com",
              },
              {
                icon: (
                  <FaMapMarkerAlt className="text-[#ffc107] text-2xl mr-4" />
                ),
                title: "Location",
                content:
                  "Dholka road, navi fatehvadi village, sarkhej, ahmedabad, sarkhej-okaf, gujarat 382210",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-black rounded-lg 
                  transition duration-300 ease-in-out 
                  hover:bg-[#1e2328] 
                  hover:translate-x-2"
              >
                {contact.icon}
                <div>
                  <h3 className="font-bold text-[#ffc107]">{contact.title}</h3>
                  <p className="text-white">{contact.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
