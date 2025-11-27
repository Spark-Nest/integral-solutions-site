"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { ReactNode } from "react";

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
      className="mx-auto max-w-7xl px-6 py-14"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
        {title ? <h2 className="text-3xl font-bold text-cyan-400">{title}</h2> : null}
        <div className={title ? "mt-6" : ""}>{children}</div>
      </div>
    </motion.section>
  );
}

const jobs = [
  {
    title: "Reliability Engineer (Full-Time)",
    location: "Calgary, AB",
    summary:
      "Lead reliability programs, vibration analysis, and structured RCFA to improve asset availability and reduce downtime.",
  },
  {
    title: "Integrity Engineer (Contract)",
    location: "Remote / Calgary / Houston",
    summary:
      "Support integrity assessments, RBI, and inspection planning for pressure equipment and piping across midstream and downstream assets.",
  },
  {
    title: "Maintenance & Asset Management Analyst",
    location: "Calgary, AB",
    summary:
      "Optimize maintenance strategies, CMMS structures, and KPI dashboards to drive better lifecycle performance.",
  },
];

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(5, "Phone is required"),
  position: z.string().min(1, "Select a position"),
  resume: z
    .any()
    .refine((file) => file instanceof File || (Array.isArray(file) && file.length > 0), "Resume is required"),
  coverLetter: z.string().min(10, "Please include a brief cover letter"),
});

type FormValues = z.infer<typeof formSchema>;

export default function CareersPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      coverLetter: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key === "resume" && value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, String(value));
      }
    });

    await fetch("/api/careers", {
      method: "POST",
      body: formData,
    });
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
            <h1 className="text-4xl font-bold text-white md:text-5xl">Careers</h1>
            <p className="text-lg text-gray-300">
              Join a team committed to engineering excellence and operational reliability.
            </p>
          </div>
        </div>
      </motion.section>

      <Section title="Careers Overview">
        <p className="text-gray-300">
          We are always looking for skilled professionals who are passionate about engineering excellence, asset
          reliability, and integrity management. Our work supports industrial facilities across North America, and we
          value individuals who bring technical expertise, strong problem-solving ability, and a commitment to safe,
          reliable operations.
        </p>
      </Section>

      <Section title="Why Work With Us" delay={0.05}>
        <ul className="grid gap-3 md:grid-cols-2">
          {[
            "Exposure to diverse industrial projects",
            "Collaboration with experienced engineering and integrity specialists",
            "Opportunities to contribute to meaningful reliability and asset improvement initiatives",
            "A culture built on technical rigor, integrity, and continuous improvement",
          ].map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3 text-sm text-gray-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Current Opportunities" delay={0.1}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-cyan-500/30"
            >
              <div className="absolute inset-0 rounded-2xl border border-cyan-300/10 opacity-60" />
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-300" />
              <div className="relative space-y-3">
                <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                <p className="text-sm font-medium text-cyan-100">Location: {job.location}</p>
                <p className="text-gray-300">{job.summary}</p>
                <div>
                  <Link
                    href="#application-form"
                    className="inline-flex items-center justify-center rounded-full border border-cyan-300/60 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-white hover:shadow-cyan-400/30"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Job Application" delay={0.15}>
        <div
          id="application-form"
          className="mx-auto mt-6 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                      <FormLabel>Phone</FormLabel>
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
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position Applying For</FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <option value="">Select a position</option>
                        {jobs.map((job) => (
                          <option key={job.title} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="resume"
                render={({ field: { onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Resume Upload</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(event) => {
                          const file = event.target.files?.[0];
                          onChange(file ?? null);
                        }}
                        {...fieldProps}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Letter</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Briefly tell us about your experience and interest in this role."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button type="submit" className="px-6 py-3">
                  Submit Application
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </Section>
    </div>
  );
}
