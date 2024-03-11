import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Gradient } from '../ui/Gradient/gradient'

export const HeroSection: React.FunctionComponent = () => {
    return (
        <div
            data-aos="fade-bottom"
            className="flex flex-col items-center h-[600px] p-5 m-2 gap-y-10"
        >
            <div className="ml-[260px] xl:mr-[520px]">
                <Avatar>
                    <AvatarImage src="/src/assets/Myke.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <Gradient />
            <div className="text-4xl"> Hi i'am Myke Developer</div>
            <div className="w-[60%] text-2xl">
                I've been in the industry for over 3 years and have experience
                working with small startups to large corporations.
            </div>
        </div>
    )
}