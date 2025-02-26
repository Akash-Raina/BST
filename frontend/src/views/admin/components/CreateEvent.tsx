import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

interface EventFormValues {
  event_name: string;
  status: number
  prize_pool: number;
  date: string;
  location: string;
  description: string;
}

export const CreateEvent = () => {
  const initialValues: EventFormValues = {
    event_name: "",
    status: 2,
    prize_pool: 0,
    date: "",
    location: "",
    description: "",
  };

  const validationSchema = Yup.object({
    event_name: Yup.string().required("Event name is required"),
    status: Yup.number().oneOf([0, 1, 2], "Invalid status").required("Status is required"),
    prize_pool: Yup.number().positive("Prize pool must be positive").required("Prize pool is required"),
    date: Yup.string().required("Date is required"),
    location: Yup.string().required("Location is required"),
    description: Yup.string().required("Description is required"),
  });


  const handleSubmit = async (values: EventFormValues, { resetForm }: { resetForm: () => void }) => {
    try {
      const response = await axios.post("http://localhost:4000/api/v1/admin/createevent", values);
  
      if (response.status === 201 || response.status === 200) {
        alert("🎉 Event created successfully!");
        resetForm();
      } else {
        alert("❌ Failed to create event.");
      }
    } catch (error) {
      console.error("Error creating event:", error);
      alert("❌ An error occurred while creating the event.");
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">🎊 Create Event</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Event Name</label>
                <Field
                  type="text"
                  name="event_name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="event_name" component="p" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Status</label>
                <Field
                  as="select"
                  name="status"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value={2}>Upcoming</option>
                  <option value={1}>Ongoing</option>
                  <option value={0}>Completed</option>
                </Field>
                <ErrorMessage name="status" component="p" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Prize Pool ($)</label>
                <Field
                  type="number"
                  name="prize_pool"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="prize_pool" component="p" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Date</label>
                <Field
                  type="date"
                  name="date"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="date" component="p" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Location</label>
                <Field
                  type="text"
                  name="location"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="location" component="p" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Description</label>
                <Field
                  as="textarea"
                  name="description"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="description" component="p" className="text-red-500 text-sm" />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Create Event"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
