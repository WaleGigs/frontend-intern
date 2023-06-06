import React, { useState } from 'react';
// import './App.css';
const addresses = require('./outputs.json');
function Fm() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        // Filter suggestions based on the search term
        const filteredSuggestions = addresses.filter((address) =>
            address['Local address'].toLowerCase().includes(value.toLowerCase())
        );

        // Sort the suggestions based on their similarity to the search term
        filteredSuggestions.sort((a, b) => {
            const similarityA = a['Local address'].toLowerCase().indexOf(value.toLowerCase());
            const similarityB = b['Local address'].toLowerCase().indexOf(value.toLowerCase());
            return similarityA - similarityB;
        });

        // Set the suggestions to a maximum of 5
        const limitedSuggestions = filteredSuggestions.slice(0, 5);

        setSuggestions(limitedSuggestions);
    };

    const handleSuggestionClick = (address) => {
        setSearchTerm(address['Local address']);
        setSuggestions([]);
    };

    return (
        <div className="App">
            <h1>Address Autocomplete</h1>
            <div className="autocomplete-container">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Enter an address"
                />
                <ul>
                    {suggestions.map((address, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(address)}>
                            {address['Local address']}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
 export default Fm