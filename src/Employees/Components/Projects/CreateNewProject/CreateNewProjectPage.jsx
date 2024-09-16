import React, { useState } from "react";
import CreateProjectIntro from "./CreateProjectIntro";
import ProjectDetailsForm from "./ProjectDetailsForm";
import ProjectTypeSelection from "./ProjectTypeSelection";
import RegisteredCompaniesList from "./RegisteredCompaniesList";
import InHouseTeamList from "./InHouseTeamList";

const CreateNewProjectPage = () => {
  const [trackPage, setTrackPage] = useState(0);
  const [userChoice, setUserChoice] = useState("");

  const HandleUserChoice = (choice) => {
    setUserChoice(choice);
  };

  const HandleTrackPage = (typeOfOperation) => {
    if (typeOfOperation == "Increment") {
      if (trackPage < 3) setTrackPage(trackPage + 1);
    } else {
      if (trackPage > 0) setTrackPage(trackPage - 1);
    }
  };

  const renderComponent = () => {
    switch (trackPage) {
      case 0:
        return <CreateProjectIntro key="1" HandleTrackPage={HandleTrackPage} />;
      case 1:
        return <ProjectDetailsForm key="2" HandleTrackPage={HandleTrackPage} />;
      case 2:
        return (
          <ProjectTypeSelection
            key="3"
            HandleTrackPage={HandleTrackPage}
            HandleUserChoice={HandleUserChoice}
          />
        );
      case 3:
        if (userChoice === "OutSource")
          return (
            <RegisteredCompaniesList
              key="4"
              HandleTrackPage={HandleTrackPage}
            />
          );
        else if (userChoice === "InHouse")
          return <InHouseTeamList key="5" HandleTrackPage={HandleTrackPage} />;

      case 4:
        return <CreateProjectIntro key="1" HandleTrackPage={HandleTrackPage} />;
      case 0:
        return <CreateProjectIntro key="1" HandleTrackPage={HandleTrackPage} />;
    }
  };

  const ProjectComponents = [
    <CreateProjectIntro key="1" HandleTrackPage={HandleTrackPage} />,
    <ProjectDetailsForm key="2" HandleTrackPage={HandleTrackPage} />,
    <ProjectTypeSelection key="3" HandleTrackPage={HandleTrackPage} />,
    <RegisteredCompaniesList key="4" HandleTrackPage={HandleTrackPage} />,
  ];
  return (
    <>
      <div className="h-screen w-full">{renderComponent()}</div>
    </>
  );
};

export default CreateNewProjectPage;
