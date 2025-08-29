import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="name" className="pl-2 pt-1 pb-1 pr-2" />{" "}
        <br />
        <input
          type="email"
          placeholder="email"
          className="pl-2 pt-1 pb-1 pr-2"
        />
        <br />
        <textarea
          name="text"
          placeholder="message"
          className="pl-2 pt-1 pb-1 pr-2"
        ></textarea>{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
