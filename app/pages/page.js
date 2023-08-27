import Image from 'next/image'
import HoustonBanner from './houston_banner'

export const metadata = {
  title: 'Houston',
  description: 'My dog Houston',
}

export default function HoustonPage() {
  return (
    <div className="flex min-h-screen flex-col p-2">
      <div className='flex border-2 border-indigo-500 item-center mx-auto'>
        <HoustonBanner />
      </div>
      <div className='mt-10 mx-10'>
        <p>Houston is a Boxer Terrier which is a mix between a Boxer and Boston Terrier.  As you may know Boston Terriers are on the smaller side so imagine our surprise when Houston grew to 65 lbs.  Initially I did not want a puppy (we got him as a youngin) I had been attacked by two dogs a few years earlier and also have a fairly large family.  So, needless to say, from my past experiences with dogs in general (nice or attacky)  I assumed Houston would be a handful to train and take care of.  The start was rocky…I didn’t want to let him in although the family loved him at first sight.  He was an escape artist, always finding ways to escape the kennel at night and whenever we left for work/school.  Whining whenever everyone was sleeping until he freed himself.  I evolved my strategy by using bungee cords to secure him away from the rest of the house.  He chewed through them and would be out of the cage shortly after being Fort Knox Secured.  There was nothing I could do…? With my pursuit to cage the free I was missing out on the intelligence and respect the young one possessed.  There was a day where I finally saw him.  I was off work and being a bit cantankerous.  He stood in front of me and started walking towards the back room, then looked back.  I saw it…what?  I stood up and almost as if to confirm a check had been made he started slowly walking towards the hallway leading to the back door, stopped at the entry, in view of me of course, then looked at me again.  I started to walk towards him and then he disappeared into the hallway.  Once I reached the entrance to the hallway where he was sarcastically standing and looking for my arrival he walked to the back door and stopped and stared at the door.  I went back and opened it and he leapt out into the backyard.  What just happened?  DId he nudge me to where I needed to go…?  This has to be the smartest dog ever.  In that instance I found myself falling in-like with the young one.  He makes me look like a dog whisperer as we proudly take walks to the dog park…no leash needed.  He walks by my side without any instruction.  He is Extremely respectful of other dogs and understands how to puff up when necessary.  He is curious about everything and seems to learn new things with ease. I now believe i'm one of the luckiest people in the world.  Caesar always says (on the Dog Whisperer show) you don't get the dog you want but the dog you need.  I confirm this to be True (at least this time around).
        </p>
      </div>

    </div>
  )
}
