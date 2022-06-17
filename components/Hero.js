import Link from "next/link";

export default function Hero() {
    return (
        <div className="grid place-items-center md:place-items-start space-y-5 py-32 text-green-500 font-bold items-center
        h-auto md:bg-ufo bg-no-repeat md:bg-center lg:bg-right">
            <h1 className="text-green-500 text-6xl lg:text-8xl">Ufo <span className="text-white text-6xl lg:text-8xl">Belivers</span></h1>
            <p className="text-white text-4xl"><span>❝</span>The truth is out there</p>
            <p className="text-white text-xl">-A believer</p>
            <Link href="https://www.arcgis.com/apps/webappviewer/index.html?id=ddda71d5211f47e782b12f3f8d06246e">
                <a>
                    <button className="bg-transparent text-base border border-green-500 p-5 rounded-lg font-semibold text-white">
                        View a map of UFO sightings
                    </button>
                </a>
            </Link>
        </div>
    )
}