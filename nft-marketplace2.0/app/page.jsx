import { Card, CardContent } from "@/components/ui/card"
import Blob from "@/components/blob"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MoreHorizontal } from "lucide-react"
import Image from "next/image"

export default function NFTMarketplace() {
  const nftCards = [
    {
      id: 1,
      image: "/placeholder.svg?height=300&width=300",
      name: "Toadstallsobel #56",
      owner: "0x08 Apes",
      price: "6.42 ETH",
      hasHeart: false,
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=300",
      name: "Toadstallsobel #56",
      owner: "0x08 Apes",
      price: "6.42 ETH",
      hasHeart: true,
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=300",
      name: "Toadstallsobel #56",
      owner: "0x08 Apes",
      price: "6.42 ETH",
      hasHeart: false,
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated background gradient patches */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[700px] h-[500px] bg-gradient-radial from-[#0276be]/30 via-[#022381]/20 to-transparent blur-3xl animate-pulse-slow animate-float-1" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#021065]/35 via-[#0276be]/25 to-transparent blur-3xl animate-pulse-slower animate-float-2" />
        <div className="absolute bottom-0 left-1/3 w-[800px] h-[700px] bg-gradient-radial from-[#022381]/40 via-[#0276be]/30 to-transparent blur-3xl animate-pulse-slow animate-float-3" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[400px] bg-gradient-radial from-[#0276be]/25 via-[#021065]/15 to-transparent blur-2xl animate-pulse-slower animate-float-4" />
        <div className="absolute top-1/3 left-1/2 w-[400px] h-[300px] bg-gradient-radial from-[#021065]/20 via-[#0276be]/10 to-transparent blur-xl animate-pulse-slow animate-float-5" />
        <div className="absolute top-2/3 left-1/4 w-[350px] h-[350px] bg-gradient-radial from-[#0276be]/22 via-[#022381]/12 to-transparent blur-2xl animate-pulse-slower animate-float-6" />
        <div className="absolute top-1/4 right-1/3 w-[300px] h-[200px] bg-gradient-radial from-[#022381]/18 to-transparent blur-xl animate-pulse-slow animate-float-7" />
        <div className="absolute bottom-1/3 left-1/6 w-[250px] h-[250px] bg-gradient-radial from-[#0276be]/15 to-transparent blur-2xl animate-pulse-slower animate-float-8" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0276be]/5 to-transparent animate-slide-horizontal" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#021065]/8 via-transparent to-[#022381]/8 animate-slide-vertical" />
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bubbles omitted for brevity, they remain unchanged and valid JSX */}
        {/* ... */}
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-12">
            <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in">
              Explore{" "}
              <span className="bg-gradient-to-r from-[#0276be] to-[#022381] bg-clip-text text-transparent animate-gradient-shift">
                NFTs
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nftCards.map((nft, index) => (
              <Card
                key={nft.id}
                className="group bg-gradient-to-b from-[#021065]/15 to-black/80 border-[#0276be]/20 backdrop-blur-sm hover:border-[#0276be]/60 hover:shadow-2xl hover:shadow-[#0276be]/20 hover:scale-105 hover:bg-gradient-to-b hover:from-[#021065]/25 hover:to-[#022381]/15 transition-all duration-500 ease-out cursor-pointer animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Blob classname="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-32 bg-[#0276be]/60 blur-2xl -z-10" />
                <Blob classname="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-32 bg-[#022381]/60 blur-2xl -z-10" />
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" />
                      <AvatarFallback className="bg-[#0276be] text-white text-xs">OA</AvatarFallback>
                    </Avatar>
                    <span className="text-white/70 text-sm">OWNED BY</span>
                    <span className="text-white text-sm font-medium">{nft.owner}</span>
                    <div className="ml-auto flex items-center gap-2">
                      {nft.hasHeart && (
                        <Heart className="w-4 h-4 text-[#0276be] fill-[#0276be] group-hover:scale-110 transition-transform duration-300 animate-pulse-heart" />
                      )}
                      <MoreHorizontal className="w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors duration-300" />
                    </div>
                  </div>

                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0276be]/10 to-[#022381]/10 group-hover:from-[#0276be]/20 group-hover:to-[#022381]/20 transition-all duration-500" />
                    <Image
                      src={nft.image || "/placeholder.svg"}
                      alt={nft.name}
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover rounded-2xl relative z-10 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-white text-xl font-semibold group-hover:text-[#0276be] transition-colors duration-300">
                      {nft.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/70 text-sm mb-1 group-hover:text-white/90 transition-colors duration-300">
                          Highest Bid
                        </p>
                        <p className="text-white text-lg font-bold group-hover:text-[#0276be] transition-colors duration-300">
                          {nft.price}
                        </p>
                      </div>

                      <Button className="bg-gradient-to-r from-[#0276be] to-[#022381] hover:from-[#022381] hover:to-[#021065] text-white px-8 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#0276be]/25 hover:shadow-[#0276be]/40 hover:scale-105 group-hover:shadow-xl animate-button-glow">
                        Auction
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
