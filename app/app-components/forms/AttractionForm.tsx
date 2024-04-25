"use client";

import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import baseUrl from "@/lib/baseUrl";
import { OperatingHours } from "@/types/Common";

const AttractionForm = () => {
  const { register, control, handleSubmit } = useForm();
  const router = useRouter();

  const {
    fields: detailFields,
    append: appendDetail,
    remove: removeDetail,
  } = useFieldArray({
    control,
    name: "details",
  });

  const {
    fields: socialMediaFields,
    append: appendSocialMedia,
    remove: removeSocialMedia,
  } = useFieldArray({
    control,
    name: "social_media_stack",
  });

  const {
    fields: operatingHoursFields,
    append: appendOperatingHours,
    remove: removeOperatingHours,
  } = useFieldArray({
    control,
    name: "operating_hours",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    // Convert time strings to time.Time format using today's date and local timezone
    const formattedOperatingHours = data.operating_hours.map(
      (oh: OperatingHours) => {
        const today = new Date();
        const offset = today.getTimezoneOffset() * 60 * 1000; // Offset in milliseconds
        const localToday = new Date(today.getTime() - offset); // Get local date
        const openTime = new Date(
          `${localToday.toISOString().slice(0, 10)}T${oh.open_time}`
        );
        const closeTime = new Date(
          `${localToday.toISOString().slice(0, 10)}T${oh.close_time}`
        );

        // Adjust the time by adding the timezone offset
        oh.open_time = new Date(openTime.getTime() + offset).toISOString();
        oh.close_time = new Date(closeTime.getTime() + offset).toISOString();

        return oh;
      }
    );

    const formData = {
      ...data,
      operating_hours: formattedOperatingHours,
      images: data.images.split(",").map((url: string) => url.trim()),
    };

    try {
      const baseUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : process.env.NEXT_PUBLIC_PROD_API_URL;
      const response = await fetch(`${baseUrl}/attraction`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Attraction has been created.");
        router.push("/attractions");
      } else {
        console.error("Failed to create attraction");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <section className="flex justify-center p-5 mb-10 bg-orange-100">
        <h1 className="text-2xl font-bold">Create Attraction</h1>
      </section>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
        <div className="mb-4">
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            {...register("description")}
            placeholder="Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <textarea
            {...register("content")}
            placeholder="Content"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <input
            type="text"
            {...register("images")}
            placeholder="Image URLs (comma-separated)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            {...register("location_id", { valueAsNumber: true })}
            placeholder="Location ID"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            {...register("price", { valueAsNumber: true })}
            placeholder="Price"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            {...register("rating", { valueAsNumber: true })}
            placeholder="Rating"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <h3 className="mb-2 font-bold">Details</h3>
          {detailFields.map((field, index) => (
            <div key={field.id} className="flex items-center mb-2">
              <input
                type="text"
                {...register(`details[${index}].name`)}
                placeholder="Detail Name"
                className="w-1/2 px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                {...register(`details[${index}].description`)}
                placeholder="Detail Description"
                className="w-1/2 px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="button"
                onClick={() => removeDetail(index)}
                className="px-2 py-1 text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendDetail({ name: "", description: "" })}
            className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
          >
            Add Detail
          </button>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 font-bold">Social Media</h3>
          {socialMediaFields.map((field, index) => (
            <div key={field.id} className="flex items-center mb-2">
              <input
                type="text"
                {...register(`social_media_stack[${index}].platform`)}
                placeholder="Platform"
                className="w-1/2 px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                {...register(`social_media_stack[${index}].handle`)}
                placeholder="Handle"
                className="w-1/2 px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => removeSocialMedia(index)}
                className="px-2 py-1 text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendSocialMedia({ platform: "", handle: "" })}
            className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
          >
            Add Social Media
          </button>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 font-bold">Operating Hours</h3>
          {operatingHoursFields.map((field, index) => (
            <div key={field.id} className="flex items-center mb-2">
              <input
                type="text"
                {...register(`operating_hours[${index}].day`)}
                placeholder="Day"
                className="w-1/3 px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Controller
                name={`operating_hours[${index}].open_time`}
                control={control}
                defaultValue=""
                rules={{
                  required: "Open time is required",
                  validate: (value) => {
                    const [hours, minutes] = value.split(":");
                    const totalSeconds =
                      parseInt(hours, 10) * 3600 + parseInt(minutes, 10) * 60;
                    return !isNaN(totalSeconds);
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <div className="w-1/3 mr-2">
                    <input
                      type="time"
                      placeholder="Open Time"
                      {...field}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {error && (
                      <span className="text-red-500">{error.message}</span>
                    )}
                  </div>
                )}
              />
              <Controller
                name={`operating_hours[${index}].close_time`}
                control={control}
                defaultValue=""
                rules={{
                  required: "Close time is required",
                  validate: (value) => {
                    const [hours, minutes] = value.split(":");
                    const totalSeconds =
                      parseInt(hours, 10) * 3600 + parseInt(minutes, 10) * 60;
                    return !isNaN(totalSeconds);
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <div className="w-1/3 mr-2">
                    <input
                      type="time"
                      placeholder="Close Time"
                      {...field}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {error && (
                      <span className="text-red-500">{error.message}</span>
                    )}
                  </div>
                )}
              />
              <button
                type="button"
                onClick={() => removeOperatingHours(index)}
                className="px-2 py-1 text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              appendOperatingHours({ day: "", open_time: "", close_time: "" })
            }
            className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
          >
            Add Operating Hours
          </button>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default AttractionForm;
