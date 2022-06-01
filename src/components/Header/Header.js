import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Formatlistbulleted from '@mui/icons-material/FormatListBulleted';
import styling from "./Header.module.css"

const ResponsiveAppBar = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="100%" className={styling.myOwn}>
        <Toolbar >
          <Box sx={{
            display:
              { xs: 'contents', md: 'flex' }, mr: "auto", color: "black",
            marginLeft: -3, mt: 3, mb: "auto", flexWrap: "wrap"
          }}
            position="static"
          >
            <Formatlistbulleted sx={{
              display:
                { xs: 'content', md: 'flex' }, mr: 1, color: "black", flexWrap: "wrap",
              // marginRight: "auto",
              // marginLeft: "auto"
              marginTop: 0.5,
            }} />
            <Typography
              variant="h6"

              component="a"
              // flexGrow={0}
              href="/"
              sx={{
                mr: 2,
                display: { xs: "content", md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                marginRight: "auto",
                justifyContent: "space-between",
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Dashboard
            </Typography>
          </Box>

          <Box sx={{
            flexGrow: 0,
            alignItems: 'flex-end',
            backgroundColor: '#E7FAFF',
            borderRadius: '50%',
          }}
            Wrap
            mt={1}
          >
            <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/a668/e417/34ff6709e23f91971c6c037ac01880b5?Expires=1655078400&Signature=gOILhxkgnCTTjD~FXf58WR1Lm~M4d58nB5nkDNsqIRYUerf-kSjp0SoCuUJ4xeMG0kg18sEuYidmTW2I-Rzi-QQNhC~VdJrTE3BWoAfKBJBCsG-OOgDm95BLuEVP1SyvdKTcgpJ0aYa9bx6t0SblJZDyz8eRggrolQUNubxJuLGHD9eCGw9COgtVNDe0u~MZhKys-4DBgWHXhZhj~yC0TrmezGhp2T-FfSqxm8CRiSMbrriFttphTkh7AGEh5Uq75ilOxjWKmlHr5JTAgZQBvcgzS1DmTYm5b9LxFFeGmlHyZ1A6FZIijiXodUIYElZHnY-hp8ZhlkXYRB17qcxm5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
          </Box>
          <Box style={{
            fontFamily: 'Inter',
            fontSize: 14,
            lineHeight: 0,
            padding: 4,
          }}
            flexWrap="wrap"
            mt={1}
            ml={1}
            mb={-0.5}
            color="red" >
            <h6 style={{
              color: " #1B1D21",
              fontWeight: 700,
              fontStyle: "normal",
            }}>happy User</h6>
            <h6 style={{
              color: "#808191",
              fontWeight: 400,
            }}>Loggy Fog</h6>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
