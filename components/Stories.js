import Image from "next/image";
import Link from "next/link";

export default function Stories({data}) {
    return (
        <div className="w-full flex-col place-self-center">
            <h1 className="text-6xl text-white font-bold flex justify-center"><span className="text-green-500">Sto</span>ries</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                {
                    data.nodes.map(post => {
                        return (
                            <Link href={`/posts/${post.slug}`} key={post.slug}>
                                <a>
                                    <div className="text-white max-w-xs flex-col justify-center">
                                        <Image src={post.featuredImage.node.sourceUrl}
                                            width={300}
                                            height={150}
                                            alt="Thumbnail" />
                                        <h1 className="text-white text-lg sm:text-xl">{post.title}</h1>
                                    </div>
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}