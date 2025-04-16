import { useState, useEffect } from "react";
import axios from "axios";

const useLocationByIP = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const ipResponse = await axios.get(
          "https://api64.ipify.org?format=json"
        );

        const userIP = ipResponse.data.ip;

        const locationResponse = await axios.get(
          `https://ipapi.co/${userIP}/json/`
        );
        console.log("locationResponse", locationResponse);

        setLocation({
          ip: userIP,
          city: locationResponse.data.city,
          region: locationResponse.data.region,
          country: locationResponse.data.country_name,
          pincode: locationResponse.data.postal,
          latitude: locationResponse.data.latitude,
          longitude: locationResponse.data.longitude,
          timezone: locationResponse.data.timezone,
          isp: locationResponse.data.org,
        });
      } catch (err) {
        setLocation(null);
      }
    };

    fetchLocation();
  }, []);

  return location;
};

export default useLocationByIP;
