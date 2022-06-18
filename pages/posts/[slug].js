import Footer from "../../components/Footer";

export default function Post( data ){

    const post = data.post;
    return (
        <div className='w-full grid'>
            <div className='max-w-4xl mt-10 flex-col space-y-4 place-self-center'>
                <h1 className='text-4xl font-bold'>{post.title}</h1>
                <article className="text-lg article" dangerouslySetInnerHTML={{__html: post.content}}></article>
            </div>
            <Footer />
        </div>
    )

}

export async function getStaticProps(context) {

    const res = await fetch('http://52.56.219.192/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        title
                        slug
                        content
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            `,
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        })
    })

    const json = await res.json()

    return {
        props: {
            post: json.data.post,
        },
        revalidate: 60
    }

}

export async function getStaticPaths() {

    const res = await fetch('http://52.56.219.192/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        slug
                        content
                        title
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        `})
    })

    const json = await res.json()
    const posts = json.data.posts.nodes;

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }

}