import React, { Component } from 'react';
import SideBySideContainer from './sideBySideContainer';
import Card from './card';
import { InputGroup, Form } from 'react-bootstrap';
import Guide from './guide';

class Guides extends Component {
  state = {
    guides: [
      {
        id: 1,
        title: 'Beginner’s Guide to Starting a Vegetable Garden',
        body: (
          <>
            <h2>Introduction</h2>
            <p>Starting a vegetable garden can be a rewarding experience, offering fresh produce and a sense of accomplishment. This guide will walk you through the basics of planning, planting, and maintaining a vegetable garden.</p>
      
            <h2>Step-by-Step Guide</h2>
      
            <h3>Step 1: Choose a Location</h3>
            <ul>
              <li><strong>Sunlight</strong>: Select a spot that receives at least 6-8 hours of sunlight daily.</li>
              <li><strong>Soil</strong>: Ensure the soil is well-drained and fertile.</li>
              <li><strong>Accessibility</strong>: Choose a location near a water source and easily accessible for maintenance.</li>
            </ul>
      
            <h3>Step 2: Prepare the Soil</h3>
            <ul>
              <li><strong>Test the Soil</strong>: Use a soil test kit to check pH levels and nutrient content.</li>
              <li><strong>Amend the Soil</strong>: Add compost, manure, or other organic matter to improve soil fertility and structure.</li>
              <li><strong>Till the Soil</strong>: Loosen the soil to a depth of 12 inches to promote root growth.</li>
            </ul>
      
            <h3>Step 3: Choose Your Vegetables</h3>
            <ul>
              <li><strong>Select Varieties</strong>: Choose vegetables that grow well in your climate and soil type.</li>
              <li><strong>Plan the Layout</strong>: Consider companion planting to maximize space and deter pests.</li>
            </ul>
      
            <h3>Step 4: Planting</h3>
            <ul>
              <li><strong>Sow Seeds or Transplants</strong>: Follow specific planting instructions for each vegetable regarding depth and spacing.</li>
              <li><strong>Watering</strong>: Water immediately after planting and maintain consistent moisture levels.</li>
            </ul>
      
            <h3>Step 5: Maintenance</h3>
            <ul>
              <li><strong>Weeding</strong>: Regularly remove weeds to prevent competition for nutrients.</li>
              <li><strong>Mulching</strong>: Apply mulch to retain moisture and suppress weeds.</li>
              <li><strong>Fertilizing</strong>: Use organic or synthetic fertilizers as needed based on soil test results.</li>
            </ul>
      
            <h3>Step 6: Harvesting</h3>
            <ul>
              <li><strong>Timing</strong>: Harvest vegetables at their peak ripeness for the best flavor and nutritional value.</li>
              <li><strong>Method</strong>: Use proper techniques to avoid damaging the plants during harvest.</li>
            </ul>
      
            <h2>Conclusion</h2>
            <p>With careful planning and consistent care, your vegetable garden will flourish, providing you with fresh, healthy produce throughout the growing season.</p>
          </>
        ),
        desc: "Starting a vegetable garden can be a rewarding experience, offering fresh produce and a sense of accomplishment. This guide will walk you through the basics of planning, planting, and maintaining a vegetable garden.",
        visible: true,
      },
      {
        id: 2,
        title: 'Guide to Planting and Caring for Perennial Flowers',
        body: (
          <>
            <h2>Introduction</h2>
            <p>Perennial flowers are a great addition to any garden, providing beauty and color year after year. This guide will help you select, plant, and care for perennials in your garden.</p>

            <h2>Step-by-Step Guide</h2>

            <h3>Step 1: Choose the Right Perennials</h3>
            <ul>
              <li><strong>Climate</strong>: Select perennials suited to your USDA hardiness zone.</li>
              <li><strong>Soil Type</strong>: Choose plants that thrive in your soil conditions.</li>
              <li><strong>Sunlight</strong>: Match the light requirements of the plants to your garden conditions (full sun, partial shade, or full shade).</li>
            </ul>

            <h3>Step 2: Prepare the Planting Site</h3>
            <ul>
              <li><strong>Soil Preparation</strong>: Amend the soil with compost or other organic matter.</li>
              <li><strong>Site Layout</strong>: Plan the placement of plants, considering their mature size and growth habits.</li>
            </ul>

            <h3>Step 3: Planting</h3>
            <ul>
              <li><strong>Timing</strong>: Plant perennials in the spring or fall when temperatures are cooler.</li>
              <li><strong>Spacing</strong>: Follow recommended spacing guidelines to allow for growth and air circulation.</li>
              <li><strong>Planting Depth</strong>: Dig a hole twice the width of the root ball and plant at the same depth as in the pot.</li>
            </ul>

            <h3>Step 4: Watering and Mulching</h3>
            <ul>
              <li><strong>Watering</strong>: Water thoroughly after planting and maintain consistent moisture.</li>
              <li><strong>Mulching</strong>: Apply a 2-3 inch layer of mulch to conserve moisture and suppress weeds.</li>
            </ul>

            <h3>Step 5: Ongoing Care</h3>
            <ul>
              <li><strong>Fertilizing</strong>: Fertilize in the spring with a balanced, slow-release fertilizer.</li>
              <li><strong>Pruning</strong>: Deadhead spent blooms to encourage continuous flowering.</li>
              <li><strong>Division</strong>: Divide crowded perennials every 3-5 years to maintain vigor.</li>
            </ul>

            <h3>Step 6: Winter Care</h3>
            <ul>
              <li><strong>Mulching</strong>: Apply additional mulch in late fall to protect roots from freezing.</li>
              <li><strong>Cutting Back</strong>: Trim back dead foliage in late fall or early spring.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>By following these steps, you can enjoy a vibrant and thriving perennial garden that will bring beauty to your landscape for years to come.</p>
          </>
        ),
        desc: 'Perennial flowers are a great addition to any garden, providing beauty and color year after year. This guide will help you select, plant, and care for perennials in your garden.',
        visible: true,
      },
      {
        id: 3,
        title: 'Indoor Herb Garden Guide',
        body: (
          <>
            <h2>Introduction</h2>
            <p>Growing an indoor herb garden is a convenient way to have fresh herbs at your fingertips year-round. This guide will help you set up and maintain a thriving indoor herb garden.</p>

            <h2>Step-by-Step Guide</h2>

            <h3>Step 1: Select Herbs</h3>
            <ul>
              <li><strong>Popular Choices</strong>: Basil, thyme, rosemary, mint, oregano, and parsley.</li>
              <li><strong>Growth Habits</strong>: Choose herbs that grow well indoors and have similar light and water requirements.</li>
            </ul>

            <h3>Step 2: Choose Containers</h3>
            <ul>
              <li><strong>Size</strong>: Use containers with adequate drainage holes and sufficient size for root growth.</li>
              <li><strong>Material</strong>: Terra cotta, plastic, or ceramic pots work well.</li>
            </ul>

            <h3>Step 3: Use Quality Potting Soil</h3>
            <ul>
              <li><strong>Soil Mix</strong>: Use a well-draining potting mix designed for herbs or indoor plants.</li>
              <li><strong>Additives</strong>: Mix in perlite or sand for extra drainage if needed.</li>
            </ul>

            <h3>Step 4: Provide Adequate Light</h3>
            <ul>
              <li><strong>Natural Light</strong>: Place herbs in a sunny window that receives at least 6 hours of sunlight daily.</li>
              <li><strong>Supplemental Light</strong>: Use grow lights if natural light is insufficient, keeping them on for 12-14 hours a day.</li>
            </ul>

            <h3>Step 5: Watering</h3>
            <ul>
              <li><strong>Consistency</strong>: Keep the soil consistently moist but not waterlogged.</li>
              <li><strong>Drainage</strong>: Ensure proper drainage to prevent root rot.</li>
            </ul>

            <h3>Step 6: Fertilizing</h3>
            <ul>
              <li><strong>Frequency</strong>: Fertilize every 4-6 weeks with a diluted, balanced liquid fertilizer.</li>
              <li><strong>Type</strong>: Use organic fertilizers for edible plants.</li>
            </ul>

            <h3>Step 7: Harvesting</h3>
            <ul>
              <li><strong>Timing</strong>: Harvest herbs regularly to encourage new growth.</li>
              <li><strong>Method</strong>: Use clean, sharp scissors to cut stems, avoiding over-harvesting any single plant.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>With the right care, your indoor herb garden will flourish, providing you with a steady supply of fresh herbs for cooking and other uses.</p>
          </>
        ),
        desc: 'Growing an indoor herb garden is a convenient way to have fresh herbs at your fingertips year-round. This guide will help you set up and maintain a thriving indoor herb garden.',
        visible: true,
      },
      {
        id: 4,
        title: 'Guide to Planting Trees and Shrubs',
        body: (
          <>
            <h2>Introduction</h2>
            <p>Planting trees and shrubs can enhance your landscape, provide shade, and improve air quality. This guide covers the essential steps for successful planting and care.</p>

            <h2>Step-by-Step Guide</h2>

            <h3>Step 1: Choose the Right Tree or Shrub</h3>
            <ul>
              <li><strong>Climate and Soil</strong>: Select species suited to your local climate and soil conditions.</li>
              <li><strong>Purpose</strong>: Consider the tree or shrub’s purpose (e.g., shade, privacy, aesthetics).</li>
            </ul>

            <h3>Step 2: Prepare the Planting Site</h3>
            <ul>
              <li><strong>Location</strong>: Choose a site with adequate space for the mature size of the tree or shrub.</li>
              <li><strong>Soil Preparation</strong>: Amend the soil with compost or other organic matter if needed.</li>
            </ul>

            <h3>Step 3: Planting</h3>
            <ul>
              <li><strong>Timing</strong>: Plant during the dormant season (fall or early spring).</li>
              <li><strong>Hole Size</strong>: Dig a hole twice as wide and as deep as the root ball.</li>
              <li><strong>Planting Depth</strong>: Place the tree or shrub in the hole at the same depth it was growing in the container.</li>
            </ul>

            <h3>Step 4: Backfill and Water</h3>
            <ul>
              <li><strong>Backfilling</strong>: Fill the hole with soil, gently tamping down to remove air pockets.</li>
              <li><strong>Watering</strong>: Water thoroughly to settle the soil around the roots.</li>
            </ul>

            <h3>Step 5: Mulching</h3>
            <ul>
              <li><strong>Mulch Layer</strong>: Apply a 2-3 inch layer of mulch around the base, keeping it away from the trunk.</li>
              <li><strong>Benefits</strong>: Mulch helps retain moisture and suppress weeds.</li>
            </ul>

            <h3>Step 6: Staking (if necessary)</h3>
            <ul>
              <li><strong>Staking</strong>: Stake young trees if they are in a windy location or have weak stems.</li>
              <li><strong>Duration</strong>: Remove stakes after one year to allow natural growth.</li>
            </ul>

            <h3>Step 7: Ongoing Care</h3>
            <ul>
              <li><strong>Watering</strong>: Keep the soil moist, especially during the first few years.</li>
              <li><strong>Fertilizing</strong>: Fertilize in early spring with a balanced, slow-release fertilizer.</li>
              <li><strong>Pruning</strong>: Prune to remove dead or diseased branches and shape the tree or shrub.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Following these guidelines will help ensure your trees and shrubs establish well and thrive in your landscape, providing benefits for many years to come.</p>
          </>
        ),
        desc: 'Planting trees and shrubs can enhance your landscape, provide shade, and improve air quality. This guide covers the essential steps for successful planting and care.',
        visible: true,
      }
    ]
  } 

  getGuide = () => {
    const guideId = new URLSearchParams(window.location.search).get('guideId');
    if (!guideId)
      return null
    return this.state.guides.filter(g => g.id === Number(guideId))[0];
  }

  handleSearchChange = (query) => {
    this.state.guides.forEach(g => {
      if (g.title.toLowerCase().includes(query.toLowerCase())) {
        this.setState(prevState => ({
          guides: prevState.guides.map(guide =>
            guide.id === g.id ? { ...guide, visible: true } : guide
          )
        }));
      } else {
        this.setState(prevState => ({
          guides: prevState.guides.map(guide =>
            guide.id === g.id ? { ...guide, visible: false } : guide
          )
        }));
      }
    });
  }

  render() { 
    const guide = this.getGuide();

    return (
      <>
        {!guide ?
          <div>
            <div style={{backgroundColor: '#B9BEA5', padding: '20px'}}>
              <InputGroup>
                <Form.Control
                  placeholder="Search specific guide"
                  aria-label="Search specific guide"
                  type='text'
                  onChange={(e) => this.handleSearchChange(e.target.value)}
                />
              </InputGroup>
            </div>

            <SideBySideContainer childrenMargin="50px" centerChildren>
              {this.state.guides.map(g => {
                return g.visible ? <Card 
                  hasImg
                  imgSrc={"./assets/guide" + g.id + ".jpg"}
                  w="300px"
                  title={g.title}
                  desc={<>{g.desc} <a href={"?guideId=" + g.id}>Read</a></>}
                /> : <></>
              })}
            </SideBySideContainer>
          </div>  
        :
          <Guide 
            guide={guide}
          />
        }
      </>
    );
  }
}
 
export default Guides;