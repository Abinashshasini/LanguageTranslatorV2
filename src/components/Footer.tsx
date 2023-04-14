'use client';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Tooltip from '@mui/material/Tooltip';

const Footer: React.FC = () => {
  // * Function to naviagte the user to my link's * //
  const handleNavigateToSocilaMedia = (_media: string) => {
    let link = '';
    if (_media === 'fb') {
      link = 'https://www.facebook.com/abinash.shasini';
    } else if (_media === 'tw') {
      link = 'https://twitter.com/ShasiniAbinash';
    } else if (_media === 'git') {
      link = 'https://github.com/Abinashshasini';
    } else {
      link = 'https://www.linkedin.com/in/abinash-shasini';
    }
    window.open(link);
  };
  return (
    <footer className="footer">
      <p style={{ fontSize: '1rem' }} className="footer__heading">
        Abinash Shasini
      </p>

      <div className="socialMedia">
        <Tooltip
          title="Facebook"
          arrow
          onClick={() => handleNavigateToSocilaMedia('fb')}
        >
          <FacebookIcon style={{ color: '#3b5998' }} />
        </Tooltip>
        <Tooltip
          title="Git HUb"
          arrow
          onClick={() => handleNavigateToSocilaMedia('git')}
        >
          <GitHubIcon style={{ color: '#4078c0' }} />
        </Tooltip>
        <Tooltip
          title="Linkedin"
          arrow
          onClick={() => handleNavigateToSocilaMedia('ld')}
        >
          <LinkedInIcon style={{ color: '#0e76a8' }} />
        </Tooltip>
        <Tooltip
          title="instagram"
          arrow
          onClick={() => handleNavigateToSocilaMedia('tw')}
        >
          <TwitterIcon style={{ color: '#00acee' }} />
        </Tooltip>
      </div>
      <p className="footer__heading">
        Made with <span style={{ color: 'red' }}>❤️</span> and React.js
      </p>
    </footer>
  );
};

export default Footer;
