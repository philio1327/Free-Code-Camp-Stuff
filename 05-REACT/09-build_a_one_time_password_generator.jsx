const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
    // State Management
    const [otp, setOtp] = useState("");
    const [timeLeft, setTimeLeft] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if (!isActive) return;

        let timer;
        if (isActive && timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else if (timeLeft === 0 && isActive) {
            setIsActive(false);
            if (timerRef.current) {
                timerRef.current.textContent =
                    "OTP expired. Click the button to generate a new OTP.";
            }
        }
        return () => clearTimeout(timer);
    }, [timeLeft, isActive]);

    const handleGenerateOtp = () => {
        const newOtp = Math.floor(Math.random() * 1000000)
            .toString()
            .padStart(6, "0");
        setOtp(newOtp);
        setTimeLeft(5);
        setIsActive(true);

        // If <p> doesn't exist yet, create it
        if (!timerRef.current) {
            const p = document.createElement("p");
            p.id = "otp-timer";
            document.querySelector(".container").appendChild(p);
            timerRef.current = p;
        }

        // Set the initial text
        timerRef.current.textContent = `Expires in: 5 seconds`;
    };

    // Update timer text manually
    useEffect(() => {
        if (isActive && timerRef.current && timeLeft > 0) {
            timerRef.current.textContent = `Expires in: ${timeLeft} seconds`;
        }
    }, [timeLeft]);


    return (
        <div className="container">
            <h1 id="otp-title">OTP Generator</h1>
            <h2 id="otp-display">
                {otp ? `${otp}` : "Click 'Generate OTP' to get a code"}
            </h2>

            <button
                id="generate-otp-button"
                onClick={handleGenerateOtp}
                disabled={isActive}
            >Generate OTP</button>
        </div>
    )
};