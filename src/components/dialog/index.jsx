import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { createNewPortalRoot } from '../../helpers/dom_helper';
import CloseIcon from '../../../assets/close_icon.svg';

import {
    DialogWrapperStyle,
    DialogStyle,
    DialogHeaderStyle,
    DialogTitleStyle,
    DialogCloseButtonStyle,
    DialogContentStyle,
} from './index.style';

const dialogRootId = 'dialog-root';

function Dialog(props) {
    const { isOpen, onClose } = props;
    let dialogRoot = document.getElementById(dialogRootId);
    if (!dialogRoot) dialogRoot = createNewPortalRoot(dialogRootId);

    useEffect(() => {
        const handleKey = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                onClose();
            }
        };

        document.addEventListener('keydown', handleKey);
        return () => {
            document.removeEventListener('keydown', handleKey);
            onClose();
        }
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => document.body.style.overflow = 'unset';
    }, [isOpen]);

    if (!isOpen) return null;
    return createPortal(
        <DialogContent {...props} />,
        dialogRoot,
    );
}

function DialogContent({
    title,
    closeOnOverlayClick,
    children,
    onClose,
}) {
    return (
        <DialogWrapperStyle
            data-testid='DialogWrapper'
            onClick={closeOnOverlayClick ? onClose : undefined}>
            <DialogStyle
                data-testid='Dialog'
                onClick={(e) => e.stopPropagation()}>
                <DialogHeaderStyle
                    data-testid='DialogHeader'>
                    <DialogTitleStyle
                        data-testid='DialogTitle'>
                        {title}
                    </DialogTitleStyle>
                    <DialogCloseButtonStyle
                        data-testid='DialogCloseButton'
                        onClick={onClose}>
                        <img src={CloseIcon} alt="Close" />
                    </DialogCloseButtonStyle>
                </DialogHeaderStyle>
                <DialogContentStyle
                    data-testid='DialogContent'>
                    {children}
                </DialogContentStyle>
            </DialogStyle>
        </DialogWrapperStyle>
    );
}

Dialog.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    closeOnOverlayClick: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.object,
    ]),
}

Dialog.defaultProps = {
    title: '',
    children: <div />,
}

export default Dialog;