import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Blob from "@/components/blob";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10 font-sans">
      <Blob classname="top-40 left-0 z-0" />
      <Blob classname="bottom-0 right-0 z-0" />

      <header className="flex flex-col items-center mb-12 space-y-4 text-center">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-10 h-10 bg-gradient-to-br from-custom-light-blue to-custom-mid-blue rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-lg font-bold"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Our Latest{" "}
            <span className="bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent">
              Works
            </span>
          </h1>
        </div>

        <Tabs defaultValue="Collectibles" className="w-full flex flex-col items-center">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent border-none">
            {[
              "Collectibles",
              "Digital Art",
              "Music and Audio",
              "Virtual Real Estate",
              "Gaming Assets",
              "Photography",
              "Fashion and Wearables",
            ].map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-2xl border border-blue-500 px-4 py-2 text-sm font-medium text-white data-[state=active]:bg-blue-600"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
        <Card className="project-card-bg col-span-1 md:col-span-3 h-[300px] flex items-center justify-center p-6 relative overflow-hidden bg-card project-card-glow glow-border rounded-3xl">
          <div className="relative z-15 text-center space-y-3">
            <h2 className="text-4xl font-extrabold text-white">PROJECT</h2>
            <div className="flex items-center justify-center space-x-4">
              <div className="tezos-icon"></div>
              <div>
                <p className="text-lg text-gray-300">Current Bid</p>
                <p className="text-3xl font-bold text-custom-light-blue">7.45 ETH</p>
                <p className="text-sm text-gray-500">$20,456.12</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="col-span-1 md:col-span-2 h-[300px] relative overflow-hidden bg-card card-glow glow-border rounded-3xl">
          <Image
            src="/vr-glasses.jpg"
            alt="Person with VR Headset"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-80 rounded-3xl"
          />
        </Card>

        <Card className="col-span-1 md:col-span-2 h-[300px] relative overflow-hidden bg-card card-glow glow-border rounded-3xl">
          <Image
            src="/car.jpg"
            alt="Car in a futuristic city"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-80 rounded-2xl"
          />
        </Card>

        <Card className="col-span-1 md:col-span-3 h-[300px] flex items-center justify-center p-4 relative overflow-hidden bg-card card-glow glow-border rounded-3xl">
          <div className="cube-grid-container w-full h-full grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="cube">
                {(i === 2 || i === 6) && (
                  <div className="cube-bars">
                    <div className="cube-bar"></div>
                    <div className="cube-bar"></div>
                    <div className="cube-bar"></div>
                    <div className="cube-bar"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </main>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Top categories we have</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { name: "Digital Art", avatar: "/avatars/avatar1.png" },
            { name: "Music and Audio", avatar: "/avatars/avatar2.png" },
            { name: "Gaming Assets", avatar: "/avatars/avatar3.png" },
            { name: "Collectibles", avatar: "/avatars/avatar4.png" },
            { name: "Virtual Real Estate", avatar: "/avatars/avatar5.png" },
            { name: "Photography", avatar: "/avatars/avatar6.png" },
          ].map((category) => (
            <button
              key={category.name}
              className="group relative rounded-lg focus:outline-none transition-all duration-300 w-full">

              <div className="absolute inset-0 rounded-lg z-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <Card
                className="relative z-10 flex flex-row items-center space-x-5 px-27 py-3 w-full
                  border border-blue-400 rounded-lg bg-card transition-all duration-300
                  shadow-[0_0_10px_rgba(96,165,250,0.5)]
                  group-hover:group-hover:bg-[linear-gradient(135deg,#0276be,#022381,#021065)]
                  group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.8)]">

                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarImage src={category.avatar} alt={category.name} />
                  <AvatarFallback>{category.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>

                <span className="text-lg font-sans font-medium text-white whitespace-nowrap">
                  {category.name}
                </span>
              </Card>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
