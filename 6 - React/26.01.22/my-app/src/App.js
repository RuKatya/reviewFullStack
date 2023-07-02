import { AppBar, Card, CardContent, CardMedia, Toolbar, Typography, Button } from '@mui/material';
import './App.css';
import { listName } from './ListNames'

function App() {

    const pages = ['Products', 'Pricing', 'Blog'];

    return (
        <>
            <AppBar
                position='static'
            >
                <Toolbar>
                    <Typography variant='h5' component="span" sx={{ flexGrow: 1, color: "red" }}>
                        List
                    </Typography>
                    <Typography sx={{ flexGrow: 2 }}>
                        List1
                    </Typography>
                    <Typography sx={{ flexGrow: 1 }}>
                        List2
                    </Typography>
                </Toolbar>
            </AppBar>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>

                {listName.map(item =>
                    <Card sx={{ maxWidth: 345, margin: "5%" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.img}
                            alt={item.name}
                        >
                        </CardMedia>
                        <CardContent>
                            <Typography variant='h6' >
                                {item.name}
                            </Typography>
                            <Typography>
                                Age is: {item.age}
                            </Typography>
                            <Button   onClick={() => {
                                alert('clicked');
                              }}
                            variant="outlined" href="https://www.ynet.co.il/home/0,7340,L-8,00.html">
                              ynet
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </>
    );
}

export default App;
