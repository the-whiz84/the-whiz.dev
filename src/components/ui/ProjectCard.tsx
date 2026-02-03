import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export function ProjectCard({ title, description, tags, imageUrl, liveUrl, repoUrl }: ProjectCardProps) {
  return (
    <div className="group relative border border-border bg-card/50 hover:border-primary transition-colors duration-300">
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden bg-black/50">
         <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-6 relative">
         <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold font-mono text-white group-hover:text-primary transition-colors">
               {title}
            </h3>
            <div className="flex space-x-3">
               {repoUrl && (
                  <Link href={repoUrl} target="_blank" className="text-white hover:text-primary transition-colors">
                     <Github size={20} />
                  </Link>
               )}
               {liveUrl && (
                  <Link href={liveUrl} target="_blank" className="text-white hover:text-primary transition-colors">
                     <ExternalLink size={20} />
                  </Link>
               )}
            </div>
         </div>

         <p className="text-muted-foreground font-mono text-sm mb-6 line-clamp-3">
            {description}
         </p>

         <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
               <span 
                  key={tag} 
                  className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full border border-primary/20"
               >
                  {tag}
               </span>
            ))}
         </div>
      </div>
    </div>
  );
}
