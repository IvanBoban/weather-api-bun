import config from "../../config/config";

const doINeedUmbrella = async (position: position) => {
  const targetURL = new URL(config.BASE_WEATHER_ENDPOINT);
  targetURL.pathname = "/v1/forecast.json";
  targetURL.searchParams.append("key", config.WEATHER_API_KEY!);
  targetURL.searchParams.append(
    "q",
    `${position.latitude},${position.longitude}`
  );
  const res = await fetch(targetURL.toString());
  const body = await res.json();
  return body.forecast.forecastday[0].hour;
};

export default doINeedUmbrella;
