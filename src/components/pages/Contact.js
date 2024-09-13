import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return (
    <div className="max-w-lg mx-auto p-6 rounded-lg py-40">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
      <form>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            rows="5"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {/* {status && <p className="mt-4 text-center">{status}</p>} */}
    </div>
  );
};
export default Contact;
