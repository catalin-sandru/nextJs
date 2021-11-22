import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First meetup",
    image:
      "https://about.gitlab.com/images/blogimages/get-involved-with-gitlab-meetups/japanmeetup.jpg",
    address: "First address, nr. 1, first street",
  },
  {
    id: "m2",
    title: "A Second meetup",
    image:
      "https://about.gitlab.com/images/blogimages/get-involved-with-gitlab-meetups/japanmeetup.jpg",
    address: "Second address, nr. 2, second street",
  },
];

// useEffect will be triggered AFTER the component is rendered
// if we fetch API data in useEffect the page will be rendered without initial data
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// this function needs to be named getStaticProps
// on render, the component waits for this function to execute, passes props, and AFTER renders the component
export async function getStaticProps() {
  // in here we can fetch api data
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
