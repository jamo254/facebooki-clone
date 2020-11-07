import React from 'react';
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fru-ru.facebook.com%2Fnba&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                title="nba page"
                width="340"
                height="450"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media">
            </iframe>    
            
           
            <iframe 
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRTnews%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
            title="RT post"
            width="340" 
            height="500" 
            style={{border:"none", overflow:"hidden"}} scrolling="no" 
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media"></iframe>
        </div>
    )
}

export default Widgets
