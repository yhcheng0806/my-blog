import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Upload, Image } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

import Icon from "../common/Icon";
import noAvatar from "../../assets/images/noAvatar.png";
import * as postApi from "../../api/models/posts";
import * as commonApi from "../../api/models/common";

import {
  ShareWrapper,
  ShareTop,
  Avatar,
  Textarea,
  ShareContainer,
  ImageContainer,
  ShareBottom,
  ShareOptions,
  ShareOption,
  ShareButton,
} from "./styles";

const defalutFormData = {
  desc: "",
};

const Share = ({ shareRefresh, setShareRefresh }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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

  const uploadFile = async (e) => {
    console.log(e, "--e---");
    const file = e.target.files[0];
    const fileName = Date.now() + file.name;
    const formData = new FormData();
    formData.append("name", fileName);
    formData.append("file", file);
    await commonApi.upload(formData);
    setFormData({ ...formData, photo: fileName });
  };

  // const uploadFile = async ({ file, filename, onError, onSuccess }) => {
  //   console.log(file, filename, "---e-----");
  //   const formData = new FormData();
  //   formData.append("name", file.name);
  //   formData.append(file, file);
  //   setFormData({ ...formData, photo: file.name });

  //   try {
  //     const res = await commonApi.upload(formData);
  //     onSuccess(res, file);
  //   } catch (error) {
  //     onError(error);
  //   }
  // };

  const createShare = async () => {
    console.log(formData, "-createShare");
    try {
      await postApi.createPost({
        ...formData,
        userId: userInfo._id,
      });
      setFormData(defalutFormData);
      setShareRefresh(!shareRefresh);
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
      <ShareContainer>
        {formData?.photo && (
          <ImageContainer>
            <CloseCircleFilled
              className="closeIcn"
              onClick={() => setFormData({ ...formData, photo: null })}
            />
            <Image width="100%" src={PF + formData.photo} />
          </ImageContainer>
        )}
      </ShareContainer>
      <ShareBottom>
        <ShareOptions>
          {/* <ShareOption>
            <Upload status="uploading" name="file" customRequest={uploadFile}>
              <Icon />
              <strong>照片/视频</strong>
            </Upload>
          </ShareOption> */}
          <ShareOption>
            <label htmlFor="file">
              <Icon />
              <strong>照片/视频</strong>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => uploadFile(e)}
              />
            </label>
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
