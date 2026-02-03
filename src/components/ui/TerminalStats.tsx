"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Clock, Server } from "lucide-react";

const stats = [
  {
    icon: <Cpu className="w-4 h-4 text-primary" />,
    label: "Core Usage",
    value: "50%",
    detail: "Developer",
    color: "bg-primary"
  },
  {
    icon: <Server className="w-4 h-4 text-purple-400" />,
    label: "Memory",
    value: "256GB",
    detail: "Knowledge Base",
    color: "bg-purple-400"
  },
  {
    icon: <Terminal className="w-4 h-4 text-indigo-400" />,
    label: "Processes",
    value: "13",
    detail: "Active Projects",
    color: "bg-indigo-400"
  },
  {
    icon: <Clock className="w-4 h-4 text-white" />,
    label: "Uptime",
    value: "5.2y",
    detail: "Since Hello World",
    color: "bg-white"
  },
];

export default function TerminalStats() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-20 p-6 border border-border bg-card/50 backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-indigo-500 opacity-50"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col space-y-2 hover:bg-white/5 p-2 rounded-sm transition-colors cursor-default"
                >
                    <div className="flex items-center space-x-2 text-muted-foreground text-sm uppercase tracking-widest font-mono">
                        {stat.icon}
                        <span>{stat.label}</span>
                    </div>
                    <div className="flex items-baseline space-x-2">
                        <span className="text-4xl md:text-5xl font-bold font-mono text-white">{stat.value}</span>
                        <span className="text-xl md:text-2xl text-muted-foreground whitespace-nowrap">{stat.detail}</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, delay: 0.5 + (index * 0.1) }}
                            className={`h-full ${stat.color} shadow-[0_0_10px_rgba(139,92,246,0.5)]`}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  );
}
