import { useRef, useState } from "react";
import ProfilePicture from "../../components/profilePicture/ProfilePicture";
import Friendship from "./Friendship";
import { Link } from "react-router-dom";


export default function ProfilePictureInfo({
                                                profile,
                                                visitor,
                                                photos,
                                                otherName,
                                            }) {
    const [show, setShow] = useState(false);
    const pRef = useRef(null);

    return (
        <div className="profile_img_wrap">
            {show && <ProfilePicture setShow={setShow} pRef={pRef} photos={photos} />}
            <div className="profile_w_left">
                <div className="profile_w_img">
                    <div
    className="profile_w_bg"
    ref={pRef}
    style={{
        backgroundSize: "cover",
        backgroundImage: `url(${profile.picture})`,
    }}
    />
                    {!visitor && (
                        <div
                            className="profile_circle hover1"
                            onClick={() => setShow(true)}
                        >
                            <i className="camera_filled_icon"/>
                        </div>
                    )}
                </div>
                <div className="profile_w_col">
                    <div className="profile_name">
                        {profile.first_name} {profile.last_name}
                        <div className="otherName">{otherName && `(${otherName})`}</div>
                    </div>
                    <div className="profile_friend_count">
                        {profile?.friends && (
                            <div className="profile_card_count">
                                {profile?.friends.length === 0
                                    ? ""
                                    : profile?.friends.length === 1
                                        ? "1 Friend"
                                        : `${profile?.friends.length} Friends`}
                            </div>
                        )}
                    </div>
                    <div className="profile_friend_imgs">
                        {profile?.friends &&
                            profile.friends.slice(0, 6).map((friend, i) => (
                                <Link to={`/profile/${friend.userName}`} key={i}>
                                    <img
                                        src={friend.picture}
                                        alt=""
                                        style={{
                                            transform: `translateX(${-i * 7}px)`,
                                            zIndex: `${i}`,
                                        }}
                                    />
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
            {visitor ? (
                <Friendship friendshipp={profile?.friendship} profileid={profile._id} />
            ) : (
                <div className="profile_w_right">
                    <div className="blue_btn">
                        <img src="../../../public/icons/plus.png" alt="" className="invert" />
                        <span>Add to story</span>
                    </div>
                    <div className="gray_btn">
                        <i className="edit_icon"/>
                        <span>Edit profile</span>
                    </div>
                </div>
            )}
        </div>
    );
}