import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BookOpen, Server } from "lucide-react";

type Publication = {
  title: string;
  venue: string;
  date: string;
  description: string;
  link: string;
  tags: string[];
};

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
  description: string;
  tags: string[];
};

type HobbyGallery = {
  title: string;
  summary: string;
  icon: React.ReactNode;
  badges: string[];
  images: GalleryImage[];
};

const publications: Publication[] = [
  {
    title: "Forest Fire Detection and Guiding Animals to a Safe Area by Using Sensor Networks and Sound",
    venue: "Institute of Electrical and Electronics Engineers",
    date: "Feb 18, 2022",
    description:
      "Wireless Sensor Networks (WSNs) driven decision system that triangulates forest fire events, broadcasts evacuation audio cues, and guides wildlife toward safe zones in real time.",
    link: "https://ieeexplore.ieee.org/document/9711785",
    tags: ["Wireless Sensor Networks", "Edge AI", "Environmental Safety"],
  },
];

const hobbyGalleries: HobbyGallery[] = [
  {
    title: "Homelab & Rack Builds",
    summary: "Custom AI workstation and homelab rack for rapid prototyping, fine-tuning experiments, and infra tinkering.",
    icon: <Server className="w-5 h-5" />,
    badges: ["Homelab", "GPU Rig", "10GbE Networking"],
    images: [
      {
        src: "/gallery/homelab-rack.jpg",
        alt: "Homelab rack with AI workstation and UPS stack",
        label: "2024 Rack Refresh",
        description: "Dual UPS-backed rack with Proxmox cluster, 10GbE switching, and dedicated fine-tuning workstation.",
        tags: ["Proxmox", "UPS Stack", "RTX 4090", "Fiber Uplink"],
      },
    ],
  },
];

const PublicationCard = ({ publication }: { publication: Publication }) => {
  return (
    <Card className="p-6 bg-card border-2 border-primary/20 hover:border-primary/60 transition-all hover:scale-[1.02]">
      <div className="flex items-start gap-3 mb-4">
        <BookOpen className="w-6 h-6 text-primary" aria-hidden />
        <div>
          <h3 className="font-pixel text-sm md:text-base text-foreground mb-1 leading-6">{publication.title}</h3>
          <p className="font-pixel text-[10px] uppercase tracking-widest text-muted-foreground">
            {publication.venue} • {publication.date}
          </p>
        </div>
      </div>

      <p className="font-pixel text-xs text-foreground/70 leading-relaxed mb-4">{publication.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {publication.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="font-pixel text-[10px] border-muted-foreground/30">
            {tag}
          </Badge>
        ))}
      </div>

      <Button
        asChild
        size="sm"
        variant="outline"
        className="font-pixel text-xs border-secondary/40 hover:border-secondary hover:bg-secondary/10"
      >
        <a href={publication.link} target="_blank" rel="noopener noreferrer">
          Show publication
        </a>
      </Button>
    </Card>
  );
};

const HobbyGalleryCard = ({ gallery }: { gallery: HobbyGallery }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="p-6 bg-card border-2 border-accent/30 hover:border-accent/60 transition-all hover:scale-[1.02] cursor-pointer">
          <div className="flex items-center gap-2 text-accent mb-3">
            {gallery.icon}
            <h3 className="font-pixel text-sm md:text-base text-foreground">{gallery.title}</h3>
          </div>
          <p className="font-pixel text-xs text-foreground/70 leading-relaxed mb-3">{gallery.summary}</p>
          <div className="flex flex-wrap gap-2">
            {gallery.badges.map((badge) => (
              <Badge key={badge} variant="outline" className="font-pixel text-[10px] border-accent/40 text-accent">
                {badge}
              </Badge>
            ))}
          </div>
          <p className="font-pixel text-[10px] uppercase tracking-widest text-muted-foreground mt-4">
            Tap to launch gallery ▶
          </p>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-pixel text-sm text-primary uppercase tracking-widest">
            {gallery.title}
          </DialogTitle>
          <DialogDescription className="font-pixel text-xs text-muted-foreground">
            Scroll through the build log snapshots and tagged components.
          </DialogDescription>
        </DialogHeader>

        <div className="relative mt-2">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {gallery.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-xl border-2 border-primary/20 bg-muted/20">
                      <img src={image.src} alt={image.alt} className="w-full h-80 object-cover" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-pixel text-xs text-primary uppercase tracking-widest">{image.label}</h4>
                      <p className="font-pixel text-xs text-foreground/70 leading-relaxed">{image.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {image.tags.map((tag) => (
                          <Badge key={tag} className="font-pixel text-[10px] bg-primary/10 border-primary/30 text-primary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/40 text-primary hover:bg-primary/10" />
            <CarouselNext className="border-primary/40 text-primary hover:bg-primary/10" />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const Research = () => {
  return (
    <section id="research" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-3">
          <h2 className="font-pixel text-2xl md:text-4xl text-primary">[ RESEARCH & BUILDS ]</h2>
          <p className="font-pixel text-xs text-muted-foreground">
            Papers on wildfire resilience + the homelab rack that powers my experiments.
          </p>
          <div className="w-32 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((publication) => (
            <PublicationCard key={publication.title} publication={publication} />
          ))}
          {hobbyGalleries.map((gallery) => (
            <HobbyGalleryCard key={gallery.title} gallery={gallery} />
          ))}
        </div>
      </div>
    </section>
  );
};


