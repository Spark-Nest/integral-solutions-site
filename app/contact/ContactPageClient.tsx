"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
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

type SectionProps = {
  title?: string;
  children: ReactNode;
  delay?: number;
};

function Section({ title, children, delay = 0 }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mx-auto max-w-7xl px-6 py-8 md:py-12"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
        {title ? <h2 className="text-3xl font-bold text-cyan-400">{title}</h2> : null}
        <div className={title ? "mt-6" : ""}>{children}</div>
      </div>
    </motion.section>
  );
}

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
      toast({ title: "Something went wrong", description: "Please try again." });
    }
  };

  return (
    <div className="flex flex-col bg-gradient-to-b from-[#050816] via-[#060b1d] to-[#050816] pb-20 pt-12">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12 text-center shadow-2xl backdrop-blur">
          <div className="absolute inset-0 opacity-25">
            <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_rgba(56,189,248,0.08)_1px,_transparent_0)] bg-[length:22px_22px]" />
          </div>
          <div className="relative space-y-4">
            <h1 className="text-4xl font-bold text-white md:text-5xl">Get in Touch</h1>
            <p className="text-lg text-gray-300">
              Our engineering team is ready to support your asset management, reliability, and integrity initiatives.
            </p>
          </div>
        </div>
      </motion.section>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-4 lg:flex-row">
        <Section delay={0.05}>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                              <Input placeholder="you@example.com" type="email" {...field} />
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
                              <Input placeholder="+1 (555) 123-4567" type="tel" {...field} />
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
                      <Button type="submit" className="px-6 py-3">
                        Submit
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
                <p className="text-gray-300">
                  Available for consultations across North America.
                </p>
                <div className="space-y-3 text-sm text-gray-200">
                  <div>
                    <p className="font-semibold text-white">Integral Solutions Inc.</p>
                    <p>Calgary Office</p>
                    <p>Suite 300, Calgary, AB</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Houston Office</p>
                    <p>Suite 1200, Houston, TX</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a className="text-cyan-200 hover:text-white" href="mailto:info@integralsolutions.com">
                      info@integralsolutions.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p>Calgary: +1 (403) 555-1234</p>
                    <p>Houston: +1 (713) 555-5678</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>
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

