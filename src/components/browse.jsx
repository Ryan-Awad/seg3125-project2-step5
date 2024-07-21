import React, { Component } from 'react';
import SideBySideContainer from './sideBySideContainer';
import Card from './card';
import FacetedSearch from './facetedSearch';

class Browse extends Component {
  state = {
    items: [
      {
        "id": 1,
        "title": "Velvetfern",
        "desc": "A large outdoor plant with soft, velvety leaves that thrives in low light and hot temperatures. It requires medium watering and adds a touch of lush greenery to any garden.",
        "price": 12.99,
        "lightReq": "low",
        "waterReq": "medium",
        "plantSize": "large",
        "plantType": "outdoor",
        "tempReq": "hot",
        "selected": true
      },
      {
        "id": 2,
        "title": "Azure Willow",
        "desc": "This tiny indoor plant features delicate, blue-tinged foliage and is perfect for cold environments. It requires medium light and low water, making it an easy-to-care-for addition to your indoor plant collection.",
        "price": 11.99,
        "lightReq": "medium",
        "waterReq": "low",
        "plantSize": "tiny",
        "plantType": "indoor",
        "tempReq": "cold",
        "selected": true
      },
      {
        "id": 3,
        "title": "Rubyroot Grass",
        "desc": "A huge, vibrant outdoor plant with striking red roots. It flourishes in high light and cold temperatures, needing plenty of water to maintain its lush, green blades.",
        "price": 13.99,
        "lightReq": "high",
        "waterReq": "high",
        "plantSize": "huge",
        "plantType": "outdoor",
        "tempReq": "cold",
        "selected": true
      },
      {
        "id": 4,
        "title": "Goldenspire Ivy",
        "desc": "A small, indoor ivy known for its golden hues. This plant prefers low light and high water, thriving in ambient temperatures and adding a touch of elegance to indoor spaces.",
        "price": 25.99,
        "lightReq": "low",
        "waterReq": "high",
        "plantSize": "small",
        "plantType": "indoor",
        "tempReq": "ambient temperature",
        "selected": true
      },
      {
        "id": 5,
        "title": "Duskmist Orchid",
        "desc": "A small, exotic indoor orchid with misty purple blooms. It loves high light and hot temperatures but requires low water, making it a unique and striking addition to any room.",
        "price": 10.99,
        "lightReq": "high",
        "waterReq": "low",
        "plantSize": "small",
        "plantType": "indoor",
        "tempReq": "hot",
        "selected": true
      },
      {
        "id": 6,
        "title": "Moonshadow Lily",
        "desc": "This medium-sized outdoor lily boasts beautiful, moonlit blooms. It thrives in medium light and ambient temperatures, needing medium water to maintain its delicate flowers.",
        "price": 9.99,
        "lightReq": "medium",
        "waterReq": "medium",
        "plantSize": "medium",
        "plantType": "outdoor",
        "tempReq": "ambient temperature",
        "selected": true
      }
    ],
  } 

  addToCart = (productId) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productIndex = cart.findIndex(item => item.productId === productId);

    if (productIndex !== -1) {
      cart[productIndex].quantity += 1;
    } else {
      let i = this.state.items.findIndex(item => item.id === productId);
      cart.push({ productId: productId, name: this.state.items[i].title, price: this.state.items[i].price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Added to cart");
  }


  search = (lightReqs, waterReqs, plantSizes, plantTypes, tempReqs) => {
    let items = [...this.state.items];
    items.map(i => {
      if (
        (lightReqs.includes(i.lightReq)  || lightReqs.length === 0) && 
        (waterReqs.includes(i.waterReq) || waterReqs.length === 0) && 
        (plantSizes.includes(i.plantSize) || plantSizes.length === 0) && 
        (plantTypes.includes(i.plantType) || plantTypes.length === 0) &&
        (tempReqs.includes(i.tempReq) || tempReqs.length === 0)
      ) {
        i.selected = true;
      } else {
        i.selected = false;
      }
    });
    this.setState({items: items});
  }

  query = (query) => {
    this.state.items.forEach(i => {
      query = query.toLowerCase();
      if (i.title.toLowerCase().includes(query)) {
        this.setState(prevState => ({
          items: prevState.items.map(item =>
            item.id === i.id ? { ...item, selected: true } : item
          )
        }));
      } else {
        this.setState(prevState => ({
          items: prevState.items.map(item =>
            item.id === i.id ? { ...item, selected: false } : item
          )
        }));
      }
    })
  }

  render() { 
    return (
      <div>
        <FacetedSearch 
          searchHandler={this.search}
          queryHandler={this.query}
        />
        <SideBySideContainer>
          {
            this.state.items
              .filter(x => x.selected)
              .map(x => (
                <Card 
                  hasImg
                  imgSrc={"./assets/plant" + x.id + ".jpg"}
                  w="300px"
                  h="100%"
                  title={x.title + " - $" + x.price}
                  desc={x.desc}
                  buttonText="Add to cart"
                  buttonHandler={() => this.addToCart(x.id)}
                />
              ))
          }
        </SideBySideContainer>
      </div>
    );
  }
}
 
export default Browse;