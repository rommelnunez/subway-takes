import { Play, Info } from "lucide-react";
import { showMetadata } from "@/lib/data";
import { getAssetPath } from "@/lib/utils";

interface HeroProps {
    onPlay: () => void;
}

export default function Hero({ onPlay }: HeroProps) {
    return (
        <div className="relative w-full h-[85vh] md:h-screen text-white">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url("${getAssetPath('/headerimage.png')}")`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                </div>
            </div>

            <div className="relative z-10 w-full h-full flex flex-col justify-center pl-20 pr-8 md:pl-32 md:pr-12">
                <div className="max-w-2xl space-y-4 md:space-y-6 mt-16">

                    {/* Custom SVG Logo */}
                    <div className="flex items-center gap-1 mb-2 fade-in">
                        <svg className="w-10 h-10 md:w-[60px] md:h-[60px]" viewBox="0 0 412 410" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M262.731 56.6918C255.327 57.577 248.206 61.2787 242.372 67.2738C237.624 72.1021 235.411 75.9244 233.52 82.2816C231.066 90.6104 232.635 101.233 237.343 108.515C242.654 116.723 250.861 122.437 260.719 124.77C263.696 125.495 271.14 125.374 274.399 124.609C282.767 122.598 290.613 117.287 295.32 110.447C297.131 107.831 299.505 102.52 300.39 99.1806C301.476 95.0765 301.396 86.6673 300.189 82.2816C297.171 71.0157 289.688 62.4858 279.549 58.7841C274.318 56.8528 268.041 56.0883 262.731 56.6918Z" fill="#e9c46a"></path>
                            <path d="M173.571 106.664C168.341 108.676 165.645 113.303 159.207 131.57C157.759 135.674 155.989 140.543 155.305 142.434C154.58 144.325 153.534 147.302 152.891 149.073C151.965 151.768 150.114 156.637 146.614 165.77C145.407 168.909 146.091 172.61 148.425 175.668C151.684 179.933 157.075 181.261 161.863 178.887C164.679 177.519 166.208 175.709 167.496 172.248C168.019 170.8 170.795 163.718 173.611 156.516C176.468 149.314 179.888 140.543 181.296 137.002C182.865 132.898 183.992 130.524 184.394 130.444C184.756 130.363 189.061 131.53 194.01 132.978C206.402 136.68 206.201 136.6 206.322 137.284C206.443 137.847 202.339 146.94 189.826 174.019C184.555 185.405 177.916 199.649 175.261 205.402C174.295 207.374 172.042 211.558 170.191 214.657C168.341 217.755 164.921 223.549 162.547 227.532C144.522 257.91 137.803 269.055 137.239 269.658C136.877 270.021 123.479 274.688 107.466 279.999C91.4527 285.35 77.7328 290.058 77.0086 290.5C75.3992 291.547 73.8703 293.518 72.5023 296.455C71.5367 298.467 71.416 299.232 71.416 302.813C71.416 306.635 71.4965 306.957 72.9047 309.894C74.7152 313.555 77.0488 315.809 80.7906 317.579C83.2047 318.746 83.8887 318.867 87.1074 318.867C90.6078 318.867 90.8492 318.786 95.1543 316.815C97.6086 315.648 101.029 314.239 102.799 313.636C104.569 313.032 117.163 308.767 130.762 304.181C144.361 299.594 155.989 295.651 156.552 295.409C157.92 294.846 162.869 289.012 167.053 283.057C168.984 280.24 177.273 266.44 182.584 257.105C184.153 254.329 185.682 251.754 185.963 251.351C186.607 250.506 186.004 250.064 196.625 259.117C209.541 270.182 219.036 278.309 221.732 280.562C223.261 281.81 224.508 283.057 224.508 283.298C224.508 283.821 225.996 282.132 202.218 308.848C179.244 334.639 180.049 333.472 180.049 340.594C180.049 344.658 180.17 345.221 181.216 347.394C182.704 350.331 185.682 353.308 188.659 354.757C191.596 356.205 196.746 356.527 200.045 355.481C203.948 354.234 204.391 353.831 212.88 344.376C215.173 341.841 220.243 336.289 224.146 332.104C243.981 310.779 248.407 305.911 252.994 300.559C255.73 297.341 258.868 293.478 259.954 291.949C264.34 285.712 264.984 279.999 261.926 273.722C260.759 271.348 259.834 270.503 242.694 255.858C232.796 247.408 224.266 240.085 223.743 239.603L222.818 238.717L225.071 235.941C226.721 233.929 228.571 230.67 231.71 224.313C234.124 219.445 236.337 214.817 236.699 214.053C237.021 213.289 238.509 210.029 239.998 206.851C242.694 200.936 248.367 188.262 250.459 183.353C251.103 181.865 251.746 180.658 251.907 180.658C252.028 180.658 253.195 183.675 254.482 187.377C259.874 203.028 260.357 204.034 263.656 206.207C267.518 208.782 271.783 208.903 275.404 206.529C276.289 205.925 280.554 202.465 284.859 198.804C298.016 187.578 310.65 177.398 311.052 177.68C311.293 177.801 312.822 179.974 314.432 182.468C317.892 187.779 318.898 188.705 321.271 188.705C323.203 188.705 324.772 187.699 325.697 185.888C326.945 183.434 326.743 182.87 321.07 174.099L318.536 170.156L320.185 168.466C321.111 167.541 322.116 166.092 322.479 165.288C323.364 163.115 323.243 158.769 322.237 156.516C321.151 154.102 318.093 151.004 315.639 149.837C313.104 148.63 309.161 148.55 306.747 149.636L305.097 150.4L303.609 147.986L302.16 145.612L302.804 143.399C303.93 139.456 303.327 137.525 298.901 131.409C295.079 126.018 292.544 124.328 288.4 124.328C285.262 124.368 281.439 127.144 280.031 130.444C278.583 133.823 278.985 136.519 281.842 141.911C283.089 144.285 284.578 146.86 285.101 147.544C286.469 149.354 289.205 150.883 291.659 151.165C293.63 151.406 293.791 151.487 295.32 153.82C296.246 155.148 296.889 156.436 296.809 156.677C296.729 156.919 294.677 158.85 292.263 160.942C289.808 163.034 285.986 166.374 283.693 168.386C281.399 170.357 278.422 172.852 277.094 173.898L274.6 175.829L272.709 170.88C271.663 168.184 269.812 163.075 268.524 159.534C262.288 141.991 258.144 134.387 251.586 128.351C246.275 123.523 239.395 121.109 208.092 113.223C196.223 110.205 184.877 107.348 182.865 106.785C178.52 105.618 176.307 105.578 173.571 106.664Z" fill="#e9c46a"></path>
                        </svg>
                    </div>

                    {/* Title - Massive, stacked */}
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-2xl leading-[0.85] w-full max-w-[90%] uppercase">
                        Subway<br />Takes
                    </h1>

                    {/* Top 10 Badge */}
                    <div className="flex items-center gap-2 my-4">
                        <div className="flex flex-col items-center justify-center bg-[#E50914] text-white w-8 h-8 font-bold text-xs rounded sm">
                            <span>TOP</span>
                            <span className="leading-none text-[10px]">10</span>
                        </div>
                        <span className="font-bold text-xl md:text-2xl text-white drop-shadow-lg">#8 in Social Shows Today</span>
                    </div>

                    {/* Description */}
                    <p className="text-white text-base md:text-xl font-medium drop-shadow-lg max-w-xl text-shadow-sm leading-snug line-clamp-3 md:line-clamp-none">
                        {showMetadata.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-2 md:gap-4 pt-4">
                        <button
                            onClick={onPlay}
                            className="flex items-center gap-2 md:gap-3 bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-[4px] font-bold text-base md:text-lg hover:bg-white/90 transition-colors"
                        >
                            <Play className="fill-black w-5 h-5 md:w-7 md:h-7" />
                            Play
                        </button>
                        <a
                            href="https://www.instagram.com/veronika_iscool/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 md:gap-3 bg-[rgba(109,109,110,0.7)] text-white px-6 py-2 md:px-8 md:py-3 rounded-[4px] font-bold text-base md:text-lg hover:bg-[rgba(109,109,110,0.4)] transition-colors backdrop-blur-md"
                        >
                            <Info className="w-5 h-5 md:w-7 md:h-7" />
                            More info
                        </a>
                        {/* Age Rating - Pushed to right usually, but we keep it close for mobile/flex logic or handle with absolute positioning like reference */}
                        <div className="absolute right-0 bottom-24 md:bottom-32 bg-[rgba(51,51,51,0.6)] border-l-2 border-[#dcdcdc] px-2 md:px-4 py-1 flex items-center text-white backdrop-blur-sm">
                            <span className="font-semibold text-sm md:text-base">{showMetadata.maturityRating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
