import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
	root: {
		//maxWidth: 345
	},
	media: {
		height: 400,
		width: 400
	}
});

export default function ImageCard({ src }) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={src} />
			</CardActionArea>
		</Card>
	);
}
