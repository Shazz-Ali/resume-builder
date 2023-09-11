import { Paper, Divider, Button } from "@mui/material";
import React, { useState } from "react";
import InputComponent from "./InputComponent";
import "../Styles/KeySkillsComponent.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BackNextBtnComponent from "./BackNextBtnComponent";
import { connect } from "react-redux";
import { addNewSkills, deleteSkill, editSkill } from "../Redux/actions";
import { useForm } from "react-hook-form";

// Define mapStateToProps function to connect Redux state to props
const mapStateToProps = (state) => ({
  skills: state.keySkillsReducer.skills,
});

// Define mapDispatchToProps function to connect Redux actions to props
const mapDispatchToProps = (dispatch) => ({
  onAddNewSkill: () => dispatch(addNewSkills()),
  onEditSkill: (skills) => dispatch(editSkill(skills)),
  onDeleteSkill: (index) => dispatch(deleteSkill(index)),
});

// KeySkillsComponent functional component
function KeySkillsComponent(props) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePreview = (data) => {
    // console.log("data",data);
    setLoading(true);
    // props.onEditSkill(Object.values(data));

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  const onEditSkill = (value, id) => {
    const newSkills = props.skills.map((skill, index) => {
      if (index === id) {
        return value;
      } else return skill;
    });

    props.onEditSkill(newSkills);
  };

  // Render the component JSX

  return (
    <Paper elevation={3} className="key-skills-paper">
      <h2 className="key-skills-heading">Key Skills</h2>
      <Divider />
      <form onSubmit={handleSubmit(handlePreview)}>
        <div className="key-skills-form-fields">
          {props.skills.map((skill, index) => {
            return (
              <div key={index} className="key-input-with-delete">
                {/* Render InputComponent with various props */}
                <InputComponent
                  type="text"
                  name={`skill${index + 1}`}
                  register={register}
                  multiline={false}
                  value={skill}
                  setValue={(skill) => onEditSkill(skill, index)}
                  error={errors[`skill${index + 1}`] ? true : false}
                  errorMessage={
                    errors[`skill${index + 1}`]
                      ? errors[`skill${index + 1}`].message
                      : null
                  }
                />
                {/* Render DeleteOutlineOutlinedIcon with onClick handler */}
                {props.skills.length === 1 ? null : (
                  <DeleteOutlineOutlinedIcon
                    sx={{ marginLeft: "10px" }}
                    onClick={() => props.onDeleteSkill(index)}
                  />
                )}
              </div>
            );
          })}
        </div>
        {/* Render 'Add new' button conditionally */}
        {props.skills.length >= 6 ? null : (
          <Button
            className="add-new-btn"
            variant="text"
            onClick={props.onAddNewSkill}
          >
            Add new
          </Button>
        )}
        <Divider className="key-skills-divider" />
        {/* Render BackNextBtnComponent with various props */}
        <BackNextBtnComponent
          onNext={handlePreview}
          loading={loading}
          tab={props.tab}
          onBack={handleBack}
          nextTitle={"Preview"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(KeySkillsComponent);
