import React from 'react';

//Styles
import { Wrapper } from './ErrorAlert.styles';

const ErrorAlert = ({ eType }) => (
    <Wrapper>
        Something Went Wrong! Error: {eType}
    </Wrapper>
);

export default ErrorAlert;