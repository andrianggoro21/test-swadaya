import { Box, Image, Text, Link } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function NewsItem({ title, urlToImage, url, author, publishedAt }) {
  const handleReadArticle = () => {
    let readArticles = JSON.parse(localStorage.getItem('readArticles')) || [];
    const newArticle = { id: title, title, urlToImage, url, author, publishedAt };

    if (!readArticles.find(article => article.id === newArticle.id)) {
      readArticles.push(newArticle);
      localStorage.setItem('readArticles', JSON.stringify(readArticles));
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" onClick={handleReadArticle}>
      <Image src={urlToImage} alt={title} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text fontWeight="bold" textTransform="uppercase" fontSize="sm" color="teal.600">
            {author}
          </Text>
          <Text ml="2" fontSize="xs">
            {new Date(publishedAt).toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })}
          </Text>
        </Box>
        <Link href={url} isExternal>
          <Text mt="2" fontSize="lg" fontWeight="semibold" lineHeight="short">
            {title}
          </Text>
        </Link>
      </Box>
    </Box>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  urlToImage: PropTypes.string,
  url: PropTypes.string.isRequired,
  author: PropTypes.string,
  publishedAt: PropTypes.string.isRequired,
};

export default NewsItem;

