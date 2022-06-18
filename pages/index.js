import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Stories from "../components/Stories";

export default function Home({posts}) {
  return (
    <div className="bg-black px-10">
      <Hero />
      <Stories data={posts} />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://52.56.219.192/graphql', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(
      {
        query: `
        query AllPostsQuery {
          posts {
            nodes {
              slug
              title
              featuredImage {
                  node {
                      sourceUrl
                  }
              }
            }
          }
        }
        `
      })

  })

  const json = await res.json()
  
  return {
    props: {
      posts: json.data.posts,
    },
  }

}