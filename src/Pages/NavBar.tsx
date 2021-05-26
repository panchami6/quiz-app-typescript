import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useStyles} from "../theme";

export function NavBar(){
    const classes = useStyles();
    return(
        <div>
            <AppBar className = {classes.appBar} position="static">
                <Toolbar>
                    <Typography variant="h4" color = "secondary">
                        HolisticQuiz
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}