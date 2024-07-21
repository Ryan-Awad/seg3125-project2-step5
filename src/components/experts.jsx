import React, { Component } from 'react';
import Banner from './banner';
import SideBySideContainer from './sideBySideContainer';
import Card from './card';
import { InputGroup, Form, Button } from 'react-bootstrap';

class Experts extends Component {
  state = {
    date: null,
    time: null,

    experts: [
      {
        id: 1,
        name: 'Carol Klein',
        bio: {
          'en': 'Carol Klein is a British plantswoman, television presenter, and author. She has been a regular presenter on the BBC\'s "Gardeners\' World" and has her own gardening segment, "Life in a Cottage Garden." Carol Klein is known for her hands-on, practical approach to gardening and her deep knowledge of plant propagation and cultivation. She has written several books, including "Grow Your Own Garden" and "Making a Garden."',
          'fr': 'Carol Klein est une planteuse britannique, présentatrice de télévision et auteure. Elle a été une présentatrice régulière de l\'émission "Gardeners\' World" de la BBC et a son propre segment de jardinage, "Life in a Cottage Garden". Carol Klein est connue pour son approche pratique du jardinage et sa connaissance approfondie de la propagation et de la culture des plantes. Elle a écrit plusieurs livres, dont « Grow Your Own Garden » et « Making a Garden ».'
        }
      },
      {
        id: 2,
        name: 'Monty Don',
        bio: {
          'en': 'Monty Don is a well-known British horticulturist, writer, and broadcaster. He has been the lead presenter of the BBC\'s gardening program "Gardeners\' World" since 2003. Monty Don has also written numerous books on gardening, including "The Complete Gardener" and "Down to Earth." His expertise spans various aspects of gardening, including organic gardening, garden design, and the cultivation of ornamental plants and vegetables.',
          'fr': 'Monty Don est un horticulteur, écrivain et diffuseur britannique bien connu. Il est le principal présentateur de l\'émission de jardinage « Gardeners\' World » de la BBC depuis 2003. Monty Don a également écrit de nombreux livres sur le jardinage, notamment « The Complete Gardener » et « Down to Earth ». Son expertise couvre divers aspects du jardinage, notamment le jardinage biologique, l\'aménagement de jardins et la culture de plantes et de légumes ornementaux.'
        }
      },
      {
        id: 3,
        name: 'Piet Oudolf',
        bio: {
          'en': 'Piet Oudolf is a Dutch garden designer, nurseryman, and author. He is renowned for his naturalistic approach to garden design, emphasizing the use of perennial plants and grasses to create dynamic, sustainable landscapes. Oudolf\'s designs are celebrated for their seasonal interest and ecological value. He has worked on several high-profile projects, including the High Line in New York City and the Lurie Garden in Chicago. Oudolf has also authored several books, such as "Planting: A New Perspective" and "Designing with Plants."',
          'fr': 'Piet Oudolf est un jardinier, pépiniériste et auteur néerlandais. Il est réputé pour son approche naturaliste de la conception de jardins, mettant l\'accent sur l\'utilisation de plantes et de graminées vivaces pour créer des paysages dynamiques et durables. Les créations d\'Oudolf sont célébrées pour leur intérêt saisonnier et leur valeur écologique. Il a travaillé sur plusieurs projets de grande envergure, notamment la High Line à New York et le Lurie Garden à Chicago. Oudolf est également l\'auteur de plusieurs livres, tels que "Planting: A New Perspective" et "Designing with Plants".'
        }
      },
    ],
    
    language: 'en',
    locales: {
      'en': {
        scheduleErrorMsg: 'Make sure to fill out the date and time!',
        scheduleMsg: 'Schedule call with expert #%s at %s on %s!',
        header: 'Meet with an expert!',
        time: 'Time',
        scheduleBtn: 'Schedule Call'
      },
      'fr': {
        scheduleErrorMsg: 'Assurez-vous de remplir la date et l\'heure !',
        scheduleMsg: 'Planifiez un appel avec l\'expert #%s à %s sur %s !',
        header: 'Rencontrez un expert!',
        time: 'Temps',
        scheduleBtn: 'Planifier un appel'
      }
    }
  }

  getText = (key) => {
    return this.state.locales[this.state.language][key];
  }

  formatString = (template, ...args) => {
    return template.replace(/%s/g, () => args.shift());
  }

  scheduleCall = (expertId) => {
    if (!this.state.time || !this.state.date) {
      alert(this.getText('scheduleErrorMsg'));
    } else {
      alert(this.formatString(this.getText('scheduleMsg'), expertId, this.state.time, this.state.date));
    }
  }

  handleDateChange = (date) => {
    this.setState({date: date});
  }

  handleTimeChange = (time) => {
    this.setState({time: time});
  }

  toggleLanguage = () => {
    if (this.state.language === 'en')
      this.setState({language: 'fr'});
    else
      this.setState({language: 'en'})
  }

  render() { 
    return (
      <div>
        <Banner h='300px'/>
        <h1>{this.getText('header')}</h1><br />

        <div style={{textAlign: 'center'}}>
          <Button onClick={this.toggleLanguage}>{this.state.language === 'en' ? 'FR' : 'EN'}</Button>
        </div><br />

        <div style={{width: '500px', margin: '0 auto'}}>
          <InputGroup className="mb-3">
            <InputGroup.Text>Date</InputGroup.Text>
            <Form.Control
              type="date"
              onChange={(e) => this.handleDateChange(e.target.value)}
              aria-label="Date"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>{this.getText('time')}</InputGroup.Text>
            <Form.Control
              type="time"
              onChange={(e) => this.handleTimeChange(e.target.value)}
              aria-label={this.getText('time')}
            />
          </InputGroup>
        </div>

        <SideBySideContainer centerChildren childrenMargin="100px">
          {this.state.experts.map(e => {
            return <Card
              hasImg
              imgSrc={"./assets/expert" + e.id + ".jpg"}
              w="300px"
              title={e.name}
              desc={e.bio[this.state.language]}
              buttonText={this.getText('scheduleBtn')}
              buttonHandler={() => this.scheduleCall(e.id)}
            />
          })}
        </SideBySideContainer>
      </div>
    );
  }
}
 
export default Experts;