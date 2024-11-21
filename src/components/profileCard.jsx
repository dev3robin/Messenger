function ProfileCard(props){
      const {size,avatar,story}=props
      return (
            <div className="profile-card">
                  <div className={"story-circle " + (story?"has-story":'')}>
                        <div id="profile" style={{ width: size, height: size }}>
                              {avatar}
                        </div>
                  </div>
            </div>
      )
}

export default ProfileCard;