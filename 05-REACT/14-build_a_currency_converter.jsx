const { useState, useMemo } = React;

export function CurrencyConverter() {
    // Numbers from July 12th, 2025
    const currencyMapping = {
        USD: 1.00,
        GBP: 0.74080,
        EUR: 0.85540,
        JPY: 147.32501,
        CHF: 0.79719,
        CAD: 1.36995
    };

    const [fromAmount, setFromAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");

    // Step 1: Convert to USD and memoize
    const usdAmount = useMemo(() => {
        if (!fromAmount) return 0;
        return fromAmount / currencyMapping[fromCurrency];
    }, [fromAmount, fromCurrency]);

    // Step 2: Convert USD to target currency
    const convertedAmount = usdAmount && toCurrency
        ? (usdAmount * currencyMapping[toCurrency]).toFixed(2)
        : "";

    return (
        <div className="converter-container">
            <h1>Currency Converter</h1>
            <h2>{fromCurrency} to {toCurrency} Conversion</h2>
            <input
                type="number"
                min="0"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                placeholder={`Enter Amount in ${fromCurrency}`}
            />
            <p>Start Currency</p>
            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
            >
                {Object.keys(currencyMapping).map((key) => (
                    <option key={key} value={key}>
                        {key}
                    </option>
                ))}
            </select>
            <p>Target Currency</p>
            <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
            >
                {Object.keys(currencyMapping).map((key) => (
                    <option key={key} value={key}>
                        {key}
                    </option>
                ))}
            </select>
            <p>
                {fromAmount && `Converted amount: ${convertedAmount} ${toCurrency}`}
            </p>
        </div>
    );
}