
import css from "./Profile.module.css"


export const Profile = ({ name, tag, location, image, stats }) => {
  
  const { followers, views, likes } = stats;

  return (
    <div className={css.profile}>
          
        <div className={css.profileInfo}>
              <img src={image} alt={`${name} avatar`} />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
          </div>

          
          <ul className={css.profileStats}>
              
          <li className={css.profileStatsItem}>
            <span className={css.label}>Followers:</span> {followers}
          </li>
          <li className={css.profileStatsItem}>
            <span className={css.label}>Views:</span> {views}
          </li>
          <li className={css.profileStatsItem}>
            <span className={css.label}>Likes:</span> {likes}
              </li>
              
        </ul>
      
    </div>
  );
};

