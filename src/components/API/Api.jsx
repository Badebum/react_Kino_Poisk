import axios from 'axios';

const baseURL = 'https:pixabay.com/api/';
const apiKey = '24292028-9ebf5f04d4d99405c3dd4ed49';

const fetchHits = ({ currentPage = 1, searchQuery = '', pageSize = 3 }) => {
  return axios
    .get(
      `${baseURL}?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(response => response.data.hits);
};

export default { fetchHits };
