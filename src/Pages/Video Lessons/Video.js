import cls from "./Video.module.scss";

import Video_card from "../../Components/Video_card/Video_card";

const video_links = [
    {
        link: 'https://www.youtube.com/embed/zOjov-2OZ0E',
        id:1
    },
    {
        link: 'https://www.youtube.com/embed/bJzb-RuUcMU',
        id:2
    },
    {
        link: 'https://www.youtube.com/embed/rfscVS0vtbw',
        id:3
    },
    {
        link: 'https://www.youtube.com/embed/FCMxA3m_Imc',
        id:4
    },
    {
        link: 'https://www.youtube.com/embed/HIj8wU_rGIU',
        id:5
    },
    {
        link: 'https://www.youtube.com/embed/_uQrJ0TkZlc',
        id:6
    },
    {
        link: 'https://www.youtube.com/embed/I-k-iTUMQAY',
        id:7
    },
    {
        link: 'https://www.youtube.com/embed/rfscVS0vtbw',
        id:8
    },
]


const Video = () =>{
        return(
        <div className={cls.root}>
            <div className={cls.container}>
                {
                    video_links.map(({link, id}) =>{
                        return(
                            <Video_card link={link} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Video;