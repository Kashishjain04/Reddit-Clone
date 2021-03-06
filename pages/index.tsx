import { useQuery } from '@apollo/client'
import Feed from '../components/Feed'
import Postbox from '../components/Postbox'
import SubredditRow from '../components/SubredditRow'
import { GET_SUBREDDITS_WITH_LIMIT } from '../graphql/queries'

const Home = () => {
  const {data} = useQuery(GET_SUBREDDITS_WITH_LIMIT, {
    variables: {
      limit: 10
    }
  })
  const subreddits: Subreddit[] = data?.getSubredditListLimit
  return (
    <div className="px-2 lg:px-0 my-7 mx-auto max-w-5xl">
      <main>
        <Postbox />
        <div className="flex space-x-5">
          <Feed />
          <div className="sticky top-36 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline">
            <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>
            <div className="">
              {/* List top subreddits */}
              {subreddits?.map((subreddit, i) => (
                <SubredditRow key={subreddit.id} topic={subreddit.topic} index={i} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
