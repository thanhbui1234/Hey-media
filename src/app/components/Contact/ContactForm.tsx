"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const SERVICE_ID = "service_czvxv2d";
const TEMPLATE_ID = "template_7yvjaxf"; // ⚠️ Thay bằng template ID thực tế const PUBLIC_KEY = "NYWVXs7DTaTJRO95o"; // ⚠️ Thay bằng public key
const PUBLIC_KEY = "NYWVXs7DTaTJRO95o"; // ⚠️ Thay bằng public key
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(6, "Phone is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message too short"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    const payload = {
      ...data,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY);
      toast.success("🎉 Message sent successfully!");
      reset();
    } catch (err) {
      toast.error("❌ Failed to send. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-[500px] w-full gap-16 p-8 rounded-2xl shadow-lg backdrop-blur-sm border "
    >
      <motion.h2
        className="text-3xl font-bold text-white text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Let’s get in touch
      </motion.h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {[
          { name: "name", placeholder: "Your name", label: "Name" },
          { name: "phone", placeholder: "Phone number", label: "Phone" },
          { name: "email", placeholder: "Email address", label: "Email" },
        ].map((field, i) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <Input
              {...register(field.name as keyof FormData)}
              placeholder={field.placeholder}
              className={`bg-white/10 text-white placeholder-white/50 ${
                errors[field.name as keyof FormData] ? "border-red-500" : ""
              }`}
            />
            {errors[field.name as keyof FormData] && (
              <p className="text-red-400 text-sm mt-1">
                {errors[field.name as keyof FormData]?.message}
              </p>
            )}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Textarea
            {...register("message")}
            placeholder="Write your message..."
            className={`bg-white/10 text-white placeholder-white/50 ${
              errors.message ? "border-red-500" : ""
            }`}
            rows={5}
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 transition text-white font-semibold"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
