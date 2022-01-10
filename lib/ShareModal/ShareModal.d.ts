/**
 * @name ShareModal
 * @author Lester
 * @date 2021-06-10 10:53
 */
import React from 'react';
interface ShareModalProps {
    visible: boolean;
    onClose: () => void;
}
declare const ShareModal: React.FC<ShareModalProps>;
export default ShareModal;
