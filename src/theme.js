import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
    overrides: {
        MuiAccordionSummary: {
            content: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
    }
})