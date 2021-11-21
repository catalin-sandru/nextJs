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

export default MeetupDetails;
