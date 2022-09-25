import React from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../components/shared/PageHeader";

function ContactPage() {
  const { register, handleSubmit } = useForm();



  const contactSubmit = () => {

  };
  return (
    <div>
      <PageHeader name="Contact" />
      <form
        className="grid items-center p-12 mx-12 mt-8 shadow-md bg-tertiary_color justify-evenly dark:text-white
        rounded-md"
        onSubmit={handleSubmit(contactSubmit)}
        method="post"
        action="https://getform.io/f/57c98ca4-7169-452f-a212-ea13605437b6"
      >
        <div className="grid grid-cols-1 gap-8 font-semibold text-black md:grid-cols-2">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label className="standard-label">Name</label>
              <input
                {...register("Name")}
                className="h-8 p-2 rounded-md lg:h-12 dark:bg-white"
              ></input>
              <label className="standard-label">Company</label>
              <input
                {...register("Company")}
                className="h-8 p-2 rounded-md lg:h-12 dark:bg-white"
              ></input>
              <label className="standard-label">Email</label>
              <input
                {...register("Email")}
                type="email"
                className="h-8 p-2 rounded-md lg:h-12 dark:bg-white"
              ></input>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="standard-label">Message</label>
            <textarea
              className={`lg:flex-1 2xl:w-[40rem] xl:w-[30rem] lg:w-[20rem] rounded-md p-2 dark:bg-white`}
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
