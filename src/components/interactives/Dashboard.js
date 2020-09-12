import React, { useState, useEffect } from 'react';

const Dashboard = (props) => {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [countDown, setCountDown] = useState(300);
  const [page, setPage] = useState(1);
  const [highlight1, setHighlight1] = useState('rgba(0, 0, 0, 0.75)');
  const [highlight2, setHighlight2] = useState('rgba(0, 255, 255, 0.75)');
  useEffect(() => {
    if (countDown > 0) {
      setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
    } else {
      // code for initiating starting sequence
    }

    if (page === 1) {
      setHighlight1('rgba(0, 0, 0, 0.75)');
      setHighlight2('rgba(0, 255, 255, 0.75)');
    } else if (page === 2) {
      setHighlight2('rgba(0, 0, 0, 0.75)');
      setHighlight1('rgba(0, 255, 255, 0.75)');
    }
  }, [countDown, page]);

  return (
    <>
      <div style={{ marginLeft: '3rem', zIndex: '100000' }}>
        <button
          style={{ ...styles.interactive, zIndex: '100000' }}
          onClick={() => {
            setDashboardOpen(!dashboardOpen);
          }}
        >
          ButtonOpen
        </button>

        {dashboardOpen ? (
          <>
            <button
              style={{
                ...styles.interactive,
                backgroundColor: `${highlight1}`,
                marginLeft: '3rem',
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
                marginLeft: '6rem',
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
                  <p>Welcome and get HYPED!!!!</p>
                  <p>
                    We're taking you on a ride that will break your heart...
                  </p>
                  {countDown > 0 ? (
                    <p>{countDown} until we take off...</p>
                  ) : (
                    <p>Welcome to the show....</p>
                  )}
                </>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

const styles = {
  dashboard: {
    width: '25%',
    height: '50%',
    color: 'white',
    backgroundColor: 'rgba(255, 255, 0, 0.5)',
    marginLeft: '-0.5rem',
    position: 'absolute',
    top: '25%',
  },
  interactive: {
    width: '5%',
    height: '5%',
    color: 'white',
    backgroundColor: 'rgba(0, 255, 255, 0.75)',
    marginLeft: '-0.5rem',
    position: 'absolute',
    top: '20%',
  },
};

export default Dashboard;
