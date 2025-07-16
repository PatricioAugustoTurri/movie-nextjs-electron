"use client";
import { email, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Fascinate_Inline } from "next/font/google";

const fascinateInline = Fascinate_Inline({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const schema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name is required",
    })
    .max(50, {
      message: "Name must be less than 50 characters",
    }),
  email: email(),
  message: z
    .string()
    .min(2, {
      message: "Message is required",
    })
    .max(500, {
      message: "Message must be less than 500 characters",
    }),
});
function ContactPage() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  function onSumit(values: z.infer<typeof schema>) {
    console.log(values);
    form.reset();
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className={`${fascinateInline.className} text-4xl`}>
            Contact
          </CardTitle>
          <CardDescription>
            Leave a comment about anything you want to know.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSumit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
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
                      <Textarea placeholder="Enter your message" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactPage;
