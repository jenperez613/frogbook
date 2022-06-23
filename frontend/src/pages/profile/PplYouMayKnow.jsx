import { Dots } from "../../svg";
import { stories } from "../../data/home";
import AddFriendSmallCard from "./AddFriendSmallCard";


export default function PplYouMayKnow() {
    return (
        <div className="pplYouMayKnow">
            <div className="pplYouMayKnow">
                People You May Know
                <div className="post_header_right ppl_circle hover1">
                    <Dots />
                </div>
            </div>
            <div className="pplYouMayKnow">
                {stories.map((item, i) => (
                    <AddFriendSmallCard item={item} key={i} />
                ))}
            </div>
        </div>
    );
}
