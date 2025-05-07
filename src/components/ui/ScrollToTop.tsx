import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

interface Props {
  children?: React.ReactElement<unknown>;
}

function ScrollToTop(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 100000 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default ScrollToTop;