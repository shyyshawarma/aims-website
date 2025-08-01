"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { Card, CardContent } from "@/components/ui/card";
import Blob from "@/components/blob";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MoreHorizontal } from "lucide-react";
import Image from "next/image";

export default function NFTMarketplace() {
  const nftCards = [
    { id: 1, image: "/placeholder.svg?height=300&width=300", name: "NFT #1", owner: "0x08 Apes", price: "6.42 ETH", hasHeart: false },
    { id: 2, image: "/placeholder.svg?height=300&width=300", name: "NFT #2", owner: "0x09 Apes", price: "3.21 ETH", hasHeart: true },
    { id: 3, image: "/placeholder.svg?height=300&width=300", name: "NFT #3", owner: "0x10 Apes", price: "8.11 ETH", hasHeart: false },
    { id: 4, image: "/placeholder.svg?height=300&width=300", name: "NFT #4", owner: "0x11 Apes", price: "2.15 ETH", hasHeart: false },
    { id: 5, image: "/placeholder.svg?height=300&width=300", name: "NFT #5", owner: "0x12 Apes", price: "9.00 ETH", hasHeart: true },
    { id: 6, image: "/placeholder.svg?height=300&width=300", name: "NFT #6", owner: "0x13 Apes", price: "5.50 ETH", hasHeart: false },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Blobs */}
      <Blob className="top-0 left-0 w-96 h-64 z-40 bg-blue/40" />
      <Blob className="top-0 left-0 w-96 h-64 bg-[#1000DE]/40" />
      <Blob className="top-0 left-0 w-96 h-64 bg-[#1000DE]/40" />
      <Blob className="top-0 left-0 w-96 h-64 bg-[#1000DE]/40" />
      <div className="absolute inset-0">
        <div className=" top-2/3 left-1/4 w-[350px] h-[350px] bg-gradient-radial from-[#0276be]/22 via-[#022381]/12 to-transparent blur-2xl animate-pulse-slower animate-float-6" />
        <div className=" top-1/4 right-1/3 w-[300px] h-[200px] bg-gradient-radial from-[#022381]/18 to-transparent blur-xl animate-pulse-slow animate-float-7" />
        <div className=" bottom-1/3 left-1/6 w-[250px] h-[250px] bg-gradient-radial from-[#0276be]/15 to-transparent blur-2xl animate-pulse-slower animate-float-8" />
        <div className=" inset-0 bg-gradient-to-r from-transparent via-[#0276be]/5 to-transparent animate-slide-horizontal" />
        <div className=" inset-0 bg-gradient-to-b from-[#021065]/8 via-transparent to-[#022381]/8 animate-slide-vertical" />
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-8"> Achievements </h1>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {nftCards.map((nft) => (
              <SwiperSlide key={nft.id}>
                <Card className="group relative overflow-hidden bg-gradient-to-b from-[#021065]/15 to-black/80 border-[#0276be]/20 hover:border-[#0276be]/60 transition-all duration-500 ease-out cursor-pointer">

                  <Blob className="absolute bottom-0 left-0 w-40 h-32 bg-[#1000DE]/100  blurz-10 " />
                  <Blob className="absolute bottom-0 left-0 w-40 h-40 bg-[#1000DE]/100  z-10 " />

                  <CardContent className="p-6 relative z-10">
                   
                    <div className="flex items-center gap-2 mb-4">    
                      <Avatar className="w-6 h-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" />
                        <AvatarFallback>OA</AvatarFallback>
                      </Avatar>
                      <span className="text-white/70 text-sm">OWNED BY</span>
                      <span className="text-white text-sm font-medium">{nft.owner}</span>
                      {nft.hasHeart && <Heart className="w-4 h-4 text-[#1000DE] fill-[#0276be]" />}
                      <MoreHorizontal className="w-4 h-4 text-white/50" />
                    </div>

                    {/* Image */}
                    <Image
                      src={nft.image}
                      alt={nft.name}
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover rounded-2xl"
                    />

                    {/* Info */}
                    <h3 className="text-white text-xl font-semibold mt-4">{nft.name}</h3>
                    <p className="text-white text-lg font-bold">{nft.price}</p>
                    <Button className="w-full bg-gradient-to-r from-[#0276be] to-[#022381] text-white px-6 mt-4">
                      Auction
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
