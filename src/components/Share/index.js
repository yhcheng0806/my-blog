import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Icon from "../common/Icon";
import noAvatar from "../../assets/images/noAvatar.png";
import * as api from "../../api";

import {
  ShareWrapper,
  ShareTop,
  Avatar,
  Textarea,
  ShareContainer,
  ShareBottom,
  ShareOptions,
  ShareOption,
  ShareButton,
} from "./styles";

const defalutFormData = {
  desc: "",
};

const Share = () => {
  const [formData, setFormData] = useState(defalutFormData);
  const { userInfo } = useSelector((state) => state.user);
  const textareaEl = useRef(null);

  const onEdit = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    textareaEl.current.style.height = "auto";

    // //如果高度不够，再重新设置
    if (textareaEl.current.scrollHeight >= textareaEl.current.offsetHeight) {
      textareaEl.current.style.height = textareaEl.current.scrollHeight + "px";
    }
  };

  const createShare = async () => {
    console.log(formData, "-createShare");
    try {
      await api.createPost({
        ...formData,
        userId: userInfo._id,
      });
      setFormData(defalutFormData);
    } catch (error) {}
  };

  return (
    <ShareWrapper>
      <ShareTop>
        <Avatar src={userInfo.avatar || noAvatar} />
        <Textarea
          placeholder="分享你的趣事"
          onChange={onEdit}
          value={formData?.desc}
          name="desc"
          ref={textareaEl}
        />
      </ShareTop>
      <ShareContainer></ShareContainer>
      <ShareBottom>
        <ShareOptions>
          <ShareOption>
            <Icon />
            <strong>照片/视频</strong>
          </ShareOption>
          <ShareOption>
            <Icon />
            <strong>#标签</strong>
          </ShareOption>
          <ShareOption>
            <Icon />
            <strong>权限</strong>
          </ShareOption>
          <ShareOption>
            <Icon />
            <strong>表情</strong>
          </ShareOption>
        </ShareOptions>
        <ShareButton onClick={createShare}>分享</ShareButton>
      </ShareBottom>
    </ShareWrapper>
  );
};

export default Share;
