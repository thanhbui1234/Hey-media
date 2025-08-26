"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const SERVICE_ID = "service_80o1xck";
const TEMPLATE_ID = "template_w3pt35y"; // ⚠️ Thay bằng template ID thực tế const PUBLIC_KEY = "NYWVXs7DTaTJRO95o"; // ⚠️ Thay bằng public key
const PUBLIC_KEY = "bCXDU2IyNd-XXEVjb"; // ⚠️ Thay bằng public key
const formSchema = z.object({
  name: z.string().min(2, "Tên không được bỏ trống"),
  phone: z.string().min(6, "Số điện thoại không được bỏ trống"),
  email: z.string().email("Email không hợp lệ"),
  message: z.string().min(10, "Tin nhắn quá ngắn"),
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
      toast.success("🎉 Gửi tin nhắn thành công!");
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
        Liện hệ
      </motion.h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {[
          { name: "name", placeholder: "Tên", label: "Name" },
          { name: "phone", placeholder: "Số điện thoại", label: "Phone" },
          { name: "email", placeholder: "Email", label: "Email" },
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
            placeholder="Viết tin nhắn..."
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
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              textShadow: "0 0 8px rgba(255, 255, 255, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="
              w-full px-8 py-3 rounded-xl font-semibold uppercase tracking-wide
              text-white cursor-pointer border border-gray-700
              shadow-md bg-gray-900 transition-colors duration-200
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
}
