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

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
