
////////////////////// stripe
require('dotenv').config()
const stripe = require('stripe');

// const stripe = require('stripe')('sk_test_51NGW5hGa0dfhEuOuraRQam5xmr34wFJq17sRIk1GNTs5wQQKI2niGsTQL7hy4nxGfFd5mbH7QX3dscxRkgDWZog500R1iasi2L')



////////////////////// stripe

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');



const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');



const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


////////////////////// stripe
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const YOUR_DOMAIN = 'Change later';


////////////////////// stripe

app.post('/create-checkout-session', async (req, res) => {
  const prices = await stripe.prices.list({
    lookup_keys: [req.body.lookup_key],
    expand: ['data.product'],
  });

  //Create a Checkout Session
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    line_items: [
      {
        //Get the price from lookup key
        price: prices.data[0].id,
        // For metered billing, do not pass quantity
        quantity: 1,

      },
    ],
    mode: 'subscription',
    //Supply success and cancel URLs
    success_url: `${YOUR_DOMAIN}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  //Redirect to Checkout
  res.redirect(303, session.url);
});

app.post('/create-portal-session', async (req, res) => {
  // For demonstration purposes, we're using the Checkout session to retrieve the customer ID.
  // Typically this is stored alongside the authenticated user in your database.
  const { session_id } = req.body;
  const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);


  //Create a customer portal session
  // This is the url to which the customer will be redirected when they are done
  // managing their billing with the portal.
  const returnUrl = YOUR_DOMAIN;

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: checkoutSession.customer,
    return_url: returnUrl,
  });

  //Redirect to customer portal
  res.redirect(303, portalSession.url);
});

//Provision access
app.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  (request, response) => {
    let event = request.body;
    // Replace this endpoint secret with your endpoint's unique secret
    // If you are testing with the CLI, find the secret by running 'stripe listen'
    // If you are using an endpoint defined with the API or dashboard, look in your webhook settings
    // at https://dashboard.stripe.com/webhooks
    const endpointSecret = 'whsec_12345';
    // Only verify the event if you have an endpoint secret defined.
    // Otherwise use the basic event deserialized with JSON.parse
    if (endpointSecret) {
      // Get the signature sent by Stripe
      const signature = request.headers['stripe-signature'];
      try {
        event = stripe.webhooks.constructEvent(
          request.body,
          signature,
          endpointSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        return response.sendStatus(400);
      }
    }
    let subscription;
    let status;
    // Handle the event
    switch (event.type) {
      case 'customer.subscription.trial_will_end':
        subscription = event.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        // Then define and call a method to handle the subscription trial ending.
        // handleSubscriptionTrialEnding(subscription);
        break;
      case 'customer.subscription.deleted':
        subscription = event.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        // Then define and call a method to handle the subscription deleted.
        // handleSubscriptionDeleted(subscriptionDeleted);
        break;
      case 'customer.subscription.created':
        subscription = event.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        // Then define and call a method to handle the subscription created.
        // handleSubscriptionCreated(subscription);
        break;
      case 'customer.subscription.updated':
        subscription = event.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        // Then define and call a method to handle the subscription update.
        // handleSubscriptionUpdated(subscription);
        break;
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }
    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);
////////////////////// stripe







// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

