import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const onAddMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
};

export default NewMeetup;
