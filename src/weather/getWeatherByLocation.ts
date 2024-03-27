import config from "../../config/config";

const getWeatherByLocation = async (position: position) => {
  console.log(position);
  const targetURL = new URL(config.BASE_WEATHER_ENDPOINT);
  targetURL.pathname = "/current.json";

  targetURL.searchParams.append("key", config.WEATHER_API_KEY!);
  targetURL.searchParams.append(
    "q",
    `${position.latitude},${position.longitude}`
  );
  const res = await fetch(targetURL.toString());
  const body = await res.json();
  console.log(body);
  return body;
};

export default getWeatherByLocation;
