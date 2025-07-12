const { useState } = React;

export function EventRSVPForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [numAttendees, setNumAttendees] = useState("");
    const [dietary, setDietary] = useState("");
    const [guests, setGuests] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedData({
            name,
            email,
            numAttendees,
            dietary,
            guests
        });

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Event RSVP Form</h1>
                <label for="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required />

                <label for="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />

                <label for="number">Number of attendees: </label>
                <input
                    type="number"
                    min="1"
                    id="number"
                    placeholder="Number of Attendees"
                    value={numAttendees}
                    onChange={e => setNumAttendees(e.target.value)}
                    required />

                <label for="dietary">Dietary Preferences: </label>
                <input
                    type="text"
                    id="dietary"
                    name="dietary"
                    placeholder="Dietary Preferences (Optional)"
                    value={dietary}
                    onChange={e => setDietary(e.target.value)}
                />

                <label for="guests">Bringing additional guests: </label>
                <input
                    type="checkbox"
                    id="guests"
                    name="guests"
                    value={guests}
                    onChange={e => setGuests(e.target.value)}
                />

                <button type="submit">Submit RSVP</button>
            </form>
            {submittedData && (
                <div id="confirmation">
                    <h2>Thank you for your RSVP!</h2>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Number of Attendees:</strong> {submittedData.numAttendees}</p>
                    <p><strong>Dietary Preferences:</strong> {submittedData.dietary || "None"}</p>
                    <p><strong>Bringing Guests:</strong> {submittedData.guests ? "Yes" : "No"}</p>
                </div>
            )}
        </div>
    );
}