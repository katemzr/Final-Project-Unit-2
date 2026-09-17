import { useState } from "react";

const ContactForm = () => {

 const [formData, setFormData] = useState ({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({  
            ...formData, 
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
            <div className="contact-form">
                <h1>Send Us a Message</h1>
                <form onSubmit={handleSubmit}>

                    <div className="contact-form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>    
                    
                    <div className="contact-form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="contact-form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>    

                    <button type="submit">Send Message</button>

                </form>  
            </div>      
            
            {submitted && (
                <p>🧩Thank you for contacting us!🧩</p>
            )}
        </>
    ); 
};

export default ContactForm;