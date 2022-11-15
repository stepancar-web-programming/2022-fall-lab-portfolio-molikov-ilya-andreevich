/*let store ={
    _state : {
        main: {
            posts: [{id: 0, img: "https://i.ytimg.com/vi/osyf056RHbY/maxresdefault.jpg", text: "hi!", counter: 0},
                {id: 1, img: "https://live.staticflickr.com/28/30692301014_8ed47c9199_b.jpg", text: "Handsome man", counter: 0}],
        },
        history: {
            teams: [{
                id: 1,
                region: "EU",
                teamLogo: "https://cdn1.dotesports.com/wp-content/uploads/2021/05/24170748/FNC.png",
                team: "Fnatic",
                positionLogo: "https://ih1.redbubble.net/image.2354178297.2522/pp,504x498-pad,600x600,f8f8f8.jpg",
                start: "Nov 2013",
                end: "Nov 2014",
                time: "1y 2d"
            }],
            tournaments: [{
                id: 1,
                date: "2014-04-17",
                place: "1",
                event: "EU LCS 2014 Spring",
                eventLogo: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/6f/LCS_Europe_Logo.png",
                result: "3 : 1",
                opositeTeamLogo: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/2f/SK_Gaminglogo_profile.png",
                teamLogo: "https://cdn1.dotesports.com/wp-content/uploads/2021/05/24170748/FNC.png",
                team: "Fnatic"

            }]
        }
    },
    getState(){
        return this._state;
    },
    renderAllTree(){},
    like(postId){
        this._state.main.posts[postId].counter=this._state.main.posts[postId].counter+1;
        this.renderAllTree(this._state,this.like)
    },
    subscriber(observer){
        this.renderAllTree=observer;
    }
}*/
let renderAllTree = () => {

}
let state = {
    main: {
        posts: [
            {
                id: 0,
                img: "https://ae04.alicdn.com/kf/H8055479d3334488390307ab1e9711057E/G2.jpg",
                text: "Спасите меня от G2!!! Я дурак, который не смог прочитать контракт, и теперь второй год обязан буду сидеть на банке. Когда я узнал что будут платить 1'000'000$ в год, я ничего уже не видел",
                counter: 0
            },

            {
                id: 1,
                img: "https://live.staticflickr.com/28/30692301014_8ed47c9199_b.jpg",
                text: "Переезжаю во Францию громить EU masters.",
                counter: 0
            },
            {
                id: 2,
                img: "https://i.ytimg.com/vi/osyf056RHbY/maxresdefault.jpg",
                text: "Ура. G2 Rekkles.",
                counter: 0
            }
        ],
    },
    history: {
        teams: [
            {
                id: 0,
                region: "LEC",
                teamLogo: "https://cdn1.dotesports.com/wp-content/uploads/2021/05/24170748/FNC.png",
                team: "Fnatic",
                positionLogo: "https://ih1.redbubble.net/image.2354178297.2522/pp,504x498-pad,600x600,f8f8f8.jpg",
                start: "Nov 2013",
                end: "Nov 2014",
                time: "1y 2d"
            },
            {
                id: 1,
                region: "LEC",
                teamLogo: "https://image.emojisky.com/301/7924301-middle.png",
                team: "Alliance",
                positionLogo: "https://ih1.redbubble.net/image.2354178297.2522/pp,504x498-pad,600x600,f8f8f8.jpg",
                start: "Nov 2014",
                end: "Jan 2015",
                time: "11mo 14d"
            },
            {
                id: 2,
                region: "LEC",
                teamLogo: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b2/Elements_logo_summer.png",
                team: "Elements",
                positionLogo: "https://ih1.redbubble.net/image.2354178297.2522/pp,504x498-pad,600x600,f8f8f8.jpg",
                start: "Jan 2015",
                end: "May 2015",
                time: "4mo 5d"
            },
            {
                id: 3,
                region: "LEC",
                teamLogo: "https://cdn1.dotesports.com/wp-content/uploads/2021/05/24170748/FNC.png",
                team: "Fnatic",
                positionLogo: "https://ih1.redbubble.net/image.2354178297.2522/pp,504x498-pad,600x600,f8f8f8.jpg",
                start: "May 2015",
                end: "Nov 2020",
                time: "5yr 6mo"
            },
            {
                id: 4,
                region: "LEC",
                teamLogo: "https://ae04.alicdn.com/kf/H8055479d3334488390307ab1e9711057E/G2.jpg",
                team: "G2",
                positionLogo: "https://ih1.redbubble.net/image.2354178297.2522/pp,504x498-pad,600x600,f8f8f8.jpg",
                start: "Nov 2020",
                end: "Nov 2021",
                time: "1yr 25d"
            },
            {
                id: 5,
                region: "LFL",
                teamLogo: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/2d/Karmine_Corplogo_square.png",
                team: "Karmine Corp",
                positionLogo: "https://ih1.redbubble.net/image.2354178297.2522/pp,504x498-pad,600x600,f8f8f8.jpg",
                start: "Nov 2021",
                end: "Nov 2022",
                time: "1yr 11d"
            }],
        tournaments: [{
            id: 1,
            date: "2014-04-17",
            place: "1",
            event: "EU LCS 2014 Spring",
            eventLogo: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/6f/LCS_Europe_Logo.png",
            result: "3 : 1",
            opositeTeamLogo: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/2f/SK_Gaminglogo_profile.png",
            teamLogo: "https://cdn1.dotesports.com/wp-content/uploads/2021/05/24170748/FNC.png",
            team: "Fnatic"

        },
        ]
    }
}
export const like = (postId) => {
    state.main.posts[postId].counter = state.main.posts[postId].counter + 1;
    renderAllTree(state, like)
}
export const subscriber = (observer) => {
    renderAllTree = observer;
}

export default state;