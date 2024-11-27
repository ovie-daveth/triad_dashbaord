import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Checkbox } from "@/components/ui/checkbox";
import Modal from '@/components/image_modal';

// Define the schema for validation using zod
const formSchema = z.object({
  subject: z.string().min(2, { message: "Subject is required" }),
  examType: z.string().min(2, { message: "Exam Type is required" }),
  examYear: z.string().min(4, { message: "Exam Year is required" }),
  question: z.string().min(5, { message: "Question is required" }),
  options: z.array(z.string()).min(2, { message: "At least 2 options are required" }),
  diagrams: z.array(z.string()).optional(),
  correctOption: z.string().min(1, { message: "Correct option is required" }),
  hints: z.string().optional(),
  explanation: z.string().min(5, { message: "Explanation is required" }),
  content: z.string().min(5, { message: "Content is required" }),
});

const CreatePostForm = () => {

    const [images, setImages] = useState<File[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Append new files to the existing array
      const newFiles = Array.from(files);
      setImages((prevImages) => [...prevImages, ...newFiles]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
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
  const onSubmit = (data: any) => {
    console.log(data); // Handle form data here
    // Here, you can make an API call to submit the data
  };

  return (
    <MainLayout>
      <div>
        <div className='mb-8'>
          <h1 className=' mb-3 text-xl font-bold'>Submit Question</h1>
          <p className='t'>Please take note of the spelling and wordings, wrong wordings or spelling detected by our proof readers will be deducted from payment.</p>
        </div>
        <div className='w-full sm:w-[90%] md:w-[70%] lg:w-[60%]'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8"> 
                <div className='flex items-center gap-4'>
                <FormField
                control={form.control}
                name="examType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='lg:text-xl'>Exam Type</FormLabel>
                    <FormControl>
                      <Input disabled className='h-20 rounded-lg' placeholder="Exam Type" {...field} />
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
                    <FormLabel className='lg:text-xl'>Exam Year</FormLabel>
                    <FormControl>
                      <Input disabled className='h-20 rounded-lg' placeholder="Exam Year" {...field} />
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
                    <FormLabel className='lg:text-xl'>Subject</FormLabel>
                    <FormControl>
                      <Input disabled className='h-20 rounded-lg' placeholder="Subject" {...field} />
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
                    <FormLabel className='lg:text-xl'>Question</FormLabel>
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
                    <FormLabel className='lg:text-xl'>Options</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Options (comma-separated)" {...field} />
                    </FormControl>
                    <FormDescription>Note: Seperate each answer with a comma</FormDescription>
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
      <FormLabel className='lg:text-xl block'>Diagrams</FormLabel>
      <FormControl>
        <input
          type="file"
          multiple
          accept="image/*"
         
          onChange={handleImageChange}
          className="file-input" // Optional styling
        />
      </FormControl>
      <FormDescription>If the question contains images, upload them.</FormDescription>

      {/* Display the selected images as thumbnails */}
      {images.length > 0 && (
        <div className="mt-10 flex  flex-wrap gap-4 items-center ">
          {images.map((file, index) => (
            <div key={index} className=" flex flex-col items-start gap-3">
              <div className='group relative'>
              <img
                src={URL.createObjectURL(file)} // Create a temporary URL for image preview
                alt={`Uploaded ${index + 1}`}
                className="w-24 h-24 object-cover rounded-md cursor-pointer "
                onClick={() => handleImageClick(URL.createObjectURL(file))}
              />
              <span className='absolute group-hover:inline-flex hidden text-sm text-gray-100 top-2 left-3'>Click to expand</span>
              </div>
              <button
              type="button"
                className="  text-xs px-2 py-1 rounded"
                onClick={() => handleRemoveImage(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
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
                    <FormLabel className='lg:text-xl'>Correct Option</FormLabel>
                    <FormControl>
                      <Input className='h-20 rounded-lg' placeholder="Correct Option" {...field} />
                    </FormControl>
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
                    <FormLabel className='lg:text-xl'>Hints</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Hints" {...field} />
                    </FormControl>
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
                    <FormLabel className='lg:text-xl'>Explanation</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Explanation" {...field} />
                    </FormControl>
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
                    <FormLabel className='lg:text-xl'>Content</FormLabel>
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
          imageSrc={selectedImage || ''}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </MainLayout>
  );
};

export default CreatePostForm;
