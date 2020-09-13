import React, { useState, useEffect } from 'react';
//import { setData, deleteData, getData } from '../../api/screensApi';
//import axios from 'axios';
//import OldMc from './OldMc.mp3';
import infobutt from './InformationButton.png';
import goldfish from './goldfish.jpg';
import mario from './mario.gif';
import peach from './peach.gif';

const Dashboard = (props) => {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [countDown, setCountDown] = useState(300);
  const [page, setPage] = useState(1);
  const [highlight1, setHighlight1] = useState('rgba(0, 0, 0, 0.75)');
  const [highlight2, setHighlight2] = useState('rgba(0, 255, 255, 0.75)');

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
      setHighlight2('rgba(231, 149, 237, 0.35)');
      setHighlight1('rgba(231, 149, 237, 0.75)');
    } else if (page === 2) {
      setHighlight1('rgba(231, 149, 237, 0.35)');
      setHighlight2('rgba(231, 149, 237, 0.75)');
    }
  }, [page, countDown]);

  return (
    <>
      <div style={{ zIndex: '100000000000' }}>
        <div style={{ marginLeft: '3rem' }}>
          <button
            style={{ ...styles.interactive, zIndex: '100000000001' }}
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
                  right: '1%',
                  top: '50%',
                  borderRadius: '10px 100px / 120px',
                  zIndex: '100000000001',
                }}
                onClick={() => {
                  setPage(1);
                }}
              >
                1
              </button>
              <button
                style={{
                  ...styles.interactive,
                  backgroundColor: `${highlight2}`,
                  right: '1%',
                  top: '58%',
                  borderRadius: '10px 100px / 120px',
                  zIndex: '100000000001',
                }}
                onClick={() => {
                  setPage(2);
                }}
              >
                2
              </button>
              <div
                style={{
                  ...styles.dashboard,
                  zIndex: '100000',
                  border: 'solid',
                  borderRightColor: 'grey',
                  borderWidth: '10px',
                  borderLeft: 'none',
                  opacity: '90%',
                }}
              >
                {page === 1 ? (
                  <>
                    <div
                      style={{
                        marginLeft: '5%',
                        marginRight: '5%',
                        fontFamily: 'Trebuchet MS, sans-serif',
                      }}
                    >
                      <h3 style={{ fontWeight: 'bold' }}>
                        Welcome to Rich Kim's Live Performance!
                      </h3>

                      {countDown > 0 ? (
                        <>
                          <p style={{ textAlign: 'center' }}>
                            Prepare yourself for an event filled with hype and
                            heartbreak! Only...
                          </p>
                          <p style={{ textAlign: 'center' }}>
                            <span style={{ fontSize: '5rem' }}>
                              {countDown}
                            </span>
                            <div>until we take off...</div>
                          </p>
                          <div
                            style={{
                              alignItems: 'center',
                              marginTop: '2rem',
                              opacity: '75%',
                            }}
                          >
                            <img
                              src={peach}
                              style={{ marginLeft: '4rem', width: '25%' }}
                            />
                            <img
                              src={mario}
                              style={{ marginLeft: '1rem', width: '25%' }}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <p>Now playing: Goldfish</p>
                          <img
                            src={goldfish}
                            style={{ width: '25%', display: 'center' }}
                          />
                        </>
                      )}
                    </div>
                  </>
                ) : page === 2 ? (
                  <>
                    <div
                      style={{
                        marginLeft: '5%',
                        marginRight: '6%',
                        padding: '1.75rem',
                        textAlign: 'center',
                        marginTop: '1rem',
                      }}
                    >
                      <p>
                        Rich Kim is a 19 year old singer, song writer, and
                        producer based in Baltimore, MD.
                      </p>
                      <p style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                        <h3 style={{ textDecoration: 'underline' }}>
                          Featured Songs
                        </h3>
                        <p>3:02 - Goldfish </p>
                        <p>10:34 - Bye </p>
                        <p>15:58 - Are you Fine? </p>
                        <p>21:32 - Bubbly </p>
                      </p>
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
    border: '5x solid',
    borderWidth: '2rem',
    borderRadius: '10px 100px / 120px',
    borderColor: 'rbga(16, 3, 241, 0.9)',
    backgroundColor: 'rgba(165, 55, 253, .7)',
    right: '6%',
    position: 'absolute',
    top: '20%',
    border: 'none',
    outline: 'none',
  },
  interactive: {
    width: '4%',
    height: '7%',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'transparent',
    right: '1%',
    position: 'absolute',
    top: '79%',
    border: 'none',
    outline: 'none',
  },
};

export default Dashboard;
