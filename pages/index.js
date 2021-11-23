import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

// useEffect will be triggered AFTER the component is rendered
// if we fetch API data in useEffect the page will be rendered without initial data
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// this function needs to be named getStaticProps
// on render, the component waits for this function to execute, passes props, and AFTER renders the component
export async function getStaticProps() {
  // as this code runs on the server we can fetch data from mongoDb without an Api call
  const client = await MongoClient.connect(
    "mongodb+srv://Admin:Admin1234@cluster0.sorwh.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((m) => ({
        title: m.title,
        address: m.address,
        image: m.image,
        id: m._id.toString(),
      })),
    },
    // revalidate will reEvaluate the component on the server in case new data is added
    // the value is number in seconds on how often the component should re-evaluate in seconds
    revalidate: 10,
  };
}

export default HomePage;
