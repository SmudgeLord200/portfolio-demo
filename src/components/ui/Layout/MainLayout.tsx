import { Box, CssBaseline, Fab, Toolbar } from "@mui/material";
import { Outlet } from "react-router";
import { StyledMainLayoutBox } from "../StyledComponents";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";
import ScrollToTop from "../ScrollToTop";
import { KeyboardArrowUpOutlined } from "@mui/icons-material";

interface Props {
    children?: React.ReactElement<unknown>;
}

const MainLayout = (props: Props) => {
    return (
        <Box>
            <CssBaseline />
            <HeaderLayout />

            {/* Spacer to prevent content from being hidden by the fixed AppBar */}
            <Toolbar id="back-to-top-anchor" />

            {/* Main content area */}
            <StyledMainLayoutBox as="main">
                <Outlet />
            </StyledMainLayoutBox>

            {/* Footer */}
            <FooterLayout />

            <ScrollToTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpOutlined />
                </Fab>
            </ScrollToTop>
        </Box>
    );
};

export default MainLayout;