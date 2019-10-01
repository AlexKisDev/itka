import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return <div className={s.content}>
    Main content
    <MyPosts/>
</div>
}

export default Profile;