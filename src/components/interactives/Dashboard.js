import React, { useState, useEffect } from 'react';
//import { setData, deleteData, getData } from '../../api/screensApi';
//import axios from 'axios';
//import OldMc from './OldMc.mp3';
import infobutt from './InformationButton.png';

const Dashboard = (props) => {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [countDown, setCountDown] = useState(300);
  const [page, setPage] = useState(1);
  const [highlight1, setHighlight1] = useState('rgba(0, 0, 0, 0.75)');
  const [highlight2, setHighlight2] = useState('rgba(0, 255, 255, 0.75)');
  const [playing, setPlaying] = useState('Old McDonald');

  // const getCountDown = async () => {
  //   return await getData();
  // };
  useEffect(() => {
    //let countDown = 10;
    // getData().then((value) => {
    //   countDown = value[0];
    //   console.log(countDown);
    // });
    //deleteData();
    if (countDown > 0) {
      setTimeout(() => {
        setCountDown(countDown - 1);
        //axios.delete('http://localhost:8081/api/screens', { countDown: 300 });
        // setData({
        //   id: 1,
        //   hearts: [],
        //   countDown: 69,
        //   __vs: 0,
        //   _id: '5f5c61e1ab3f4e2f88789a66',
        // });
      }, 1000);
    } else {
      // code for initiating starting sequence
      // Smoke, lights,
    }

    if (page === 1) {
      setHighlight1('rgba(0, 0, 0, 0.75)');
      setHighlight2('rgba(0, 255, 255, 0.75)');
    } else if (page === 2) {
      setHighlight2('rgba(0, 0, 0, 0.75)');
      setHighlight1('rgba(0, 255, 255, 0.75)');
    }
  }, [page, countDown]);

  return (
    <>
      <div style={{ zIndex: '100000' }}>
        <div style={{ marginLeft: '3rem', zIndex: '100000' }}>
          <button
            style={{ ...styles.interactive, zIndex: '100000000' }}
            onClick={() => {
              setDashboardOpen(!dashboardOpen);
            }}
          >
            <img src={infobutt} />
          </button>

          {dashboardOpen ? (
            <>
              <button
                style={{
                  ...styles.interactive,
                  backgroundColor: `${highlight1}`,
                  marginLeft: '69.8rem',
                  top: '24%',
                  zIndex: '100000',
                }}
                onClick={() => {
                  setPage(1);
                }}
              >
                Page1
              </button>
              <button
                style={{
                  ...styles.interactive,
                  backgroundColor: `${highlight2}`,
                  marginLeft: '66.7rem',
                  top: '24%',
                  zIndex: '100000',
                }}
                onClick={() => {
                  setPage(2);
                }}
              >
                Page2
              </button>
              <div style={{ ...styles.dashboard, zIndex: '100000' }}>
                {page === 1 ? (
                  <>
                    <div style={{ marginLeft: '5%', marginRight: '5%' }}>
                      <p>Welcome to the stream!!!!</p>
                      <p>
                        We're taking you on a ride that will break your heart...
                      </p>
                      {countDown > 0 ? (
                        <p>{countDown} until we take off...</p>
                      ) : (
                        <>
                          <p>Now playing: {playing}</p> // replace with song
                          info, "playing right now"
                          <p>Playtime: </p>
                        </>
                      )}
                    </div>
                  </>
                ) : page === 2 ? (
                  <>
                    <div style={{ marginLeft: '5%', marginRight: '5%' }}>
                      <p>
                        Rich Kim is a 19 year old singer, song writer, and
                        producer based in Baltimore, MD. He's still looking for
                        the one. DMs are open uwu X3.
                      </p>
                      <p>Socials:</p>
                      <p>Instagram: </p>
                      <p>Spotify:</p>
                      <p>Youtube:</p>
                    </div>
                  </>
                ) : null}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

const styles = {
  dashboard: {
    width: '25%',
    height: '60%',
    color: 'white',
    borderRadius: "10px 100px / 120px",
    backgroundColor: 'rgba(165, 55, 253, .7)',
    marginLeft: '41rem',
    position: 'absolute',
    top: '20%',
    border: 'none',
    outline: 'none',
  },
  interactive: {
    width: '4%',
    height: '7%',
    color: 'white',
    backgroundColor: 'transparent',
    marginLeft: '57rem',
    position: 'absolute',
    top: '79%',
    border: 'none',
    outline: 'none',
  },
};

export default Dashboard;
