import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  team_name: Yup.string().required("Team name is required"),
  coach: Yup.string().nullable(),
  manager: Yup.string().nullable(),
  organization: Yup.string().nullable(),
  players: Yup.array()
    .of(
      Yup.object({
        player_name: Yup.string().required("Player name is required"),
        in_game_name: Yup.string().required("In-game name is required"),
        role: Yup.string().required("Role is required"),
        country: Yup.string().required("Country is required"),
      })
    )
    .min(1, "At least one player is required"),
});

const CreateTeam = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Create a New Team</h2>
      <Formik
        initialValues={{
          team_name: "",
          coach: "",
          manager: "",
          organization: "",
          players: [{ player_name: "", in_game_name: "", role: "", country: "" }],
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await axios.post("http://localhost:4000/api/v1/admin/createteam", values);
            alert("Team created successfully");
            resetForm();
          } catch (error) {
            console.error("Error creating team", error);
            alert("Failed to create team");
          }
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Team Name</label>
                <Field name="team_name" className="input-field" />
                <ErrorMessage name="team_name" className="text-red-500 text-sm" component="div" />
              </div>
              <div>
                <label className="block font-medium">Coach</label>
                <Field name="coach" className="input-field" />
              </div>
              <div>
                <label className="block font-medium">Manager</label>
                <Field name="manager" className="input-field" />
              </div>
              <div>
                <label className="block font-medium">Organization</label>
                <Field name="organization" className="input-field" />
              </div>
            </div>

            <FieldArray name="players">
              {({ push, remove }) => (
                <div>
                  <h3 className="text-lg font-semibold mt-4">Players</h3>
                  {values.players.map((_, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 items-end mt-2">
                      <div>
                        <label className="block font-medium">Player Name</label>
                        <Field name={`players.${index}.player_name`} className="input-field" />
                        <ErrorMessage name={`players.${index}.player_name`} className="text-red-500 text-sm" component="div" />
                      </div>
                      <div>
                        <label className="block font-medium">In-Game Name</label>
                        <Field name={`players.${index}.in_game_name`} className="input-field" />
                        <ErrorMessage name={`players.${index}.in_game_name`} className="text-red-500 text-sm" component="div" />
                      </div>
                      <div>
                        <label className="block font-medium">Role</label>
                        <Field name={`players.${index}.role`} className="input-field" />
                        <ErrorMessage name={`players.${index}.role`} className="text-red-500 text-sm" component="div" />
                      </div>
                      <div>
                        <label className="block font-medium">Country</label>
                        <Field name={`players.${index}.country`} className="input-field" />
                        <ErrorMessage name={`players.${index}.country`} className="text-red-500 text-sm" component="div" />
                      </div>
                      <button
                        type="button"
                        className="bg-red-500 text-white py-1 px-3 rounded-md"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="mt-3 bg-blue-500 text-white py-1 px-4 rounded-md"
                    onClick={() => push({ player_name: "", in_game_name: "", role: "", country: "" })}
                  >
                    Add Player
                  </button>
                </div>
              )}
            </FieldArray>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-500 text-white py-2 px-6 rounded-md w-full mt-4"
            >
              {isSubmitting ? "Creating..." : "Create Team"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTeam;