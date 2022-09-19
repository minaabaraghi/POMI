import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';
import { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import './master.css';
import MyCards from './MyCards';
import dataMovie from 'src/data/response.json';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Text from './../../components/Text/index';
import movies from 'src/services/movies';
import Box from '@mui/material/Box';
import { Button } from 'react-bootstrap';
import { SettingsSystemDaydreamSharp } from '@mui/icons-material';

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
  const [Movie, setMovie] = useState([]);
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(null);
  const [type, setType] = useState('movie');
  const filterCards = (event: any) => {
    // if (event.key !== 'Enter') return;
    if (title) {
      movies(title, year, type).then((res: any) => {
        if (res.Response === 'True') setMovie(res.Search);
        else setMovie([]);
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>User Details - Management</title>
      </Helmet>
      <div className="conatiner">
        <input
          className="searchBoxMovie"
          placeholder="title..."
          type="Text"
          onChange={(e: any) => setTitle(e.target.value)}
        />
        <input
          className="searchBoxMovieYear"
          placeholder="Year..."
          type="number"
          min="1990"
          max="2050"
          onChange={(e) => setYear(e.target.value)}
        />
        <Box sx={{ Width: '60%' }}>
          <FormControl fullWidth>
            <Select
              id="demo-simple-select-helper"
              value={type}
              label="type"
              onChange={(e: any) => setType(e.target.value as string)}
            >
              <MenuItem value={'movie'}>movie</MenuItem>
              <MenuItem value={'series'}>series</MenuItem>
              <MenuItem value={'episode'}>episode</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button
          onClick={filterCards}
          style={{ width: '60%', fontSize: '.78rem', marginLeft: '5%' }}
        >
          advance Search
        </Button>
      </div>

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
