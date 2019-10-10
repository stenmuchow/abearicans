import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        flex: 1,
        minWidth: 300,
        maxWidth: 400,
        margin: 10,
    },
    media: {
        height: 200,
        width: '100%',
    },
});

export default function Site({ site }) {
    const classes = useStyles();

    const handleClick = () => {
        const a = document.createElement('a');
        a.href = site.url;
        a.target = '_blank';
        a.click();
    };
    return (
        <Card className={classes.card} onClick={handleClick}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={site.image}
                    title={site.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {site.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {site.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
