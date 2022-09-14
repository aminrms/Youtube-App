import axios from "axios";

const baseUrl = "https://youtube-v31.p.rapidapi.com";
export const fetchAPI = async (
  query,
  part,
  url,
  id,
  order,
  relatedToVideoId,
  type,
  videoId
) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, {
    params: {
      id: id,
      q: query,
      part: part,
      maxResults: "120",
      channelId: id,
      order: order,
      relatedToVideoId: relatedToVideoId,
      type: type,
      videoId: videoId,
    },
    headers: {
      "X-RapidAPI-Key": "17f885e099mshd881a219fafa7ebp150078jsn68c74ddc461c",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  });
  return data;
};

// "X-RapidAPI-Key": "7a0b99756bmshe83324ffd2f070dp160b7ejsn2f759834c6b3",
// "X-RapidAPI-Key": "851c2e8d29msh8785173d362396bp1931cbjsn5ffe97c9c380",
// "X-RapidAPI-Key":"17f885e099mshd881a219fafa7ebp150078jsn68c74ddc461c"