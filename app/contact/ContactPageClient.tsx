"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToastProvider, useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

function ContactContent() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      toast({ title: "Message sent successfully!" });
      form.reset();
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1120]">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt="Office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/90 to-[#0b1120]/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
              Contact
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our engineering team is ready to support your asset management,
              reliability, and integrity initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <h2
                  className="text-2xl font-bold text-white mb-6"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Send Us a Message
                </h2>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="First Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Last Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="you@example.com"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (optional)</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+1 (555) 123-4567"
                                type="tel"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can we help?"
                              className="min-h-[140px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold"
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <h2
                  className="text-2xl font-bold text-white mb-6"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Contact Information
                </h2>
                <p className="text-gray-400 mb-8">
                  Available for consultations across North America.
                </p>
                <div className="space-y-6 text-sm">
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Integral Solutions Inc.
                    </p>
                    <p className="text-gray-400">Calgary Office</p>
                    <p className="text-gray-400">Calgary, AB, Canada</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Email</p>
                    <a
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      href="mailto:info@integralsolutionsinc.ca"
                    >
                      info@integralsolutionsinc.ca
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Phone</p>
                    <a
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      href="tel:+14034023670"
                    >
                      +1 (403) 402-3670
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <h3
                  className="text-lg font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  What to Expect
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      text: "We respond within 1 business day",
                    },
                    {
                      step: "2",
                      text: "Schedule a free discovery call",
                    },
                    {
                      step: "3",
                      text: "Receive a tailored proposal",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4">
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold shrink-0"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        {item.step}
                      </span>
                      <p className="text-gray-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPageClient() {
  return (
    <ToastProvider>
      <ContactContent />
    </ToastProvider>
  );
}
