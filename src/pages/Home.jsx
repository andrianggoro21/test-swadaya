
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Input, Grid, GridItem, Skeleton, Heading } from '@chakra-ui/react';
import NewsItem from '../components/NewsItem';

const API_KEY = 'df038ea284c9464782416052da2c9f6d'; // Ganti dengan API key dari newsapi.org

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${API_KEY}`)
      .then(response => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  const filteredNews = news.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={4}>
      <Heading mb={4}>Berita Terbaru</Heading>
      <Input
        placeholder="Cari berita..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb={4}
      />
      {loading ? (
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          {[...Array(10)].map((_, i) => (
            <Skeleton height={i % 6 === 0 ? "400px" : "200px"} width="100%" key={i} />
          ))}
        </Grid>
      ) : (
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          {filteredNews.map((article, index) => {
            const isLarge = index % 4 === 0;
            return (
              <GridItem colSpan={isLarge ? 3 : 1} rowSpan={isLarge ? 2 : 1} key={index}>
                <NewsItem {...article} />
              </GridItem>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}

export default Home;
