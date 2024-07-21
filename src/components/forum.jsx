import React, { Component } from 'react';
import ForumPost from './forumPost';
import { Button, Form, Container } from 'react-bootstrap';

class Forum extends Component {
  state = {
    name: null,
    msg: null,
    forumMessages: [
      {
        author: "John Doe",
        body: "Just planted my first vegetable garden today! I decided to go with tomatoes, peppers, and carrots. It was a bit overwhelming at first, trying to figure out the right soil mix and spacing for each plant, but I think I managed okay. I’m particularly excited about the heirloom tomato variety I chose; I’ve heard they have incredible flavor. Fingers crossed they all thrive. Any tips for a beginner? Especially when it comes to watering schedules and pest control? I want to make sure I’m doing everything I can to help them grow strong and healthy.",
        time: "July 12, 2024, 3:45 PM"
      },
      {
        author: "Sam Woods",
        body: "Does anyone have experience with growing herbs indoors? I’m thinking of starting a small herb garden in my kitchen. I have a sunny windowsill that gets a lot of light in the morning, so I’m hoping that will be enough. I’m considering starting with basil, parsley, and mint. Are these good choices for a beginner? I’ve read that some herbs can be a bit finicky indoors. Also, what kind of pots should I use? I’ve seen some cute ceramic ones, but I’m not sure if they’re the best option. Any advice would be greatly appreciated!",
        time: "September 8, 2023, 10:30 AM"
      },
      {
        author: "Lisa Smith",
        body: "I've had my succulents for a few months now, and they’re doing great! I was a bit worried at first because I have a tendency to forget to water plants, but succulents are so low maintenance. I have a mix of varieties, including echeveria, jade plant, and haworthia. They’re all in a sunny spot by the window, and I water them about once every two weeks. I even propagated a few of them, and it’s so rewarding to see the new little plants growing. Does anyone have tips for keeping them happy long-term? I’d love to hear more about fertilizing and repotting.",
        time: "November 25, 2025, 7:00 PM"
      },
      {
        author: "Stacy White",
        body: "What’s the best time of year to plant a new tree in your yard? I’ve been considering adding an apple tree to our garden. I want to make sure it gets off to a good start and grows well. I’ve read that early spring or late fall are the best times, but I’m not sure which would be better in my region. Also, any recommendations on specific apple varieties that do well in a home garden? I’m looking for something that’s relatively easy to care for and produces good fruit. Any tips on planting techniques or care would be much appreciated!",
        time: "March 1, 2022, 6:15 AM"
      },
      {
        author: "Emily Whitney",
        body: "I love container gardening on my balcony. This year I added some strawberries, and they’re already starting to flower. It’s so exciting to see the little white blooms turning into tiny green berries. I’ve been using a mix of compost and potting soil, and I think it’s really helping. I’ve also been diligent about watering them regularly and making sure they get plenty of sunlight. Does anyone else grow strawberries in containers? I’d love to hear about your experiences and any tips you have for getting a good harvest. Also, do you recommend any specific fertilizers for fruiting plants?",
        time: "December 31, 2021, 11:59 PM"
      },
    ]
  } 

  formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    
    return date.toLocaleString('en-US', options);
  }

  makePost = (e) => {
    e.preventDefault();

    let newMsg = {
      author: this.state.name,
      body: this.state.msg,
      time: this.formatDate(new Date())
    }

    this.setState(prevState => ({
      forumMessages: [newMsg, ...prevState.forumMessages]
    }));
  }

  handleNameChange = (name) => {
    this.setState({name: name});
  }

  handleMsgChange = (msg) => {
    this.setState({msg: msg});
  }

  render() { 
    return (
      <div style={{padding: '25px'}}>
        <Container className="mt-4" style={{backgroundColor: '#a7aaa4', padding: '25px', borderRadius: '25px', width: '700px'}}>
          <h2 style={{textAlign: 'center'}}>Make a post</h2>
          <Form onSubmit={this.makePost}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                //value={name}
                onChange={(e) => this.handleNameChange(e.target.value)}
                required
                aria-label='Name'
              />
            </Form.Group>

            <Form.Group controlId="message" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                //value={message}
                onChange={(e) => this.handleMsgChange(e.target.value)}
                required
                aria-label='Message'
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3" aria-label='Post'>
              Post
            </Button>
          </Form>
        </Container><br />

        {
          this.state.forumMessages.map(m => <><ForumPost author={m.author} time={m.time}>{m.body}</ForumPost><br /></>)
        }
      </div>
    );
  }
}
 
export default Forum;