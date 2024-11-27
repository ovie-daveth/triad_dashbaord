import React, { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IKUpload } from "imagekitio-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Modal from "@/components/image_modal";
import { Loader } from "lucide-react";

// Define the schema for validation using zod
const formSchema = z.object({
  subject: z.string().min(2, { message: "Subject is required" }),
  examType: z.string().min(2, { message: "Exam Type is required" }),
  examYear: z.string().min(4, { message: "Exam Year is required" }),
  question: z.string().min(5, { message: "Question is required" }),
  options: z
    .array(z.string())
    .min(2, { message: "At least 2 options are required" }),
  diagrams: z.array(z.string()).optional(),
  correctOption: z.string().min(1, { message: "Correct option is required" }),
  hints: z.string().optional(),
  explanation: z.string().min(5, { message: "Explanation is required" }),
  content: z.string().min(5, { message: "Content is required" }),
});

const CreatePostForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setIsLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState<string[]>([]);

  function generateRandomString(length = 10) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // Success callback when the image is uploaded
  const onSuccess = (res: any) => {
    console.log("Upload Success", res.url);
    // Correctly add the image URL to the imgUrl array
    setImgUrl((prevImages) => [...prevImages, res.url]);

    // Optionally, update the form field with the uploaded URL
    form.setValue("diagrams", [...(form.getValues("diagrams") || []), res.url]);

    setIsLoading(false);
  };

  // Error callback when upload fails
  const onError = (err: any) => {
    console.log("Error", err);
    setIsLoading(false);
  };

  const handleUploadStart = () => {
    setIsLoading(true); // Set loading state to true when upload starts
  };

  const handleRemoveImage = (index: number) => {
    // Update the images state
    setImgUrl((prevImages) => prevImages.filter((_, i) => i !== index));

    // Update the form field `diagrams` by removing the corresponding URL
    form.setValue(
      "diagrams",
      form.getValues("diagrams")?.filter((_, i) => i !== index) || []
    );
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Initialize the form with the resolver for zod validation
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  // Handle form submission
  const onSubmit = async (data: any) => {
    console.log(data); // Handle form data here
    
  };

  return (
    <MainLayout>
      <div>
        <div className="mb-8">
          <h1 className=" mb-3 text-xl font-bold">Submit Question</h1>
          <p className="t">
            Please take note of the spelling and wordings, wrong wordings or
            spelling detected by our proof readers will be deducted from
            payment.
          </p>
        </div>
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex items-center gap-4">
                <FormField
                  control={form.control}
                  name="examType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-xl">Exam Type</FormLabel>
                      <FormControl>
                        <Input
                          className="h-20 rounded-lg"
                          placeholder="Exam Type"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Exam Year */}
                <FormField
                  control={form.control}
                  name="examYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-xl">Exam Year</FormLabel>
                      <FormControl>
                        <Input
                          className="h-20 rounded-lg"
                          placeholder="Exam Year"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-xl">Subject</FormLabel>
                      <FormControl>
                        <Input
                          className="h-20 rounded-lg"
                          placeholder="Subject"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Question */}
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="lg:text-xl">Question</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Question" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Options */}
              <FormField
                control={form.control}
                name="options"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="lg:text-xl">Options</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Options (comma-separated)"
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(
                            value.split(",").map((option) => option)
                          );
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      Note: Seperate each answer with a comma
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Diagrams */}
              <FormField
                control={form.control}
                name="diagrams"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="lg:text-xl block">Diagrams</FormLabel>
                    <FormControl>
                      <IKUpload
                        fileName={generateRandomString()} // Set the file name for ImageKit
                        onError={onError} // Error callback
                        onSuccess={onSuccess} // Success callback
                        onClick={handleUploadStart}
                      />
                    </FormControl>
                    <FormDescription>
                      If the question contains images, upload them.
                    </FormDescription>

                    {loading ? (
                      <Loader />
                    ) : (
                      <>
                        {imgUrl && imgUrl.length > 0 && (
                          <div className="mt-10 flex flex-wrap gap-4 items-center">
                            {imgUrl.map((file, index) => (
                              <div
                                key={index}
                                className="flex flex-col items-start gap-3"
                              >
                                <div className="group relative">
                                  <img
                                    src={file}
                                    alt={`Uploaded ${index + 1}`}
                                    className="w-24 h-24 object-cover rounded-md cursor-pointer"
                                    onClick={() => handleImageClick(file)}
                                  />
                                  <span className="absolute group-hover:inline-flex hidden text-sm text-gray-100 top-2 left-3">
                                    Click to expand
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  className="text-xs px-2 py-1 rounded"
                                  onClick={() => handleRemoveImage(index)}
                                >
                                  Remove
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Correct Option */}
              <FormField
                control={form.control}
                name="correctOption"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="lg:text-xl block">
                      Correct Option
                    </FormLabel>
                    <div className="flex gap-3 ">
                      {["a", "b", "c", "d", "e"].map((option, index) => (
                        <FormControl key={index}>
                          <label
                            htmlFor={`correct_option_${option}`}
                            className="flex items-center flex-wrap gap-2"
                          >
                            <input
                              type="radio"
                              id={`correct_option_${option}`}
                              name={field.name}
                              value={option}
                              onChange={(e) => field.onChange(e.target.value)}
                              checked={field.value === `${option}`}
                              className="w-8 h-8"
                            />
                            option {option}
                          </label>
                        </FormControl>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Hints */}
              <FormField
                control={form.control}
                name="hints"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="lg:text-xl">Hints</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Hints" {...field} />
                    </FormControl>
                    <FormDescription>This field is optional</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Explanation */}
              <FormField
                control={form.control}
                name="explanation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="lg:text-xl">Explanation</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Explanation" {...field} />
                    </FormControl>
                    <FormDescription>
                      If the past question provides explanation, add it here
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Content */}
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="lg:text-xl">Content</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Content" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
        <Modal
          imageSrc={selectedImage || ""}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </MainLayout>
  );
};

export default CreatePostForm;
