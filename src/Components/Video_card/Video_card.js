
import cls from "./Video_card.module.scss";


const Video_card = ({link}) =>{
    return(
        <iframe width="430" height="255" className={cls.video_card} src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}
export default Video_card