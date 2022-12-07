import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import ExampleImage from '../../assets/example_image.png';

import Dialog from '../components/dialog';
import Theme from '../components/theme.style';
import GlobalStyle from '../components/global.style';

import {
    ExampleButtonStyle,
    ExamplePage,
} from './index.style';

function Example() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <ThemeProvider theme={Theme}>
            <ExamplePage>
                <GlobalStyle />
                <ExampleButtonStyle
                    onClick={() => setIsDialogOpen(true)}>
                    Open React Dialog
                </ExampleButtonStyle>
                <Dialog
                    title="Title"
                    isOpen={isDialogOpen}
                    onClose={() => setIsDialogOpen(false)}
                    closeOnOverlayClick>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.</p>
                    <img src={ExampleImage} alt="Image" />
                </Dialog>
            </ExamplePage>
        </ThemeProvider>
    );
}

const container = document.getElementById('app');
const root = createRoot(container)
root.render(<Example />);
