import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ImageCard from './ImageCard';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	}
}));

export default function ExpPanel(props) {
	const classes = useStyles();
	const src = props.src;

	return (
		<div className={classes.root}>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
					<Typography className={classes.heading}>{props.heading}</Typography>
				</AccordionSummary>
				<AccordionDetails />
				<Grid spacing={2} container direction="row" justify="center" alignItems="center">
					<Grid item={true} xs={12} md={6} lg={3}>
						{' '}
						<ImageCard src={`${src}/1.jpg`} />
					</Grid>
					<Grid item={true} xs={12} md={6} lg={3}>
						{' '}
						<ImageCard src={`${src}/2.jpg`} />
					</Grid>
					<Grid item={true} xs={12} md={6} lg={3}>
						{' '}
						<ImageCard src={`${src}/3.jpg`} />
					</Grid>
				</Grid>
				<Grid spacing={2} container direction="row" justify="center" alignItems="center">
					<Grid item={true} xs={12} md={6} lg={3}>
						{' '}
						<ImageCard src={`${src}/4.jpg`} />
					</Grid>
					<Grid item={true} xs={12} md={6} lg={3}>
						{' '}
						<ImageCard src={`${src}/5.jpg`} />
					</Grid>
					<Grid item={true} xs={12} md={6} lg={3}>
						{' '}
						<ImageCard src={`${src}/6.jpg`} />
					</Grid>
				</Grid>
			</Accordion>
		</div>
	);
}
