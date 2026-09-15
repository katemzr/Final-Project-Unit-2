import { useState } from "react";

const ContactUsPage = () => {

    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({  
            ...formData,  //keep existing form data, but update the filed the user changed
            [name]: value
        });
    };

       const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <>
            <h1>Contact Us🧩</h1>    
            <p>Have a question, suggestion, or feedback about The Last Piece? We would love to hear from you! Whether you need help using the site, 
                have an idea for a new feature, or just want to share your thoughts, feel free to reach out. 
                Fill out the contact form below, and we will get back to you as soon as we can. 
                Thanks for helping us make The Last Piece an even better place for puzzle lovers!</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                    <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                    <button type="submit">Send Message</button>


            </form>    
            
            {submitted && (
                <p>🧩Thank you for contacting us!🧩</p>
            )}
        </>
    );
};

export default ContactUsPage;