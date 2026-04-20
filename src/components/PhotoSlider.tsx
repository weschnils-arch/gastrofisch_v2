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

type Orientation = 'landscape' | 'portrait' | 'square';

interface PhotoSliderProps {
    images: Array<string | PhotoSliderImage>;
    orientation?: Orientation;
}

const normalize = (img: string | PhotoSliderImage): PhotoSliderImage =>
    typeof img === 'string' ? { src: img } : img;

const aspectClass = (o: Orientation) => {
    if (o === 'portrait') return 'aspect-[3/4]';
    if (o === 'square') return 'aspect-square';
    return 'aspect-[4/3]';
};

const maxWidthClass = (o: Orientation) => {
    if (o === 'portrait') return 'max-w-md';
    return 'max-w-4xl';
};

export function PhotoSlider({ images, orientation = 'landscape' }: PhotoSliderProps) {
    const items = images.map(normalize);
    return (
        <div className={`w-full ${maxWidthClass(orientation)} mx-auto relative`}>
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
                                    className={`w-full ${aspectClass(orientation)} object-cover transition-transform duration-700 hover:scale-105`}
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
