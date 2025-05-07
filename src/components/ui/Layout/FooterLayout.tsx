import { Typography } from "@mui/material"
import { StyledFooter } from "../StyledComponents"

const FooterLayout = () => {
    return (
        <StyledFooter as="footer">
            <Typography variant="caption">
                &copy; {new Date().getFullYear()} SmudgeLord200. All rights reserved.
            </Typography>
        </StyledFooter>
    )
}

export default FooterLayout