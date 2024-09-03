const Contact = () => {
  return (
    <div className="transparent shadow-md ">
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your Name"
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email address"
        required
        className="w-full p-2 border rounded"
      />

      <textarea
        id="message"
        name="message"
        placeholder="Enter your message"
        required
        className="w-full p-2 border rounded"
        rows="5"
      />
    </div>
  );
};
export default Contact;
