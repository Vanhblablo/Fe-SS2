import React from 'react';
import { Typography } from '@mui/material';

function Head() {
  return (
    <section className="head">
      <div className="container d_flex">
        <div className="left row">
          <i className="fa fa-phone" />
          <Typography> +88012 3456 7894</Typography>
          <i className="fa fa-envelope" />
          <Typography> support@ui-lib.com</Typography>
        </div>
        <div className="right row RText">
          <Typography>Theme FAQ"s</Typography>
          <Typography>Need Help?</Typography>
          <span>🏳️‍⚧️</span>
          <Typography>EN</Typography>
          <span>🏳️‍⚧️</span>
          <Typography>USD</Typography>
        </div>
      </div>
    </section>
  );
}

export default Head;
