import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface PhotoSliderProps {
    images: string[];
}

export function PhotoSlider({ images }: PhotoSliderProps) {
    return (
        <div className="w-full max-w-4xl mx-auto px-12">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2">
                            <div className="overflow-hidden rounded-xl shadow-lg bg-white">
                                <img
                                    src={image}
                                    alt={`Gastrofish Gallery ${index + 1}`}
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12 h-10 w-10 border-adria/20 text-adria hover:bg-adria/10" />
                <CarouselNext className="hidden md:flex -right-12 h-10 w-10 border-adria/20 text-adria hover:bg-adria/10" />
            </Carousel>
        </div>
    )
}
