import React from 'react';
import axios from 'axios';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-google-autocomplete';

class LocationSearch extends React.Component {
  handlePlaceSelect = (place) => {
    const address = place.formatted_address;

    geocodeByAddress(address)
      .then((results) => {
        const { address_components } = results[0];

        let city, country, state;

        for (let component of address_components) {
          const { types } = component;

          if (types.includes('locality')) {
            city = component.long_name;
          } else if (types.includes('administrative_area_level_1')) {
            state = component.long_name;
          } else if (types.includes('country')) {
            country = component.long_name;
          }
        }

        console.log('Address:', address);
        console.log('City:', city);
        console.log('State:', state);
        console.log('Country:', country);
      })
      .catch((error) => console.error('Error', error));
  };

  render() {
    return (
      <div>
        <PlacesAutocomplete
          onChange={this.handleChange}
          onSelect={this.handlePlaceSelect}
        />
      </div>
    );
  }
}

export default LocationSearch;
