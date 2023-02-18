# Vue timer

  Complexity: 20

  Same requirement as Vanilla timer but build it with Vue.js.


# SVG as a component

  Complexity: 5

  Convert vue-logo.svg to a Vue.js Functional Single File Component (name it VueLogo.vue) with props to control the two colours.
  Then in App.vue create two instances of the VueLogo.vue component. Don’t pass in any props to the first one so it looks the same as the original svg file. The second one will consist of blue and red.


# Simple carousel with the use of Slot

  Complexity: 30

  Complete the component Carousel.vue and create two instances of the carousel in App.vue. The carousel should display one card at a time. The carousel should contain two buttons, one to show the previous card and the other one to show the next card.
  The RedCard and YellowCard components are given.
  The first carousel has 7 cards, the card should be red when the index is an odd number and the card should be yellow when the index is even.
  The second carousel has 6 cards, the card should be yellow when the index is an odd number and the card should be red when the index is even.
  For every card, pass in the index for the text prop.


# A button that counts

  Complexity: 5

  Create a button that increases count by 1 when clicked without using the “methods” option. Display the number of counts on the button. When count reaches 10, it resets itself back to zero.


# Pass data down without props

  Complexity: 5
  
  Update all components so that Grandchild.vue can display text from App.vue without props and without any kind of stores.
