import { Divider, MenuItem, Paper, Select } from "@mui/material";
import React, { useState } from "react";
import "../Styles/EducationComponent.css";
import BackNextBtnComponent from "./BackNextBtnComponent";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import { connect } from "react-redux";
import { addEducation } from "../Redux/actions";
import { useForm, Controller } from "react-hook-form";

// Map Redux state to component props
const mapStateToProps = (state) => ({
  educationInfo: state.educationDetailsReducer.educationInfo,
});

// Map Redux dispatch actions to component props
const mapDispatchToProps = (dispatch) => ({
  onAddEducation: (details) => dispatch(addEducation(details)),
});

const years = [
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
];

// EducationComponent function component
const EducationComponent = (props) => {
  // State for loading indicator
  const [loading, setLoading] = useState(false);

  // Form setup using react-hook-form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // Handler for going back to the previous tab
  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  // Handler for moving to the next tab and adding education details
  const handleNext = (data) => {
    // console.log(data);
    setLoading(true);
    props.onAddEducation(data);

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  return (
    <Paper className="education-paper" elevation={3}>
      <h2 className="education-heading">Education Details</h2>
      <Divider sx={{ margin: "10px 0px" }} />
      <form onSubmit={handleSubmit(handleNext)}>
        <div className="education-form-cont">
          {/* InputComponent for Domain */}
          <InputComponent
            title={"Domain"}
            type={"text"}
            name={"domain"}
            register={register}
            multiline={false}
            value={props.educationInfo.domain}
            setValue={(value) =>
              props.onAddEducation({ ...props.educationInfo, domain: value })
            }
            error={errors.domain ? true : false}
            errorMessage={errors.domain ? errors.domain.message : null}
          />
          <div></div>

          {/* InputComponent for University */}
          <InputComponent
            title={"University"}
            type={"text"}
            name={"university"}
            register={register}
            multiline={false}
            value={props.educationInfo.university}
            setValue={(value) =>
              props.onAddEducation({
                ...props.educationInfo,
                university: value,
              })
            }
            error={errors.university ? true : false}
            errorMessage={errors.university ? errors.university.message : null}
          />

          {/* InputComponent for Degree */}
          <InputComponent
            title={"Degree"}
            type={"text"}
            name={"degree"}
            register={register}
            multiline={false}
            value={props.educationInfo.degree}
            setValue={(value) =>
              props.onAddEducation({ ...props.educationInfo, degree: value })
            }
            error={errors.degree ? true : false}
            errorMessage={errors.degree ? errors.degree.message : null}
          />

          {/* SelectComponent for Start Year */}
          <SelectComponent
            title={"Start Year"}
            errorMessage={errors.startYear ? errors.startYear.message : null}
            error={errors.startYear ? true : false}
          >
            <Controller
              render={(props) => {
                // console.log(props);
                return (
                  <Select
                    value={props.field.value}
                    onChange={props.field.onChange}
                    error={errors.startYear ? true : false}
                  >
                    {years.map((year, index) => {
                      return (
                        <MenuItem key={index} value={year}>
                          {year}
                        </MenuItem>
                      );
                    })}
                  </Select>
                );
              }}
              name={"startYear"}
              control={control}
              rules={{ required: "*Please select start year" }}
              defaultValue={props.educationInfo.startYear}
            />
          </SelectComponent>

          {/* SelectComponent for End Year */}
          <SelectComponent
            title={"End Year"}
            errorMessage={errors.endYear ? errors.endYear.message : null}
            error={errors.endYear ? true : false}
          >
            <Controller
              render={(props) => (
                <Select
                  value={props.field.value}
                  onChange={props.field.onChange}
                  error={errors.endYear ? true : false}
                >
                  {years.map((year, index) => {
                    return (
                      <MenuItem key={index} value={year}>
                        {year}
                      </MenuItem>
                    );
                  })}
                </Select>
              )}
              name={"endYear"}
              control={control}
              rules={{ required: "*Please select end year" }}
              defaultValue={props.educationInfo.endYear}
            />
          </SelectComponent>
        </div>
        <Divider sx={{ margin: "10px 0px" }} />

        {/* BackNextBtnComponent for navigation */}
        <BackNextBtnComponent
          onNext={handleNext}
          onBack={handleBack}
          loading={loading}
          tab={props.tab}
          nextTitle={"Next"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
};

// Connect the component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(EducationComponent);
