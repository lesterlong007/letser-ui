/**
 * @name ShareModal
 * @author Lester
 * @date 2021-06-10 10:53
 */

import React from 'react';
import style from './style.module.less';

interface ShareModalProps {
  visible: boolean;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ visible, onClose }) => {
  return (
    <>
      {visible && (
        <div className={style.shareWrap} onClick={() => onClose()}>
          <img className={style.shareIcon} src={require('src/assets/images/share_icon.png')} alt="" />
          <img className={style.shareText} src={require('src/assets/images/share_text.png')} alt="" />
        </div>
      )}
    </>
  );
};

export default ShareModal;
