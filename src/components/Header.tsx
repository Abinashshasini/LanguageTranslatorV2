'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import TranslateIcon from '@mui/icons-material/Translate';

const Header: React.FC = () => {
  // * Function to navigate the user to git hub * //
  const handleNavigateToGithub = () => {
    window.open('https://github.com/Abinashshasini/LanguageTranslator');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <TranslateIcon />
          </IconButton>
          <div className="headerContainer">
            <h1>Language Translator</h1>
          </div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleNavigateToGithub}
          >
            <GitHubIcon fontSize="medium" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
