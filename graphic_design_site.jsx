import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const GraphicDesignHome = () => {
  return (
    <main className="min-h-screen bg-white text-black p-6">
      <header className="flex justify-between items-center py-4 border-b">
        <h1 className="text-3xl font-bold text-yellow-600">G.S Design Studio</h1>
        <nav className="space-x-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Portfolio</Button>
          <Button variant="ghost">Services</Button>
          <Button variant="ghost">Contact</Button>
        </nav>
      </header>

      <section className="grid md:grid-cols-2 gap-10 mt-10 items-center">
        <div>
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Elevate Your Brand with Stunning Graphics
          </motion.h2>
          <p className="text-lg text-gray-600 mb-6">
            We specialize in crafting custom graphic designs, templates, and visual content that leave a lasting impression.
          </p>
          <Button className="bg-yellow-500 text-white hover:bg-yellow-600">Explore Designs</Button>
        </div>
        <motion.img
          src="https://via.placeholder.com/500x300"
          alt="Design Showcase"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
      </section>

      <section className="my-16">
        <h3 className="text-2xl font-semibold text-center mb-8">Our Latest Designs</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="hover:shadow-xl transition">
              <CardContent>
                <img
                  src={`https://via.placeholder.com/400x250?text=Design+${item}`}
                  alt={`Design ${item}`}
                  className="rounded-xl mb-4"
                />
                <h4 className="font-bold">Design {item}</h4>
                <p className="text-sm text-gray-500">Creative and customizable.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-yellow-50 p-10 rounded-2xl shadow-inner">
        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
        <form className="grid gap-4 max-w-lg">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" type="email" />
          <Textarea placeholder="Your Message" rows={4} />
          <Button className="bg-yellow-500 text-white hover:bg-yellow-600">Send Message</Button>
        </form>
      </section>

      <footer className="text-center text-gray-500 text-sm mt-16 py-6 border-t">
        © 2025 G.S Design Studio. All rights reserved.
      </footer>
    </main>
  );
};

export default GraphicDesignHome;
