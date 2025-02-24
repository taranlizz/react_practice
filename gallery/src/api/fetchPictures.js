import axios from "axios";

const API_KEY = "38537046-1dad650a5645b155ff397a43e";

export const PER_PAGE = 12;

export const fetchPictures = async (request, page) => {
  const params = new URLSearchParams({
    q: request.split("/")[1],
    page,
    key: API_KEY,
    image_type: "photo",
    orientation: "horizontal",
    per_page: PER_PAGE,
  });

  const response = await axios.get(`https://pixabay.com/api/?${params}`);

  return response.data;
};
