import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <Fragment>
      <MeetupDetail
        image="https://about.gitlab.com/images/blogimages/get-involved-with-gitlab-meetups/japanmeetup.jpg"
        title="A First Meetup"
        address="Some Address"
        description="The meetup description."
      />
    </Fragment>
  );
};

// this function in required to tell nextJs for whitch dynamic params this page should be pre-generated
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const params = context.params;
  console.log(context);

  return {
    props: {
      meetupData: {
        id: "m1",
        image:
          "https://about.gitlab.com/images/blogimages/get-involved-with-gitlab-meetups/japanmeetup.jpg",
        title: "A First Meetup",
        address: "Some Address",
        description: "The meetup description.",
      },
    },
  };
}

export default MeetupDetails;
