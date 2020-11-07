import React from 'react'
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Posts from './Posts';
function Feed() {
    return (
        <div className="feed">
            {/* StoryReel */}
            <StoryReel />
            {/* MessageSender */}
            <MessageSender />
            <Posts 
                profilePic="https://images.unsplash.com/photo-1596465467444-b6e43222e5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80"
        
               message="wow this works"  
               timestamp="This is the timestamp"
               username="Coders Ne"
               
               image="https://images.unsplash.com/photo-1543013309-0d1f4edeb868?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=423&q=80"
            />
            <Posts />
        </div>
    )
}

export default Feed