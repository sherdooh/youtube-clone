import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Card from '../components/Cards';
import axios from "axios";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`/video/${type}`);
        console.log(res.data); 
        setVideos(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {Array.isArray(videos) && videos.length > 0 ? (
        videos.map((video) => (
          <Card key={video._id} video={video} />
        ))
      ) : (
        <p>No videos available</p>
      )}
    </Container>
  );
};

export default Home;
