const Contact = () => {
    return (
        <main className="contact">
            <h2>Contact</h2>
            <form action="" method="POST">
                <div>
                    <label htmlFor="firstname"></label>Firstname
                    <input type="text" id="firstname" name="firstname"/>
                </div>
                <div>
                    <label htmlFor="lastname"></label>Lastname
                    <input type="text" id="lastname" name="lastname"/>
                </div>
                <div>
                    <label htmlFor="email"></label>Email
                    <input type="email" id="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="message"></label>Message
                    <textarea name="message" id="message"></textarea>
                </div>
                <div>
                    <button onClick={(e) => e.preventDefault()} type="submit">Submit</button>
                </div>
            </form>
        </main>
    );
}

export default Contact;
