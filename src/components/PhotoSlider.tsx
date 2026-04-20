import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export interface PhotoSliderImage {
    src: string;
    objectPosition?: string;
}

interface PhotoSliderProps {
    images: Array<string | PhotoSliderImage>;
}

const normalize = (img: string | PhotoSliderImage): PhotoSliderImage =>
    typeof img === 'string' ? { src: img } : img;

export function PhotoSlider({ images }: PhotoSliderProps) {
    const items = images.map(normalize);
    return (
        <div className="w-full max-w-4xl mx-auto relative">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {items.map((img, index) => (
                        <CarouselItem key={index} className="basis-full">
                            <div className="overflow-hidden rounded-xl shadow-lg bg-white">
                                <img
                                    src={img.src}
                                    alt={`Gastrofish Gallery ${index + 1}`}
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                                    style={{ objectPosition: img.objectPosition ?? 'center' }}
                                    loading="lazy"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-3 h-10 w-10 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-graphite hover:bg-white" />
                <CarouselNext className="right-3 h-10 w-10 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-graphite hover:bg-white" />
            </Carousel>
        </div>
    )
}
