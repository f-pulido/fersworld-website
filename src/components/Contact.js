import React from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact">
            <div class="contactContainer">
                <form netlify name="contact" onSubmit={handleSubmit}>
                    <h1>Contact Me</h1>
                    <p>Please fill out this form and I will make sure to get back as soon as possible.</p>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
                <iframe
                        width="100%" height="100%" title="map" className="absolute inset-0" style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51238.93930188294!2d-121.84318630538925!3d36.61594570237719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808dfca8e761e057%3A0xcdbf437897f231fd!2sCalifornia%20State%20University%2C%20Monterey%20Bay!5e0!3m2!1sen!2sus!4v1696285394134!5m2!1sen!2sus"
                        />
            </div>
        </section>
    );
}