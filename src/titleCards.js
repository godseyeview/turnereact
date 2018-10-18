import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import ReactJson from 'react-json-view'

const styles = {
  card: {
    maxWidth: '100%',
  },
  media: {
    height: '100%',
  },
};

class TitleCards extends React.Component {
  
  createCards = () => {
    const { classes } = this.props;
    let cards = []
    for (var key in this.props.titles) {
      cards.push(<Card className={classes.card} key={key}>      
        <CardActionArea>          
          <CardContent>
          <ReactJson src={this.props.titles[key]} collapsed='false' displayObjectSize="false" displayDataTypes="false" theme='paraiso' displayDataTypes='false' />
          </CardContent>
        </CardActionArea>
        
      </Card>       
      )
    }
    
    return cards;
  }
  
  render () {
    return (
      <div>
      {this.createCards()}
      </div>
    );
  }
}

TitleCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitleCards);