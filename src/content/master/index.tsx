import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';
import { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import './master.css';
// import ProfileCover from './ProfileCover';
// import RecentActivity from './RecentActivity';
// import Feed from './Feed';
// import PopularTags from './PopularTags';
import MyCards from './MyCards';
import dataMovie from 'src/data/response.json';
// import Addresses from './Addresses';
import Text from './../../components/Text/index';
import movies from 'src/services/movies';

function ManagementUserProfile() {
  const user = {
    savedCards: 7,
    name: 'Catherine Pike',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: '/static/images/avatars/4.jpg',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
    jobtitle: 'Web Developer',
    location: 'Barcelona, Spain',
    followers: '465'
  };
  const [allMovie, setAllMovie] = useState([]);
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    // movies({ search: 'titanic' }).then((res: any) => {
    //   setAllMovie(res.Search);
    //   setMovie(res.Search);
    //   console.log('res', res.Search);
    // })

  }, []);

  const filterCards = (event: any) => {
    if (event.key !== 'Enter') return;
    
    movies({ search: event.target.value.toLowerCase() }).then((res: any) => {
      setAllMovie(res.Search);
      setMovie(res.Search);
    })
    // const value = event.target.value.toLowerCase();
    // const filterMovie = allMovie.filter((movie) =>
    //   (movie.Title.toLowerCase().includes(value))
    // );
    // setMovie(filterMovie);

  };

  return (
    <>
      <Helmet>
        <title>User Details - Management</title>
      </Helmet>
      <input
        className="searchBoxMovie"
        placeholder="search..."
        onKeyDown={filterCards}
        type="Text"
      />
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            {/* {<ProfileCover user={user} />} */}
          </Grid>
          <Grid item xs={12} md={4}>
            {/* [<RecentActivity />] */}
          </Grid>
          <Grid item xs={12} md={8}>
            {/* <Feed /> */}
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <PopularTags /> */}
          </Grid>
          <Grid item xs={12} md={7}>
            {/* <MyCards /> */}
          </Grid>
          <Grid item xs={12} md={5}>
            {/* <Addresses /> */}
          </Grid>
          <MyCards dataMovie={Movie} />
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagementUserProfile;
