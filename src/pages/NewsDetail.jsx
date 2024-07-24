import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Image } from '@chakra-ui/react';

function NewsDetail() {
  const { id } = useParams();
  const article = JSON.parse(localStorage.getItem('readArticles')).find(item => item.id === id);

  return (
    <Box p={4}>
      <Heading>{article.title}</Heading>
      <Image src={article.urlToImage} alt={article.title} mt={4} />
      <Text mt={4}>{article.description}</Text>
    </Box>
  );
}

export default NewsDetail;
