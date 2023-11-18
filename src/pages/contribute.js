import React, { useState } from 'react';
import Layout from "../components/layout"

const ContributionForm = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", description: ""});

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = event => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "form_contribuition", ...inputs })
    }).then(() => {
      alert("We've received your message! Thank you!");
      setInputs({ name: "", email: "", description: "" });
    }).catch(error => alert(error));
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Contribute with us!</h2>
        <form onSubmit={handleSubmit} name="form_contribuition" data-netlify="true" data-netlify-honeypot="bot-field">
          <div className="mb-4">
            <input name="bot-field" className="hidden"/>
            <label className="block mb-1 font-semibold" htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your name"
              value={inputs.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your email"
              value={inputs.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="description">How do you want to contribute?</label>
            <textarea
              id="description"
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows="4"
              name="description"
              placeholder="Explain your motivation to contribute"
              value={inputs.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ContributionForm;

export const Head = () => <title>Contribute</title>
