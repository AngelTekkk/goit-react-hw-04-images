import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export default async function PixabayAPI(
  searchQuery = '',
  currentPage = 1,
  perPage = 12
) {
  const API_KEY = '?key=28534250-bbba7677f72b19e29ec2a8926&';

  const OPT = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  try {
    const response = await axios.get(
      `${API_KEY}&${OPT}&q=$${searchQuery}&page=${currentPage}&per_page=${perPage}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
