import React from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../components/shared/PageHeader";

function ContactPage() {
  const { register, handleSubmit } = useForm();

  const fields = ["Name", "Company", "Email"];

  const contactSubmit = () => {};
  return (
    <div>
      <PageHeader name="Contact" />
      <form
        className="grid items-center p-12 mx-12 mt-8 shadow-md bg-tertiary_color justify-evenly"
        onSubmit={handleSubmit(contactSubmit)}
      >
        <div className="grid grid-cols-1 gap-8 font-semibold text-black md:grid-cols-2">
          <div className="flex flex-col">
            <div className="flex flex-col">
              {fields.map((field) => (
                <React.Fragment key={field}>
                  <label className="standard-label">{field}</label>
                  <input
                    {...register(field)}
                    className="h-8 p-2 rounded-md lg:h-12"
                  ></input>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="standard-label">Message</label>
            <textarea
              className={`lg:flex-1 2xl:w-[40rem] xl:w-[30rem] lg:w-[20rem] rounded-md p-2`}
            ></textarea>
            <div className="flex justify-center">
              <button type="submit" className="mt-4 button-standard-primary">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
