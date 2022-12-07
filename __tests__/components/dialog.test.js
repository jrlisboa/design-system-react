import React from 'react';
import ReactDOM from 'react-dom';

import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react'
import { expect, jest } from '@jest/globals';

import 'jest-styled-components'

import Dialog from '../../src/components/dialog';

describe('Dialog test', () => {
    describe('Component setup', () => {
        beforeAll(() => {
            ReactDOM.createPortal = jest.fn((element, _) => element);
        });

        afterEach(() => {
            ReactDOM.createPortal.mockClear();
        });

        it('creates a portal root when render', async () => {
            render(
                <Dialog
                    isOpen
                    onClose={() => { }}
                    closeOnOverlayClick />,
            );
            const portalRoot = document.getElementById('dialog-root');
            expect(portalRoot.outerHTML).toBe(`<div id="dialog-root"></div>`);
        })

        it('should return null when isOpen is false', async () => {
            const component = renderer.create(
                <Dialog
                    isOpen={false}
                    onClose={() => { }}
                    closeOnOverlayClick={false} />,
            );
            expect(component.toJSON()).toMatchSnapshot();
            expect(component.toJSON()).toBe(null);
        })

        it('verify if dialog has all expected properties', async () => {
            const { getByTestId } = render(
                <Dialog
                    isOpen
                    title="Title"
                    onClose={() => { }}
                    closeOnOverlayClick>
                    <p>Content</p>
                </Dialog>
            );

            expect(getByTestId('DialogWrapper')).toBeTruthy()
            expect(getByTestId('Dialog')).toBeTruthy()
            expect(getByTestId('DialogHeader')).toBeTruthy()
            expect(getByTestId('DialogTitle')).toBeTruthy()
            expect(getByTestId('DialogCloseButton')).toBeTruthy()
            expect(getByTestId('DialogContent')).toBeTruthy()
        })
    })

    describe('Component useEffect behaviors', () => {
        let events = {};

        beforeEach(() => {
            events = {};
            document.addEventListener = jest.fn((event, callback) => {
                events[event] = callback;
            });

            document.removeEventListener = jest.fn((event, _) => {
                delete events[event];
            });
        });

        beforeAll(() => {
            ReactDOM.createPortal = jest.fn((element, _) => element);
        });

        afterEach(() => {
            ReactDOM.createPortal.mockClear();
            document.body.style.overflow = '';
        });

        it('should set body overflow hidden when isOpen is true', async () => {
            render(
                <Dialog
                    isOpen
                    onClose={() => { }}
                    closeOnOverlayClick={false} />,
            );
            expect(document.body.style.overflow).toBe('hidden');
        })

        it('should change body overflow to unset when isOpen is false', async () => {
            const { rerender } = render(
                <Dialog
                    isOpen
                    onClose={() => { }}
                    closeOnOverlayClick={false} />,
            );
            expect(document.body.style.overflow).toBe('hidden');

            rerender(
                <Dialog
                    isOpen={false}
                    onClose={() => { }}
                    closeOnOverlayClick={false} />,
            );
            expect(document.body.style.overflow).toBe('unset');
        })

        it('should set body overflow unset when component will unmount', async () => {
            const { unmount } = render(
                <Dialog
                    isOpen
                    onClose={() => { }}
                    closeOnOverlayClick={false} />,
            );
            expect(document.body.style.overflow).toBe('hidden');

            unmount();
            expect(document.body.style.overflow).toBe('unset');
        })

        it('calls onClose action when Escape key is pressed', async () => {
            const handleProp = { close: () => { } };
            render(
                <Dialog
                    isOpen
                    onClose={() => handleProp.close()}
                    closeOnOverlayClick />,
            );
            jest.spyOn(handleProp, 'close');
            events.keydown({ key: 'Escape', preventDefault: () => { } });

            expect(handleProp.close).toBeCalledTimes(1);
        })

        it('calls onClose and remove event listener when component will unmount', async () => {
            const handleProp = { close: () => { } };
            const { unmount } = render(
                <Dialog
                    isOpen
                    onClose={() => handleProp.close()}
                    closeOnOverlayClick />,
            );

            jest.spyOn(handleProp, 'close');
            unmount();

            expect(handleProp.close).toBeCalledTimes(1);
            expect(Object.keys(events).length).toBe(0);
        })
    })

    describe('Component snapshot check', () => {
        it('renders correctly', async () => {
            const component = renderer.create(
                <Dialog
                    isOpen
                    title="Title"
                    onClose={() => { }}
                    closeOnOverlayClick>
                    <p>Content</p>
                </Dialog>
            ).toJSON();
            expect(component).toMatchSnapshot();
        })

        it('adds another child item', async () => {
            const component = renderer.create(
                <Dialog
                    isOpen
                    title="Title"
                    onClose={() => { }}
                    closeOnOverlayClick>
                    <p>Content</p>
                    <p>Content 2</p>
                </Dialog>
            ).toJSON();
            expect(component).toMatchSnapshot();
        })

        it('changes closeOnOverlayClick attribute', async () => {
            const component = renderer.create(
                <Dialog
                    isOpen
                    title="Title"
                    onClose={() => { }}
                    closeOnOverlayClick={false}>
                    <p>Content</p>
                </Dialog>
            ).toJSON();
            expect(component).toMatchSnapshot();
        })

        it('changes isOpen attribute', async () => {
            const component = renderer.create(
                <Dialog
                    isOpen={false}
                    title="Title"
                    onClose={() => { }}
                    closeOnOverlayClick>
                    <p>Content</p>
                </Dialog>
            ).toJSON();
            expect(component).toMatchSnapshot();
        })

        it('render just with required attributes', async () => {
            const component = renderer.create(
                <Dialog
                    isOpen={false}
                    onClose={() => { }}
                    closeOnOverlayClick />
            ).toJSON();
            expect(component).toMatchSnapshot();
        })
    })

    describe('Component click behaviors', () => {
        it('closes dialog on background layer click', async () => {
            const handleProp = { close: () => { } };
            const { getByTestId } = render(
                <Dialog
                    isOpen
                    title="Title"
                    onClose={() => handleProp.close()}
                    closeOnOverlayClick>
                    <p>Content</p>
                </Dialog>
            );
            jest.spyOn(handleProp, 'close');
            fireEvent.click(getByTestId('DialogWrapper'));

            expect(handleProp.close).toBeCalledTimes(1);
        })

        it('ignores click on background layer', async () => {
            const handleProp = { close: () => { } };
            const { getByTestId } = render(
                <Dialog
                    isOpen
                    title="Title"
                    onClose={() => handleProp.close()}
                    closeOnOverlayClick={false}>
                    <p>Content</p>
                </Dialog>
            );
            jest.spyOn(handleProp, 'close');
            fireEvent.click(getByTestId('DialogWrapper'));

            expect(handleProp.close).toBeCalledTimes(0);
        })

        it('closes dialog with DialogCloseButton click', async () => {
            const handleProp = { close: () => { } };
            const { getByTestId } = render(
                <Dialog
                    isOpen
                    title="Title"
                    onClose={() => handleProp.close()}
                    closeOnOverlayClick>
                    <p>Content</p>
                </Dialog>
            );
            jest.spyOn(handleProp, 'close');
            fireEvent.click(getByTestId('DialogCloseButton'));

            expect(handleProp.close).toBeCalledTimes(1);
        })
    })
})